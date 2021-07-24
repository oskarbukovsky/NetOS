@echo off
echo.Working...

type netos.js > netos.max.js
type spipa.js >> netos.max.js
type vigenere.js >> netos.max.js
type rsa.js >> netos.max.js
type keygen.js >> netos.max.js
type hex.js >> netos.max.js
type base64.js >> netos.max.js

cmd.exe /c "javascript-obfuscator netos.max.js --output netos.obs.js --debug-protection true --debug-protection-interval true --self-defending true --rename-properties false --reserved-names '*' --reserved-strings '*' --seed 144946" > Nul
cmd.exe /c "uglifyjs netos.obs.js -o netos.min.js --comments some --source-map "url='netos.min.js.map'" --mangle -c drop_console=true,drop_debugger=false,keep_fargs=true,merge_vars=false,merge_vars=false,reduce_funcs=false,toplevel=vars" > Nul

rem del netos.max.js > Nul
del netos.obs.js > Nul

echo.Done!
ping 127.0.0.1 -n 1 > Nul
exit