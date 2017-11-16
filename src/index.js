import './sass/sass.scss';
import {
    busyLoad,
    busyLoadSetup,
    busyLoadFull
} from './lib/busy-load'
window._ = require('lodash');

$(function() {
    $.fn.busyLoad = busyLoad;
    $.busyLoadSetup = busyLoadSetup;
    $.busyLoadFull = busyLoadFull;
});