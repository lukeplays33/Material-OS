let pages = [
    '../set-up/welcome.html',
    '../set-up/browserSelection.html'
];

let iframe = document.getElementById('setUpPages');

let index = 0;

document.getElementById('next').onclick = function () {
    index++;

 iframe.src = pages[index];
}

document.getElementById('previous').onclick = function () {
    index--;

 iframe.src = pages[index];
}