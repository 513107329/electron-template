const { ipcMain, ipcRenderer } = require('electron')
const { forceRefeshKey, refeshKey } = require('../ipcListenerKey')

function handleForceRefresh(win) {
    win.webContents.reloadIgnoringCache()
}

function handleRefresh(win) {
    win.webContents.reloadIgnoringCache()
}

function forceRefreshHandler() {
    ipcMain.on(forceRefeshKey, handleForceRefresh)
}

function sendForceRefresh() {
    ipcRenderer.send(forceRefeshKey)
}

function refreshHandler() {
    ipcMain.on(refeshKey, handleRefresh)
}

function sendRefresh() {
    ipcRenderer.send(refeshKey)
}

module.exports = {
    forceRefreshHandler,
    refreshHandler,
    sendRefresh,
    sendForceRefresh
}