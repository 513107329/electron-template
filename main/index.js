const { app, BrowserWindow } = require('electron')
const path = require('path')
require('./registerGlobal')

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800, 
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, 'preload.js'),
			webviewTag: true
		}
	})

	win.loadURL('http://localhost:5173')
}

app.whenReady().then(() => {
	createWindow()
})

app.on('window-all-closed', () => {
	console.log('window-all-closed')
	if(process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
	if(BrowserWindow.getAllWindows().length === 0) createWindow()
})