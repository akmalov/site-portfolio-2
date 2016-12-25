var fullScreen = require('./fullscreen-menu');
var addAuthorization = require('./flip');
var removeAuthorization = require('./flip');
var myWorksSlider = require('./slider');
var sidebarScroll = require('./sidebar-scroll');

fullScreen.fullScreenMenu();
addAuthorization.add();
removeAuthorization.remove();
myWorksSlider.worksSlider();
sidebarScroll.scroll();