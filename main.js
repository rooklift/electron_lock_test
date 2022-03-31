"use strict";

const electron = require("electron");
const path = require("path");

let win;

if (!electron.app.requestSingleInstanceLock()) {
	console.log("Lock Test is apparently already running. Shutting down this instance.");
	electron.app.quit();
} else {
	electron.app.whenReady().then(() => {
		win = new electron.BrowserWindow();
		win.loadFile(path.join(__dirname, "renderer.html"));
	});
}
