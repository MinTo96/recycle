
const modalScreen = document.querySelector(".modal"),
    bgBox = modalScreen.querySelector(".modal_wrap"),
    bgColor = modalScreen.querySelector(".black_bg"),
    bgBtn = modalScreen.querySelector(".modal_close");

function deleteBox() {
    modalScreen.classList.remove("screen");
    modalScreen.classList.add("screen-none");
}

function popUpBox() {
}



function init() {
    bgBtn.addEventListener("click", deleteBox);
}

init();