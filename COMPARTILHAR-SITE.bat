@echo off
chcp 65001 > nul
title DUALCON - Compartilhamento Online para Cliente

echo ========================================================
echo   DUALCON - Compartilhamento Seguro para Aprovacao
echo ========================================================
echo.

:: 1. Limpa instancias anteriores que possam ter ficado presas
taskkill /F /IM cloudflared.exe > nul 2>&1
taskkill /F /IM bun.exe > nul 2>&1
timeout /t 1 > nul

:: 2. Inicia o servidor local com host 0.0.0.0
echo [1/3] Iniciando servidor local do site...
start /B "" bun run dev --port 3001 --host 0.0.0.0 > nul 2>&1

:: Aguarda o servidor subir
echo [2/3] Aguardando inicializacao do servidor...
timeout /t 4 > nul

echo [3/3] Criando link seguro de internet...
echo.
echo =========================================================================
echo   O LINK PUBLICO APARECERA ABAIXO EM POUCOS SEGUNDOS:
echo   (Copie o link que termina em .trycloudflare.com e envie ao cliente)
echo.
echo   PARA PAUSAR / TIRAR DO AR:
echo   Basta fechar esta janela preta ou rodar o PARAR-COMPARTILHAMENTO.bat!
echo =========================================================================
echo.

:: 3. Inicia o tunnel com protocolo http2
"C:\Program Files (x86)\cloudflared\cloudflared.exe" tunnel --protocol http2 --url http://127.0.0.1:3001

echo.
echo ========================================================
echo   Servidor encerrado. O link nao esta mais acessivel.
echo ========================================================
pause
