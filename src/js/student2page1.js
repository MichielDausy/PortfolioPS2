// Author: Matthias Heylen
let i = 0;
const txtTitle = '<h1>This is a title!</h1>';
const speed = 100;

function typeWriterTitle() {
    if (i < txtTitle.length) {
        document.getElementById('demoTitle').innerHTML += txtTitle.charAt(i);
        i++;
        setTimeout(typeWriterTitle, speed);
    }
}
