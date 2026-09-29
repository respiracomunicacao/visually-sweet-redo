@echo off
chcp 65001 > nul
title DUALCON - Publicar Atualizacao Online

echo ========================================================
echo   DUALCON - Publicando Versao Oficial na Nuvem
echo ========================================================
echo.

echo [1/2] Compilando versao de producao...
call bun run build
if %errorlevel% neq 0 (
    echo.
    echo [ERRO] Falha na compilacao.
    pause
    exit /b %errorlevel%
)

echo.
echo [2/2] Enviando para a nuvem global da Cloudflare...
cd .output
call npx wrangler deploy --temporary

echo.
echo =========================================================================
echo   [SUCESSO] Site publicado com sucesso na nuvem!
echo   Link permanente e 24h acessivel:
echo   https://respiracomunicacao-visually-sweet-redo.chief-archduke.workers.dev
echo =========================================================================
echo.
pause
