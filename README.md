To reproduce:

* Build this app for Electron 17 and Electron 18.
* You can easily do this manually by extracting Electron and adding the folder `resources/app` then placing these files inside there.
* Run the v18 version of this app.
* While it is running, run the v17 version.

Now, the v18 version will crash in the Main process.
