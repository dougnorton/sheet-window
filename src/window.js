const { BrowserWindow, dialog, getCurrentWindow } = require('electron').remote;
const path = require('path');

function showMessage() {
	dialog.showMessageBox(getCurrentWindow(), {
		type: 'error',
		buttons: ['OK'],
		defaultId: 0,
		message: 'Test'
	});
}

function sheet() {
	const win = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		},
		width: 400,
		height: 150,
		parent: getCurrentWindow(),
		modal: true
	});
	win.loadFile(path.join(__dirname, 'modal.html'));


}