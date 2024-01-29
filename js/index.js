import * as MaterialComponents from 'https://lukeplays33.github.io/material-Components/Material_Components/imports.js';

let restart = document.getElementById('restart');
let popup = document.getElementById('reset')

restart.onclick = function () {
    MaterialComponents.openPopup(popup);
}

popup.onSubmit = function (data) {
    alert(data);
}