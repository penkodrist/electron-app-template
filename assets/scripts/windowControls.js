const { ipcRenderer } = require('electron')
const remote = require('@electron/remote')
const win = remote.getCurrentWindow()
let maximizeToggle = document.querySelector('.maximize img')
function closeApp(e) { e.preventDefault(); ipcRenderer.send('close') }
function minimize() { ipcRenderer.send('minimize') }
function maximize() { ipcRenderer.send('maximize') }
function unmaximize() { ipcRenderer.send('unmaximize') }
function expandToggle() {
    if (win.isMaximized()) {
        unmaximize()
        maximizeToggle.setAttribute('src', './assets/icons/windowControlsIcons/maximize.png')
    } else {
        maximize()
        maximizeToggle.setAttribute('src', './assets/icons/windowControlsIcons/unmaximize.png')
    }
}
win.on('maximize', () => { maximizeToggle.setAttribute('src', './assets/icons/windowControlsIcons/unmaximize.png') })
win.on('unmaximize', () => { maximizeToggle.setAttribute('src', './assets/icons/windowControlsIcons/maximize.png') })
document.querySelector('.close').addEventListener("click", closeApp)
document.querySelector('.minimize').addEventListener('click', minimize)
document.querySelector('.maximize').addEventListener('click', expandToggle)