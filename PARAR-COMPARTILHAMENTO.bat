@echo off
chcp 65001 > nul
title DUALCON - Parar Compartilhamento

echo ========================================================
echo   Encerrando compartilhamento online...
echo ========================================================
echo.

taskkill /F /IM cloudflared.exe > nul 2>&1
taskkill /F /IM bun.exe > nul 2>&1

echo [OK] O link online foi DESATIVADO com sucesso.
echo O cliente nao consegue mais acessar o site.
echo.
pause
