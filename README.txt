GRAVITY DUEL - ELECTRON LAUNCHER (Windows)
==========================================

TO BUILD THE EXE (one time, needs Node.js from nodejs.org):
  1. Unzip this folder somewhere (e.g. your Desktop).
  2. Double-click build.bat
  3. Wait a few minutes. A "dist" folder opens containing
     - "Gravity Duel-win32-x64" folder: run "Gravity Duel.exe" inside it
     - Gravity-Duel-Windows.zip: the file to share. Players unzip it and
       double-click "Gravity Duel.exe". No install, no Python, no browser.

TO TEST WITHOUT BUILDING: double-click play-dev.bat

CONTROLS EXTRA: F11 toggles fullscreen.

UPDATING THE GAME LATER:
  Replace the contents of the "game" folder with the new runtime files
  (index.html, game.html, bundle.js, the .mp3 files, the cover .png, fonts/),
  then run build.bat again.

NOTES
  - The "Press Start 2P" font is bundled (fonts/), so it works offline.
  - Windows SmartScreen may say "Windows protected your PC" for an unsigned
    app. Click "More info" then "Run anyway".
