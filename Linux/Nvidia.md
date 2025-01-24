# How to install the NVIDIA driver on Arch Linux.
Backup of great [article](https://dev.to/vitorvargas/how-to-install-the-nvidia-driver-on-archlinux-5bgc) by [Vitor Vargas](https://dev.to/vitorvargas)

Sometimes, the Arch Linux documentation may feel like a maze, filled with comprehensive information but so extensive that it's easy to get lost. This article aims to simplify the process of configuring the NVIDIA driver on Arch Linux, providing a more accessible guide for myself and others who may face similar challenges in the future.

Checking the NVIDIA GPU Architecture

Before proceeding, it is crucial to check the exact architecture of the NVIDIA GPU installed on your system. This will ensure correct compatibility with the appropriate driver. Run the following command to identify your GPU's architecture:

```
lspci | grep -E "VGA|3D"
```

Make sure to look up the NVIDIA GPU information on the official NVIDIA website to ensure the correct driver selection.

## Step 1: System Update
Make sure your system is up to date with the following command:

```
sudo pacman -Syu --noconfirm
```

## Step 2: Installation of Required Packages
Install the necessary packages for the NVIDIA driver with the command:

```
sudo pacman -S --noconfirm nvidia nvidia-utils nvidia-settings opencl-nvidia xorg-server-devel
```

```diff
+ Tip: If you are using the LTS kernel, install nvidia-lts instead of nvidia.
```

## Step 3: Xorg Configuration
Create the necessary directory and configure the file for Xorg:

```
mkdir -p /etc/X11/xorg.conf.d
```

```
cat >> /etc/X11/xorg.conf.d/10-nvidia-drm-outputclass.conf<<EOF
Section "OutputClass"
    Identifier "intel"
    MatchDriver "i915"
    Driver "modesetting"
EndSection

Section "OutputClass"
    Identifier "nvidia"
    MatchDriver "nvidia-drm"
    Driver "nvidia"
    Option "AllowEmptyInitialConfiguration"
    Option "PrimaryGPU" "yes"
    ModulePath "/usr/lib/nvidia/xorg"
    ModulePath "/usr/lib/xorg/modules"
EndSection
EOF
```

In this step, we are creating and configuring the 10-nvidia-drm-outputclass.conf file in the /etc/X11/xorg.conf.d/ directory. This file is essential for defining Xorg output settings for Intel and NVIDIA GPUs. It uses the "OutputClass" sections to associate the modesetting driver with the Intel GPU and the nvidia driver with the NVIDIA GPU.

## Step 4: GDM (GNOME Display Manager) Configuration

```
mkdir -p /usr/share/gdm/greeter/autostart
mkdir -p /etc/xdg/autostart
```

```
cat >> /usr/share/gdm/greeter/autostart/optimus.desktop<<EOF
[Desktop Entry]
Type=Application
Name=Optimus
Exec=sh -c "xrandr --setprovideroutputsource modesetting NVIDIA-0; xrandr --auto"
NoDisplay=true
X-GNOME-Autostart-Phase=DisplayServer
EOF

cat >> /etc/xdg/autostart/optimus.desktop<<EOF
[Desktop Entry]
Type=Application
Name=Optimus
Exec=sh -c "xrandr --setprovideroutputsource modesetting NVIDIA-0; xrandr --auto"
NoDisplay=true
X-GNOME-Autostart-Phase=DisplayServer
EOF
```

Here, we are creating two .desktop files to integrate Optimus optimization with GDM. GDM is configured to automatically run the xrandr script to allocate video outputs correctly between Intel and NVIDIA GPUs during the graphical server startup.

What is NVIDIA Optimus?
NVIDIA Optimus is a technology that automatically manages the use of integrated and dedicated graphics cards in laptops to optimize performance and save energy. In summary, it helps balance processing power as needed.

If you are using a different Login Manager than GDM, follow the ArchLinux documentation here.

## Step 5: Modprobe Configuration
Configure Modprobe for the NVIDIA driver:

```
mkdir -p /etc/modprobe.d
```

cat >> /etc/modprobe.d/nvidia-drm-nomodeset.conf<<EOF
options nvidia-drm modeset=1
EOF

This step configures Modprobe for the NVIDIA driver, specifically for nvidia-drm. We are adding an option to the nvidia-drm-nomodeset.conf file to enable the modeset mode, which is essential for smooth integration of the NVIDIA driver with the graphical environment.

## Step 6: Initramfs Reconstruction
Rebuild Initramfs to ensure the changes are applied:

```
sudo mkinitcpio -P
```

Initramfs reconstruction is crucial to apply changes made to kernel modules, ensuring the system correctly recognizes the new graphical environment with the NVIDIA driver.

## Step 7: Running nvidia-xconfig

```
sudo nvidia-xconfig
```

The nvidia-xconfig command is used to generate a specific Xorg configuration file for the NVIDIA driver. This helps ensure that the necessary settings are present and optimized for the installed NVIDIA GPU.

## Step 8: Testing and Verifying the NVIDIA Driver

Restart the system to apply all configurations. After the restart, check if the NVIDIA driver is loaded correctly using the command: nvidia-smi. Additionally, open the NVIDIA X Server Settings or use the nvidia-settings command to access the graphical interface and check specific GPU settings.

With the completion of the NVIDIA driver configuration on Arch Linux, I sincerely hope this guide has been valuable to you! Thank you sincerely for investing your time in reading this article.
Sources

- [ArchLinux Docs: NVIDIA](https://wiki.archlinux.org/title/NVIDIA)
- [ArchLinux Docs: NVIDIA Optimus](https://wiki.archlinux.org/title/NVIDIA_Optimus#Display_managers)
