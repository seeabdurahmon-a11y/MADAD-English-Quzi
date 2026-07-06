// MADAD English Quiz — Electron Main Process
const { app, BrowserWindow, Menu, shell, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

// Prevent multiple instances
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    // Focus main window if user tries to open another instance
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
}

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    icon: path.join(__dirname, 'build', 'icon.ico'),
    backgroundColor: '#0f0e17',
    title: 'MADAD English Quiz',
    autoHideMenuBar: true, // hide the top menu bar
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // Enable localStorage/IndexedDB — works perfectly in Electron
      partition: 'persist:madad-quiz'
    }
  });

  // Load the quiz app
  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.maximize();
  });

  // Open external links in the default browser (not inside app)
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Custom menu (optional — mostly hidden)
  const template = [
    {
      label: 'Fayl',
      submenu: [
        {
          label: 'Yangilash',
          accelerator: 'Ctrl+R',
          click: () => mainWindow.reload()
        },
        {
          label: 'To\'liq ekran',
          accelerator: 'F11',
          click: () => mainWindow.setFullScreen(!mainWindow.isFullScreen())
        },
        { type: 'separator' },
        {
          label: 'Chiqish',
          accelerator: 'Ctrl+Q',
          click: () => app.quit()
        }
      ]
    },
    {
      label: 'Yordam',
      submenu: [
        {
          label: 'Dastur haqida',
          click: () => {
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'MADAD English Quiz',
              message: 'MADAD English Quiz',
              detail: 'MADAD IT Academy uchun ingliz tili o\'rganish dasturi.\n\nVersiya: 1.0.0\n© 2026 MADAD IT Academy, Qo\'qon',
              buttons: ['Yopish'],
              icon: path.join(__dirname, 'build', 'icon.png')
            });
          }
        },
        {
          label: 'Developer Tools',
          accelerator: 'Ctrl+Shift+I',
          click: () => mainWindow.webContents.toggleDevTools()
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
