# Windows MBR repair

F8 on boot menu or if it doesn't even boot use Windows USB boot install and on install windows click *Repair* on the bottom left of the dialog. You will get a menu with three options:

* Continue
* Solve problems (press here)
  * Advanced options (press here)
    * System symbol (press here)
* Shutdown


Now we have a terminal, execute this commands:

```
bootrec /fixmbr
bootrec /fixboot
bcdedit /export c:\bcdbackup
attrib c:\boot\bcd -h -r -s
ren c:\boot\bcd bcd.old
bootrec /rebuildbcd
exit
```

Write yes when you get question on `bootrec` command.

![Windows terminal](/img/windows-mbr.png)

Press `continue` option after exit from the terminal.

## UEFI repair

```
bcdboot D:\windows /s C: /f UEFI
```

