const {app} = require('electron');
const menubar = require('menubar');

const mb = menubar({
    index: `file://${__dirname}/menu.html`,
    icon: __dirname + '/media/icon.png',
    tooltip: 'lippy',
    width: 375,
    height: 450
});
