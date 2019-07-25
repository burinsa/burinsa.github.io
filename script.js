var toTop = document.querySelector(".arrow");
var servicePhone = document.querySelector(".phone");
var tablePhone = document.querySelector(".table-phone");
var servicePad = document.querySelector(".pad");
var tablePad = document.querySelector(".table-pad");
var serviceLaptop = document.querySelector(".laptop");
var tableLaptop = document.querySelector(".table-laptop");
var serviceComputer = document.querySelector(".computer");
var tableComputer = document.querySelector(".table-computer");
var duration = document.querySelector(".duration");




window.onscroll = function() {
    if (window.pageYOffset > 250) {
        toTop.style.opacity = 1;
    } else {
        toTop.style.opacity = 0;
    }
}

toTop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

servicePhone.addEventListener("click", function (evt) {
    evt.preventDefault();
    tablePhone.classList.toggle("table-show");
    duration.classList.toggle("rotate");
});

servicePad.addEventListener("click", function (evt) {
    evt.preventDefault();
    tablePad.classList.toggle("table-show");
    duration.classList.toggle("rotate");
});

serviceLaptop.addEventListener("click", function (evt) {
    evt.preventDefault();
    tableLaptop.classList.toggle("table-show");
});

serviceComputer.addEventListener("click", function (evt) {
    evt.preventDefault();
    tableComputer.classList.toggle("table-show");
});
