## Remember Personal Access Token
```
git config --global credential.helper store
```

## Remove all history of file/directory
[https://github.com/newren/git-filter-repo](git-filter-repo)
```
python3 ./git-filter-repo --path <path> --invert-paths
git remote add origin <url>
git push origin main --tags --force
```
`--invert-paths` argument is mandatory. By default path path argument defines which files should be kept.

or

```
git filter-branch --tree-filter 'rm -f filename' HEAD
git push origin main --tags --force
```
