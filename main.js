const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
let win;

function createWindow () {
  win = new BrowserWindow({width: 875,height: 670
    //,icon:__dirname+'/assets/icons/win/icon.ico'
  });
  win.setMenuBarVisibility(false)

  // win.loadFile(url.format({
  //   pathname:path.join(__dirname,'index2.html'),
  //   protocol:'file',
  //   slashes:true
  // }));
  win.loadFile('./index.html');
  //devtools
  // win.webContents.openDevTools();

  win.on('closed',()=>{
    win = null;
  })
}

app.on('ready',createWindow);

//quit
app.on('window-all-closed',() =>{
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

