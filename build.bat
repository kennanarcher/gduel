@echo off
REM Double-click this file to build Gravity Duel for Windows (needs Node.js on PATH).
cd /d "%~dp0"
echo Installing dependencies (first run takes a few minutes)...
call npm install
if errorlevel 1 goto fail
echo Building the Windows app...
call npm run build
if errorlevel 1 goto fail
echo Zipping for sharing...
if exist "dist\Gravity-Duel-Windows.zip" del "dist\Gravity-Duel-Windows.zip"
powershell -NoProfile -Command "Compress-Archive -Path 'dist\Gravity Duel-win32-x64' -DestinationPath 'dist\Gravity-Duel-Windows.zip'"
echo.
echo Done! Open the "dist" folder:
echo   - "Gravity Duel-win32-x64\Gravity Duel.exe" is the game
echo   - "Gravity-Duel-Windows.zip" is the file to share
start "" "%~dp0dist"
pause
exit /b 0
:fail
echo.
echo Something went wrong - see the messages above.
pause
exit /b 1
