"use strict";


const overlayMenu = document.querySelector(".menu-overlay");

const menu = document.querySelector(".menu-icon");
menu.addEventListener('click'  , showOverlay);

function showOverlay(){
    overlayMenu.style.display = 'block';
}