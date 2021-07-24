@echo off
Mode con: cols=15 lines=2 & Title 0
start /min cmd.exe /C "code . > Nul"
start /min cmd.exe /C "github ."
start /min cmd.exe /C "start chrome https://127.0.0.1.nip.io/NetOS/netos.test.html"
exit