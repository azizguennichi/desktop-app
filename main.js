const { app, BrowserWindow } = require("electron");
const path = require("path");

// create lel window

console.log("from backend");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "./src/index.html"));

  // open dev tools lel console besh taaref el error mtee3ek
  // mainWindow.webContents.openDevTools();

  // title mte3 el window
  mainWindow.setTitle("Aziz File Reader");
  // change Icon
  mainWindow.setIcon("deposer.png");
  // remove menu

  mainWindow.setMenu(null);
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
