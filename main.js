"use strict";

const electron = require("electron");

if (!electron.app.requestSingleInstanceLock()) {

	console.log("Lock Test is apparently already running. Shutting down this instance.");
	electron.app.quit();

} else {

	let n = 0;
	
	function all_is_ok() {
		console.log(`Everything is OK... (${++n})`);
		setTimeout(all_is_ok, 2000);
	}

	all_is_ok();

}
