const {app, BrowserWindow, dialog} = require('electron')
let fs = require('fs')
const osTmpdir = require('os-tmpdir')
let mainWindow

function createWindow () {
    var buttons = ['OK'];
    if (process.argv.length < 2) {
        dialog.showMessageBox({ type: 'info', buttons: buttons, message: "Lost Configuration JSON file Parameter" }
            , function (buttonIndex) {
                app.quit();
            });
        return;
    }

    var config_file = process.argv[1];
    if (fs.existsSync(config_file) === false) {
        dialog.showMessageBox({ type: 'info', buttons: buttons, message: "Cannot found file: \n" + config_file }
            , function (buttonIndex) {
                app.quit();
            });
        return;
    }

    var config = JSON.parse(fs.readFileSync(config_file, 'utf-8'))

    var url = config.URL;

    var icon_base64 = config.icon;
    icon_base64 = icon_base64.replace(/^data:image\/png;base64,/, "");
    var icon_path = osTmpdir() + "/webapp-wrapper-icon-" + url.replace(/[^A-Za-z]/g, "") + ".png";
    fs.writeFileSync(icon_path, icon_base64, 'base64');
    config.icon = icon_path;

    mainWindow = new BrowserWindow(config);
    mainWindow.loadURL(url);
    mainWindow.on('closed', function () {
        mainWindow = null
    });
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if(process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function () {
    if(mainWindow === null) {
        createWindow();
    }
})