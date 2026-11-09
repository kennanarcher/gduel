@echo off
REM Runs the game in an Electron window without building an exe (for testing).
cd /d "%~dp0"
if not exist node_modules call npm install
call npm start
