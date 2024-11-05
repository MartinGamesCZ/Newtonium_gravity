VBoxManage startvm win11
sleep 30
VBoxManage guestcontrol win11 run --exe "C:\\Windows\\System32\\cmd.exe" --username martin --password martin -- cmd /c "cd /d Y:\test && bun run start"
VBoxManage controlvm win11 savestate