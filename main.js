const { app, BrowserWindow, Notification } = require('electron');
const path = require('path');

let isAppRendered = false;
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  isAppRendered = true;
  startTimer();
  win.loadFile(path.join(__dirname, 'svelte/desktop/public', 'index.html'));
};
app.whenReady().then(() => {
  createWindow();
});

const NOTIFICATION_TITLE = 'Basic Notification';
const NOTIFICATION_BODY = 'Notification from the Main process';

function startTimer() {
  setInterval(showNotification, 5000);
}
const urgency = ['normal', 'critical', 'low'];

let index = 0;
function getNotificationObject() {
  index++;
  const urgencyType = urgency[index % 3];

  return {
    title: `Title ${urgencyType}`,
    body: NOTIFICATION_BODY,
    urgency: urgencyType,
    sound: 'normal',
    subtitle: 'lorem ipsum valar',
  };
}

function showNotification() {
  new Notification(getNotificationObject()).show();
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit(); // Change
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
