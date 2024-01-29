import * as MaterialComponents from 'https://lukeplays33.github.io/material-Components/Material_Components/imports.js';

let restart = document.getElementById('restart');

restart.onclick = function () {
    MaterialComponents.openPopup(document.getElementById('reset'));
}