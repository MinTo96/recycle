const time = document.querySelector("#time-js");


function receiveTime() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    time.innerHTML = `Posted ${year}/${(month > 9) ? month : `0${month}`}/${(day > 9) ? day : `0${day}`}`;

}

function init() {
    receiveTime();
}

init();