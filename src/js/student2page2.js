// Author:Matthias Heylen
function up() {
    document.getElementById('demo').style.textAlign = 'center';
    document.getElementById('demo').querySelector('p').style.lineHeight = '5vh';
}

function down() {
    document.getElementById('demo').style.textAlign = 'center';
    document.getElementById('demo').querySelector('p').style.lineHeight = '55vh';
}
function left() {
    document.getElementById('demo').style.textAlign = 'left';
    document.getElementById('demo').querySelector('p').style.lineHeight = '30vh';
}

function right() {
    document.getElementById('demo').style.textAlign = 'right';
    document.getElementById('demo').querySelector('p').style.lineHeight = '30vh';
}

function center() {
    document.getElementById('demo').style.textAlign = 'center';
    document.getElementById('demo').querySelector('p').style.lineHeight = '30vh';
}

function white() {
    document.getElementById('demo').style.backgroundColor = 'white';
    document.getElementById('demo').style.color = 'black';
}

function dark() {
    document.getElementById('demo').style.backgroundColor = 'black';
    document.getElementById('demo').style.color = 'white';
}
