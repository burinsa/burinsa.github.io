var toTop = document.querySelector(".arrow");

window.onscroll = function() {
    if (window.pageYOffset > 250) {
        toTop.style.opacity = 1;
    } else {
        toTop.style.opacity = 0;
    }
}

toTop.onclick = function() {
    window.scrollTo(0, 0);
}
