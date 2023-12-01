const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
	...process.versions,
	ping: () => ipcRenderer.invoke('ping')
})