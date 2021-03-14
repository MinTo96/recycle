'use strict'

const menuBtn = document.querySelector("#menu-btn"),
    sideMenu = document.querySelector("#side-menu"),
    sideBackground = document.querySelector("#side-background"),
    sideMenuQuitBtn = document.querySelector("#side-menu-quit-btn"),
    footerBar = document.querySelector("#time-js"),
    body = document.querySelector("body");

const SCREEN_SHOW = "show";
const SCREEN_HIDE = "invisible";
const SCREEN_FIXED = "fixed";

function clickMenuBtn() {
    sideMenu.classList.toggle(SCREEN_SHOW);
    sideBackground.classList.toggle(SCREEN_SHOW);
    footerBar.classList.toggle(SCREEN_HIDE);
    body.classList.toggle(SCREEN_FIXED);
}

function clickMenuQuitBtn() {
    sideMenu.classList.toggle(SCREEN_SHOW);
    sideBackground.classList.toggle(SCREEN_SHOW);
    footerBar.classList.toggle(SCREEN_HIDE);
    body.classList.toggle(SCREEN_FIXED);

}

function clickBackground() {
    sideMenu.classList.toggle(SCREEN_SHOW);
    sideBackground.classList.toggle(SCREEN_SHOW);
    footerBar.classList.toggle(SCREEN_HIDE);
    body.classList.toggle(SCREEN_FIXED);

}

function init() {
    menuBtn.addEventListener("click", clickMenuBtn);
    sideMenuQuitBtn.addEventListener("click", clickMenuQuitBtn);
    sideBackground.addEventListener("click", clickBackground);
}

init();