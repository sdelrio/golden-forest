# Restic

[Restic](https://restic.net/) is a modern, fast, secure, and efficient backup program that works across Linux, BSD, macOS, and Windows. It is designed to be easy to use and provides robust data protection through encryption and deduplication.

## Key Features

*   **Deduplication**: Only one copy of identical data is stored, saving significant storage space.
*   **Encryption**: All data is encrypted by default using AES-256 in counter mode and authenticated using Poly1305.
*   **Efficiency**: Incremental backups only store changed data.
*   **Cross-platform**: Consistent experience across all major operating systems.
*   **Storage Flexibility**: Supports local directories, SFTP, Amazon S3, Minio, Wasabi, Google Cloud Storage, Backblaze B2, Azure Blob Storage, and many more via `rclone`.
*   **Compression**: (Since v0.14.0) Reduces storage footprint, especially for text-heavy data.

## Installation

### macOS
```bash
brew install restic
```

### Linux
*   **Ubuntu/Debian**: `sudo apt install restic`
*   **Fedora**: `sudo dnf install restic`
*   **Arch Linux**: `sudo pacman -S restic`

### Windows
Install via [Scoop](https://scoop.sh/) or [Chocolatey](https://chocolatey.org/):
```powershell
scoop install restic
# or
choco install restic
```

## Getting Started

### 1. Initialize a Repository
A "[repository](https://restic.readthedocs.io/en/stable/030_preparing_a_new_repo.html)" is where your backups are stored.

**Local Repository:**
```bash
restic init --repo /path/to/backup-repo
```

**SFTP Repository:**
```bash
restic -r sftp:user@host:/path/to/repo init
```
:::warning[Important]
Choose a strong password. If you lose it, your data is **unrecoverable**.
:::

### 2. Create a Backup
```bash
restic -r /path/to/repo backup /path/to/data
```

### 3. List Snapshots
```bash
restic -r /path/to/repo snapshots
```

### 4. Restore Data
```bash
restic -r /path/to/repo restore latest --target /path/to/restore-location
```

## Maintenance

### Integrity Check
Verify that the repository is not corrupted:
```bash
restic -r /path/to/repo check
```

### Snapshots Cleanup
Manage retention by removing old snapshots and freeing up space:
```bash
# Keep last 7 daily snapshots
restic -r /path/to/repo forget --keep-daily 7 --prune
```

## Advanced Features

### Mount Repository
Browse your backups as a regular filesystem (requires FUSE):
```bash
mkdir /mnt/restic
restic -r /path/to/repo mount /mnt/restic
```

### Automation
Use environment variables to avoid typing flags every time:
```bash
export RESTIC_REPOSITORY="/path/to/repo"
export RESTIC_PASSWORD_FILE="/path/to/password-file"
restic backup /path/to/data
```

## References

*   [Official Homepage](https://restic.net/)
*   [Restic Documentation](https://restic.readthedocs.io/)
*   [GitHub Repository](https://github.com/restic/restic)

