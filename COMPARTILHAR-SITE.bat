@echo off
chcp 65001 > nul
title DUALCON - Compartilhamento Online para Cliente

echo ========================================================
echo   DUALCON - Compartilhamento Seguro para Aprovacao
echo ========================================================
echo.
echo 1. Iniciando servidor local do site...

start /B "" bun run dev --port 3001 > nul 2>&1
timeout /t 3 > nul

echo 2. Criando link seguro de internet (Cloudflare Tunnel)...
echo.
echo ========================================================
echo   LINK PUBLICO SERA EXIBIDO ABAIXO (procure pela URL .trycloudflare.com)
echo   Copie o link https://...trycloudflare.com e envie ao cliente.
echo.
echo   PARA INTERROMPER A VISUALIZACAO:
echo   Basta FECHAR esta janela preta ou apertar CTRL + C !
echo   Assim que fechar, o link sai do ar imediatamente.
echo ========================================================
echo.

"C:\Program Files (x86)\cloudflared\cloudflared.exe" tunnel --url http://127.0.0.1:3001

echo.
echo Servidor encerrado. O link nao esta mais acessivel.
pause
