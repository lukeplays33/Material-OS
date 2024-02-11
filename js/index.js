import * as MaterialComponents from 'https://lukeplays33.github.io/material-Components/Material_Components/imports.js';
import { colourRandom } from '../utils/colours.js';

window.onload = function () {
MaterialComponents.initSettings({
    themeColour:colourRandom()
});
}

let restart = document.getElementById('restart');
let popup = document.getElementById('reset')

restart.onclick = function () {
    MaterialComponents.openPopup(popup);
}

popup.onSubmit = function (data) {
    window.location.reload();
}