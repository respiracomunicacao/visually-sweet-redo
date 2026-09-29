@echo off
chcp 65001 > nul
title DUALCON - Tirar Site do Ar

echo ========================================================
echo   DUALCON - PAUSANDO VISUALIZACAO ONLINE
echo ========================================================
echo.

cd /d "%~dp0"

echo Configurando status para OFFLINE...
powershell -NoProfile -Command "Set-Content -Path 'src\site-status.json' -Value '{\"online\": false}' -Encoding utf8"

echo.
echo [1/2] Compilando versao pausada...
call bun run build
if %errorlevel% neq 0 (
    echo.
    echo [ERRO] Falha na compilacao.
    pause
    exit /b %errorlevel%
)

echo.
echo [2/2] Atualizando na nuvem global da Cloudflare...
call npx --prefix .output wrangler deploy --temporary

echo.
echo =========================================================================
echo   [SITE FORA DO AR!]
echo   A partir de agora o cliente que entrar no link vera a mensagem:
echo   "Visualizacao Temporariamente Indisponivel".
echo.
echo   Para reativar a qualquer momento, basta abrir o ATIVAR-SITE-ONLINE.bat!
echo =========================================================================
echo.
pause
