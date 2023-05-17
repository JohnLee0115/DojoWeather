function alertMsg(element) {
    alert("Loading weather report...");
}

var cookie = document.querySelector(".cookie");

function hideCookie() {
    cookie.remove();
}


var high = document.querySelector(".high");
var low = document.querySelector(".low");
var celfar = document.querySelector("#temperature");

function convertCel() {
    if (celfar.selctedIndex = "°C"){
        high.innerText = high.innerText * (9/5) + 32;
        low.innerText = low.innerText  * (9/5) + 32;
    }
}

function convertFar() {
    if (celfar.selctedIndex = "°F"){
        high.innerText = (high.innerText - 32) * (5/9);
        low.innerText = (low.innerText - 32) * (5/9);
    }
}

function convert() {
    convertFar();
    convertCel();
    console.log("hello");
}