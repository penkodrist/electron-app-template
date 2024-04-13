const { app, BrowserWindow, ipcMain } = require('electron')
require('@electron/remote/main').initialize();
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1024,
        height: 576,
        minWidth: 1024,
        minHeight: 576,
        frame: false,
        titleBarStyle: 'hidden',
        fullscreenable: false,
        fullscreen: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
            backgroundThrottling: false,
            disableHtmlFullscreenWindowResize: true,
        }
    })
    const { enable } = require('@electron/remote/main');
    enable(win.webContents);
    win.loadFile('index.html')
    ipcMain.on('minimize',() =>     { win.minimize() })
    ipcMain.on('close', () =>       { app.quit() })
    ipcMain.on('maximize', () =>    { win.maximize() })
    ipcMain.on('unmaximize', () =>  { win.unmaximize() })
}
app.whenReady().then(() => { createWindow() })
