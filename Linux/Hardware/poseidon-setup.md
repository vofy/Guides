# Poseidon setup

Fedora 44 Workstation · NVIDIA GeForce GTX 1080 Ti (Pascal, GP102) · Intel board · GNOME (Wayland)

---

## 1. NVIDIA driver (580xx legacy)

NVIDIA 590+ (Fedora 44 default is 595) dropped Pascal; **580 is the final branch** for GTX 10-series.

```bash
# Full RPM Fusion repos (legacy drivers are NOT in the default "NVIDIA driver" repo)
sudo dnf install \
  https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
  https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

# Remove current driver if present, install 580xx
sudo dnf remove xorg-x11-drv-nvidia akmod-nvidia
sudo dnf install akmod-nvidia-580xx xorg-x11-drv-nvidia-580xx xorg-x11-drv-nvidia-580xx-cuda

# Wait for module build, then reboot
modinfo -F version nvidia
sudo reboot
```

- **Don't** use `akmod-nvidia` (595, no Pascal) or `akmod-nvidia-open` (no Pascal).
- **Build logs:** `/var/cache/akmods/nvidia-580xx/.last.log`, `/var/log/akmods/akmods.log`
- **Secure Boot** (if enabled): `sudo kmodgenca -a && sudo mokutil --import /etc/pki/akmods/certs/public_key.der`, confirm in MOK screen on reboot.

**Verify:**
```bash
cat /proc/driver/nvidia/version        # 580.x
lspci -k | grep -A3 -i vga             # Kernel driver in use: nvidia
lsmod | grep nouveau                   # no output
```

---

## 2. Early KMS (no splash resize on boot)

Load NVIDIA from initramfs so Plymouth starts at native resolution.

```bash
echo 'force_drivers+=" nvidia nvidia_modeset nvidia_uvm nvidia_drm "' | sudo tee /etc/dracut.conf.d/nvidia.conf
sudo dracut --force
```

**Verify:**
```bash
sudo lsinitrd | grep -E '/nvidia(-drm|-modeset|-uvm)?\.ko'   # all 4 modules
sudo cat /sys/module/nvidia_drm/parameters/modeset            # Y
sudo cat /sys/module/nvidia_drm/parameters/fbdev              # Y
```

> ⚠️ **After every NVIDIA driver update:** wait for akmods to finish (`modinfo -F version nvidia` shows new version), then `sudo dracut --force` before rebooting.

**Undo:** `sudo rm /etc/dracut.conf.d/nvidia.conf && sudo dracut --force`

---

## 3. Suspend fix (black screen / hang on suspend)

**Symptom:** suspend → black screen, PC keeps running, Caps Lock works, Ctrl+Alt+F3 dead.

**Cause:** deadlock between systemd ≥256 user-session freezing and the NVIDIA driver. `nvidia-suspend.service` suspends the GPU → gnome-shell blocks inside the driver → systemd can't freeze it → never sleeps. Officially recommended fix for proprietary NVIDIA: disable session freezing.

```bash
sudo mkdir -p /etc/systemd/system/systemd-suspend.service.d
printf '[Service]\nEnvironment="SYSTEMD_SLEEP_FREEZE_USER_SESSIONS=false"\n' | \
  sudo tee /etc/systemd/system/systemd-suspend.service.d/10-nvidia-no-freeze.conf

for s in hibernate hybrid-sleep suspend-then-hibernate; do
  sudo mkdir -p /etc/systemd/system/systemd-$s.service.d
  sudo cp /etc/systemd/system/systemd-suspend.service.d/10-nvidia-no-freeze.conf \
          /etc/systemd/system/systemd-$s.service.d/
done

sudo systemctl daemon-reload
```

**Verify:**
```bash
systemctl show systemd-suspend.service -p Environment
# Environment=SYSTEMD_SLEEP_FREEZE_USER_SESSIONS=false
```

**Prerequisites (already default with RPM Fusion `-power` package):**
```bash
systemctl is-enabled nvidia-suspend nvidia-resume nvidia-hibernate   # all enabled
sudo grep -E 'PreserveVideoMemory|TemporaryFilePath' /proc/driver/nvidia/params
# PreserveVideoMemoryAllocations: 1, TemporaryFilePath: "/var/tmp"
```

> Note: `NVreg_UseKernelSuspendNotifiers=1` is the cleaner alternative, but it's mainly a 595+ feature — keep the drop-in on 580.

---

## Troubleshooting

```bash
# Logs from previous boot (after a hang)
journalctl -b -1 --no-pager | grep -E 'PM: |systemd-sleep|nvidia-(suspend|resume)|NVRM|Xid' | tail -60
journalctl --list-boots | tail -4

# Before hard reset on hang: Alt+PrtSc+S (sync logs to disk), wait 5 s
```

**Known quirk:** boot timestamps in the journal are off by ~1 h (RTC read in wrong timezone, typical with Windows dual-boot). Check `timedatectl` → "RTC in local TZ". Not yet fixed.
