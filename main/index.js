const { app, BrowserWindow, ipcMain } = require('electron')

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800, 
		height: 600,
		webPreferences: {
			nodeIntegration: true,

		}
	})

	win.loadURL('http://localhost:5173')
}

app.whenReady().then(() => {
	ipcMain.handle('ping', () => console.log('pong'))
	createWindow()
})

app.on('window-all-closed', () => {
	console.log('window-all-closed')
	if(process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
	if(BrowserWindow.getAllWindows().length === 0) createWindow()
})