Reproduction repo for [Electron 33566](https://github.com/electron/electron/issues/33566):

* Build this app for Electron 18 and Electron 17. (You can easily do this manually by extracting Electron and adding the folder `resources/app` then placing these files inside there.)
* Run the v18 version of this app.
* While it is running, run the v17 version.

Now, the v18 version will crash in the Main process. (Tested on Windows 10.)
