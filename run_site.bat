@echo off
echo ===================================================
echo   Portfolio Site Startup Script
echo ===================================================
echo.

echo [1/2] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies.
    pause
    exit /b %errorlevel%
)

echo [2/2] Starting the local development server...
echo The site will be available at http://localhost:3000
call npm run dev
pause
скр