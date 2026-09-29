@echo off
chcp 65001 > nul
title DUALCON - Colocar Site no Ar

echo ========================================================
echo   DUALCON - ATIVANDO VISUALIZACAO ONLINE
echo ========================================================
echo.

cd /d "%~dp0"

echo Configurando status para ONLINE...
powershell -NoProfile -Command "Set-Content -Path 'src\site-status.json' -Value '{\"online\": true}' -Encoding utf8"

echo.
echo [1/2] Compilando versao ativa...
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
echo   [SITE NO AR!] Visualizacao ativada com sucesso.
echo.
echo   Link acessivel para o cliente:
echo   https://respiracomunicacao-visually-sweet-redo.chief-archduke.workers.dev
echo =========================================================================
echo.
pause
