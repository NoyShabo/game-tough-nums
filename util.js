'use strict';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var msec = 0,
    sec = 1,
    min = 1,
    hour = 1,
    timerOn = 0;
var msecVar, secVar, minVar, hourVar;

function setMSec() {
    if (msec < 10) {
        document.getElementById("msec").innerHTML = "0" + msec;
    } else {
        document.getElementById("msec").innerHTML = msec;
    }
    msec = msec + 1;
    msecVar = setTimeout(setMSec, 100);
    if (msec >= 10) {
        setSec();
        msec = 0;
    }
}

function setSec() {
    if (sec >= 60) {
        setMin();
        sec = 0;
    }
    if (sec < 10) {
        document.getElementById("sec").innerHTML = "0" + sec;
    } else {
        document.getElementById("sec").innerHTML = sec;
    }
    sec = sec + 1;
}

function setMin() {
    if (min >= 60) {
        setHour();
        min = 0;
    }
    if (min < 10) {
        document.getElementById("min").innerHTML = "0" + min;
    } else {
        document.getElementById("min").innerHTML = min;
    }
    min = min + 1;
}

function setHour() {
    if (hour < 10) {
        document.getElementById("hour").innerHTML = "0" + hour;
    } else {
        document.getElementById("hour").innerHTML = hour;
    }
    hour = hour + 1;
}

function start() {
    if (!timerOn) {
        timerOn = 1;
        setMSec();
    }
}

function stop() {
    clearTimeout(msecVar);
    timerOn = 0;
}