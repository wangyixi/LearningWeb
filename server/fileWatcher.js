const fs = require('fs');
const Watcher = require('./lowerFileNameWatcher.js');
const watchDir = './watch';
const processedDir = './done';
const watcher = new Watcher(watchDir, processedDir);
watcher.on('process', (file) => {
    const watchFile = `${watchDir}\\${file}`;
    const processedFile = `${processedDir}\\${file.toLowerCase()}`;
    fs.rename(watchFile, processedFile, err => {
        if(err) throw err;
        watcher.emit('success', `the ${file} file has transfered successfully`);
    });
});
watcher.on('success', (message) => {
    watcher.removeAllListeners('process');
    console.log(message);
});
watcher.start();