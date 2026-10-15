
var menuIcon = document.getElementById("menu-icon");
var navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
});


var allImg = document.querySelectorAll(".anh img");

for (var i = 0; i < allImg.length; i++) {
    allImg[i].addEventListener("error", function () {
        this.style.display = "none";
    });
}
