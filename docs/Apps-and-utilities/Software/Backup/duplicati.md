# Duplicati

[Duplicati](https://www.duplicati.com/) is a free, open-source backup client that securely stores encrypted, incremental, and compressed backups on various local and remote storage destinations. It is managed through a user-friendly web interface.

## Key Features

*   **Strong Encryption**: Uses AES-256 (or GnuPG) to protect data before it leaves your device.
*   **Incremental Backups**: Only changed data blocks are uploaded, saving bandwidth and time.
*   **Deduplication & Compression**: Efficient block-level deduplication and compression reduce storage costs.
*   **Web-based Management**: Configure and monitor backups from any browser (including mobile).
*   **Open File Support**: Utilizes VSS (Windows) or LVM (Linux) to back up files currently in use.
*   **Auto-Verification**: Regularly tests backup integrity to ensure data can be recovered.

## Supported OS

*   **Windows**: MSI installer (supports VSS for locked files).
*   **macOS**: DMG package (Apple Silicon and Intel supported).
*   **Linux**: Debian (.deb), RedHat (.rpm), and Docker images.
*   **NAS**: Native support for Synology, QNAP, and others.

## Getting Started

### 1. Installation & Launch
After installation, open your browser and navigate to:
`http://localhost:8200`

### 2. Configure a New Backup
1.  **Add Backup**: Select "Configure a new backup".
2.  **General**: Set a name and a strong **passphrase**.
    :::warning[Important]
    Your passphrase is the only way to decrypt your data. If lost, your backups are **unrecoverable**.
    :::
3.  **Destination**: Choose your storage backend (see list below).
4.  **Source Data**: Pick the folders you want to protect.
5.  **Schedule**: Set the frequency (e.g., daily at 2:00 AM).
6.  **Options**: Configure retention (e.g., "Keep a specific number of backups").

### 3. Restoring Files
Recovery is performed directly through the web UI by selecting "Restore" and choosing the snapshot and files you need.

## [Supported Backends](https://duplicati.readthedocs.io/en/latest/01-introduction/#supported-backends)

### Cloud Storage
*   **Amazon S3**, Google Cloud Storage, Azure Blob.
*   **Google Drive**, OneDrive (Personal/Business), Dropbox, Box.com.
*   **Backblaze B2**, Wasabi, Jottacloud, Mega.nz.

### Protocols & Network
*   **FTP / SFTP (SSH)** / **WebDAV**.
*   **Local folders** and Network shares (UNC paths/SMB).
*   Generic **S3-compatible** storage.

## Best Practices

*   **Passphrase Security**: Store your encryption passphrase in a password manager.
*   **Test Restores**: Periodically restore a few files to verify the entire chain works.
*   **Retention Policy**: Use "Smart Backup Retention" to balance storage costs with recovery history.
*   **Offsite Backup**: Always ensure at least one backup destination is outside your physical location.

## References

*   [Official Homepage](https://www.duplicati.com/)
*   [User Manual](https://duplicati.readthedocs.io/)
*   [GitHub Repository](https://github.com/duplicati/duplicati)
*   [Comparison: Duplicati vs Restic](https://b3n.org/switched-to-duplicati-for-windows-backups-and-restic-for-linux-servers/)

