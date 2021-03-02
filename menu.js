const menuBtn = document.querySelector("#menu-btn"),
    sideMenu = document.querySelector("#side-menu"),
    sideBackground = document.querySelector("#side-background"),
    sideMenuQuitBtn = document.querySelector("#side-menu-quit-btn"),
    footerBar = document.querySelector("#time-js");

const SCREEN_SHOW = "show";
const SCREEN_HIDE = "invisible";

function clickMenuBtn() {
    sideMenu.classList.toggle(SCREEN_SHOW);
    sideBackground.classList.toggle(SCREEN_SHOW);
    footerBar.classList.toggle(SCREEN_HIDE);
}

function clickMenuQuitBtn() {
    sideMenu.classList.toggle(SCREEN_SHOW);
    sideBackground.classList.toggle(SCREEN_SHOW);
    footerBar.classList.toggle(SCREEN_HIDE);
}

function clickBackground() {
    sideMenu.classList.toggle(SCREEN_SHOW);
    sideBackground.classList.toggle(SCREEN_SHOW);
    footerBar.classList.toggle(SCREEN_HIDE);
}

function init() {
    menuBtn.addEventListener("click", clickMenuBtn);
    sideMenuQuitBtn.addEventListener("click", clickMenuQuitBtn);
    sideBackground.addEventListener("click", clickBackground);
}

init();