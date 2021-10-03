'use strict';
var gLength = 36;
var gNums = [];
var gCurrNumCounter = 1;

function init() {
    gCurrNumCounter = 1;
    setBtnFunc();
    createArray();
    console.log(gNums);
    renderTable();
    setClickFunc();
}

function createArray() {
    gNums = [];
    for (var i = 0; i < gLength; i++) {
        gNums.push(i + 1);
    }
    shuffleArray();
}

function shuffleArray() {
    for (var i = gNums.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = gNums[i];
        gNums[i] = gNums[j];
        gNums[j] = temp;
    }
}

function renderTable() {
    var tableHTML = '';
    var sizeBoard = Math.sqrt(gLength);
    for (var i = 0; i < sizeBoard; i++) {
        tableHTML += `<tr>`;
        for (var j = 0; j < sizeBoard; j++) {
            tableHTML += `<td>${gNums.pop()}</td>`;
        }
        tableHTML += `</tr>`;
    }
    var elTableBody = document.querySelector('.createTable');
    elTableBody.innerHTML = tableHTML;
}

function cellClicked() {
    if (gCurrNumCounter === +this.textContent) {
        if (gCurrNumCounter === 1) start();
        if (gCurrNumCounter === gLength) stop();
        console.log(this.textContent);
        this.style.backgroundColor = getRandomColor();
        // this.classList.add('clicked');
        gCurrNumCounter++;
    }
}

function setClickFunc() {
    var elTableDataNums = document.querySelectorAll('td');
    for (var i = 0; i < elTableDataNums.length; i++) {
        elTableDataNums[i].onclick = cellClicked;
    }
}

function setBtnFunc() {
    var levels = document.querySelectorAll('button');
    for (var i = 0; i < levels.length; i++) {
        levels[i].onclick = setLevel;
    }

}

function setLevel() {
    console.log(this.textContent);
    if (this.textContent === 'Easy') gLength = 16;
    if (this.textContent === 'Hard') gLength = 25;
    if (this.textContent === 'Extreme') gLength = 36;
    if (this.textContent === 'Super Hard') gLength = 49;
    init();
}