const { contextBridge, ipcRenderer } = require('electron')
const { sendForceRefresh, sendRefresh } = require('./forceRefreshModule')

contextBridge.exposeInMainWorld('versions', {
	...process.versions,
})

contextBridge.exposeInMainWorld('refresh', {
	sendForceRefresh,
	sendRefresh
})