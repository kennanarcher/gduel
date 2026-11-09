const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Let the soundtrack start without needing extra permission prompts.
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

// Only one copy of the game at a time.
if (!app.requestSingleInstanceLock()) {
  app.quit();
}

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 640,
    minHeight: 480,
    backgroundColor: '#020826',
    title: 'Gravity Duel',
    icon: path.join(__dirname, 'build', 'icon.ico'),
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // No File/Edit/View menu bar.
  Menu.setApplicationMenu(null);

  win.loadFile(path.join(__dirname, 'game', 'index.html'));

  // F11 toggles fullscreen (the game itself only uses Y / N / WASD / arrows / Shift).
  win.webContents.on('before-input-event', (event, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') {
      win.setFullScreen(!win.isFullScreen());
      event.preventDefault();
    }
  });

  // Never navigate away from the game or open browser windows.
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
}

app.on('second-instance', () => {
  if (win) {
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
