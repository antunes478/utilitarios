// script.js

function openWebsite(url) {
    window.open(url, '_blank');
}

function toggleInfo(element) {
    var overlay = element.querySelector(".overlay");
    var info = element.querySelector(".info");

    overlay.classList.toggle("active");
    info.classList.toggle("active");
}
