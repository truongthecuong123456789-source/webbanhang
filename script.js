// ===== 1. mo / dong menu tren dien thoai =====
var menuIcon = document.getElementById("menu-icon");
var navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

// bam vao 1 muc trong menu thi dong menu lai
var menuLink = document.querySelectorAll("#navbar a");

for (var a = 0; a < menuLink.length; a++) {
    menuLink[a].addEventListener("click", function () {
        navbar.classList.remove("active");
    });
}


// ===== 2. anh nao chua co trong thu muc img thi an di =====
var allImg = document.querySelectorAll(".anh img");

for (var i = 0; i < allImg.length; i++) {
    allImg[i].addEventListener("error", function () {
        this.style.display = "none";
    });
}


// ===== 3. form dang ky email (chi la giao dien, chua gui di dau) =====
var formEmail = document.getElementById("newsletter-form");

formEmail.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Đây là giao diện demo, chức năng đăng ký email chưa được kết nối.");
});
