const menuBtn = document.querySelector("#menu-btn"),
    sideMenu = document.querySelector("#side-menu"),
    sideBackground = document.querySelector("#side-background"),
    sideMenuQuitBtn = document.querySelector("#side-menu-quit-btn");

const SCREEN = "show";

function clickMenuBtn() {
    sideMenu.classList.toggle(SCREEN);
    sideBackground.classList.toggle(SCREEN);
}

function clickMenuQuitBtn() {
    sideMenu.classList.toggle(SCREEN);
    sideBackground.classList.toggle(SCREEN);
}

function init() {
    menuBtn.addEventListener("click", clickMenuBtn);
    sideMenuQuitBtn.addEventListener("click", clickMenuQuitBtn);
}

init();