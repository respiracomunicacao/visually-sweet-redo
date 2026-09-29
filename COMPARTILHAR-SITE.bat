@echo off
chcp 65001 > nul
title DUALCON - Compartilhamento Online (Controle Total)

echo =========================================================================
echo   DUALCON - COMPARTILHAR SITE ONLINE COM O CLIENTE
echo =========================================================================
echo.

cd /d "%~dp0"

echo [1/3] Fechando instancias antigas...
taskkill /F /IM cloudflared.exe > nul 2>&1
taskkill /F /IM bun.exe > nul 2>&1
timeout /t 1 > nul

echo [2/3] Iniciando servidor do site...
start /B "" bun run dev --port 3001 --host 0.0.0.0 > nul 2>&1
timeout /t 4 > nul

echo [3/3] Criando link de visualizacao...
echo.
echo =========================================================================
echo   O LINK DE ACESSO SERA GERADO ABAIXO:
echo   (Copie o link https://....trycloudflare.com e envie ao cliente)
echo.
echo   COMO TIRAR DO AR A QUALQUER MOMENTO:
echo   Basta FECHAR esta janela preta ou clicar em PARAR-COMPARTILHAMENTO.bat!
echo   O site sai do ar imediatamente no momento em que voce fechar.
echo =========================================================================
echo.

"C:\Program Files (x86)\cloudflared\cloudflared.exe" tunnel --protocol http2 --url http://127.0.0.1:3001

echo.
echo =========================================================================
echo   Servidor encerrado. O link nao esta mais acessivel ao cliente.
echo =========================================================================
pause
