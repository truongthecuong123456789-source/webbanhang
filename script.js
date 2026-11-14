// =====================================================
// HUONG DAN THEM ANH (doc truoc khi them anh)
// 1. Tai anh tu google ve, bo vao thu muc img (cung cho voi file index.html).
// 2. Mo index.html, tim khoi "KHO ANH SAN PHAM" (ngay dau phan body).
//    Moi dong <img data-sp="1" src="img/anh8.webp"> la anh cua 1 san pham.
//    Chi viec sua duong dan trong src thanh ten anh cua ban, vi du src="img/sofa-sintra.jpg".
//    Duoi file .webp / .jpg / .jpeg / .png deu duoc. Khong xoa data-sp.
// 3. Anh phu o trang chi tiet tu dong lay them -2, -3, -4 (vi du img/sofa-sintra-2.jpg).
// 4. Banner, danh muc, theo phong cung nam trong index.html (tim dong co chu "ANH").
// 5. Cot cuoi cua bien data (vi du "anh8") chi la du phong, dung khi index.html khong khai bao anh.
// Chua co anh thi o do hien nen xam kem ten file can them.
// =====================================================
// =====================================================
// PHAN 1: DU LIEU SAN PHAM
// (muon them san pham moi thi them 1 dong vao bien data)
// =====================================================
var tenLoai = {
    sofa: "Sofa", tham: "Thảm", giuong: "Giường", ban: "Bàn",
    ghe: "Ghế", tuke: "Tủ & Kệ", den: "Đèn", decor: "Decor"
};

var dsChat = ["Vải bọc", "Da", "Gỗ", "Kim loại", "Len / sợi", "Gốm"];

var dsGia = [
    { ten: "Dưới 2 triệu", min: 0, max: 2000000 },
    { ten: "2 - 10 triệu", min: 2000000, max: 10000000 },
    { ten: "10 - 20 triệu", min: 10000000, max: 20000000 },
    { ten: "Trên 20 triệu", min: 20000000, max: Infinity }
];

var moTaLoai = {
    sofa: "Thiết kế gọn gàng, nệm êm và khung chắc chắn, phù hợp phòng khách hiện đại.",
    tham: "Bề mặt mềm, dễ phối với nhiều phong cách, giúp căn phòng ấm cúng hơn.",
    giuong: "Khung giường chắc chắn, đường nét tối giản, mang lại giấc ngủ thoải mái.",
    ban: "Mặt bàn rộng, chân vững, hợp cả không gian nhỏ lẫn lớn.",
    ghe: "Ngồi êm, kiểu dáng gọn, dễ kết hợp với bàn ăn hoặc góc đọc sách.",
    tuke: "Nhiều ngăn tiện dụng, giúp cất đồ gọn gàng và làm đẹp căn phòng.",
    den: "Ánh sáng dịu, tạo điểm nhấn cho góc phòng.",
    decor: "Món decor nhỏ nhưng tạo khác biệt cho cả căn nhà."
};

var mauList = [
    { ten: "Be", ma: "#d8c7b5" },
    { ten: "Nâu", ma: "#8a6f5a" },
    { ten: "Xám", ma: "#4a4a4a" }
];

// moi dong: ten, loai, gia, gia cu (0 = khong giam), chat lieu, nhan (best / moi / de trong), TEN ANH
// TEN ANH la cot cuoi cung, ghi khong can duoi file. Vi du "anh8" se tim img/anh8.webp (hoac .jpg / .png)
var data = [
    ["Ghế sofa giường Sintra tay rời", "sofa", 18900000, 0, "Vải bọc", "best", "anh8"],
    ["Ghế sofa giường chỉnh điện Tencha 3 ghế", "sofa", 51690000, 0, "Da", "best", "anh9"],
    ["Giường Lauran", "giuong", 18690000, 0, "Gỗ", "", "anh10"],
    ["Bàn ăn thông minh Holic chân đen", "ban", 14990000, 0, "Kim loại", "moi", "anh11"],
    ["Ghế sofa giường Lubben tay rời", "sofa", 16790000, 0, "Vải bọc", "", "anh15"],
    ["Ghế sofa Balena", "sofa", 21290000, 0, "Vải bọc", "best", "anh16"],
    ["Thảm trải sàn Shifu dệt 3D", "tham", 5990000, 0, "Len / sợi", "", "anh17"],
    ["Thảm trải sàn Waffle Trắng lông thỏ", "tham", 1490000, 0, "Len / sợi", "", "anh18"],
    ["Giường Pora", "giuong", 15590000, 0, "Gỗ", "", "anh19"],
    ["Bàn trà Lyra", "ban", 7590000, 0, "Gỗ", "moi", "anh20"],
    ["Bàn trà Dera", "ban", 5490000, 6090000, "Kim loại", "", "anh21"],
    ["Đèn thả thông tầng Luxy", "den", 4890000, 5490000, "Kim loại", "", "anh22"],
    ["Ghế sofa góc Mây", "sofa", 24500000, 0, "Vải bọc", "moi", "sp13"],
    ["Ghế sofa da Oslo 2 chỗ", "sofa", 32900000, 36500000, "Da", "", "sp14"],
    ["Armchair Nami", "ghe", 7290000, 0, "Vải bọc", "", "sp15"],
    ["Ghế đôn tròn Pebble", "ghe", 1890000, 0, "Vải bọc", "moi", "sp16"],
    ["Ghế ăn Kibo", "ghe", 1290000, 0, "Gỗ", "", "sp17"],
    ["Ghế băng dài Hallie", "ghe", 3490000, 3890000, "Gỗ", "", "sp18"],
    ["Ghế bar Orion", "ghe", 2190000, 0, "Kim loại", "", "sp19"],
    ["Giường bọc nỉ Cloud", "giuong", 19990000, 0, "Vải bọc", "moi", "sp20"],
    ["Giường gỗ sồi Mộc", "giuong", 12500000, 13900000, "Gỗ", "", "sp21"],
    ["Bàn ăn gỗ óc chó Sora", "ban", 9900000, 0, "Gỗ", "best", "sp22"],
    ["Bàn làm việc Aria", "ban", 4590000, 0, "Gỗ", "", "sp23"],
    ["Bàn trang trí Mono", "ban", 2890000, 0, "Kim loại", "", "sp24"],
    ["Thảm lông Cocoa", "tham", 2650000, 0, "Len / sợi", "", "sp25"],
    ["Thảm tufted Aurora", "tham", 4290000, 4890000, "Len / sợi", "", "sp26"],
    ["Thảm lì Linen", "tham", 1950000, 0, "Len / sợi", "", "sp27"],
    ["Tủ kệ TV Hana", "tuke", 6450000, 7200000, "Gỗ", "", "sp28"],
    ["Tủ giày Nori", "tuke", 3790000, 0, "Gỗ", "", "sp29"],
    ["Kệ sách Stella", "tuke", 2990000, 0, "Kim loại", "moi", "sp30"],
    ["Tủ quần áo Kano 3 cánh", "tuke", 11900000, 0, "Gỗ", "", "sp31"],
    ["Đèn sàn Arc", "den", 1890000, 2390000, "Kim loại", "", "sp32"],
    ["Đèn bàn Luna", "den", 890000, 0, "Kim loại", "", "sp33"],
    ["Đèn cây Orbit", "den", 2490000, 0, "Kim loại", "moi", "sp34"],
    ["Gối trang trí Fleur (bộ 2)", "decor", 690000, 0, "Vải bọc", "", "sp35"],
    ["Chăn phủ sofa Wooly", "decor", 1190000, 1390000, "Len / sợi", "", "sp36"],
    ["Bình gốm Terra", "decor", 590000, 0, "Gốm", "", "sp37"],
    ["Gương treo tường Halo", "decor", 2390000, 0, "Kim loại", "moi", "sp38"],
    ["Tranh canvas Dawn", "decor", 1590000, 0, "Gỗ", "", "sp39"],
    ["Đèn tường Wave", "den", 1390000, 0, "Kim loại", "", "sp40"]
];

// lay duong dan anh san pham tu index.html (khoi <template id="kho-anh">)
// neu index.html khong khai bao thi dung ten anh o cot cuoi cua bien data
var khoAnh = {};
var khoTpl = document.getElementById("kho-anh");
if (khoTpl && khoTpl.content) {
    var dsAnh = khoTpl.content.querySelectorAll("img[data-sp]");
    for (var q = 0; q < dsAnh.length; q++) {
        khoAnh[dsAnh[q].getAttribute("data-sp")] = dsAnh[q].getAttribute("src");
    }
}

var products = data.map(function (d, i) {
    var id = i + 1;
    return {
        id: id, ten: d[0], loai: d[1], gia: d[2], giaCu: d[3], chat: d[4], nhan: d[5],
        anh: d[6],
        src: khoAnh[id] || ("img/" + d[6] + ".webp")
    };
});


// =====================================================
// PHAN 2: HAM DUNG CHUNG
// =====================================================
function $(id) {
    return document.getElementById(id);
}

function fmt(n) {
    return Number(n).toLocaleString("vi-VN") + " VND";
}

// bo dau tieng viet de tim kiem "ghe sofa" van ra "Ghế sofa"
function boDau(s) {
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
}

function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function timSP(id) {
    return products.filter(function (p) { return p.id === id; })[0];
}

// khung anh: src la duong dan day du (vi du img/anh8.jpg)
// chua co anh thi hien ten file can them (xem .anh::before trong css)
function khung(src, them) {
    var ten = src.replace(/^.*\//, "").replace(/\.[A-Za-z0-9]+$/, "");
    return '<div class="anh" data-ten="' + ten + '">' + (them || "") +
        '<img src="' + src + '" alt=""></div>';
}

// anh phu: them -2, -3, -4 truoc duoi file (img/anh8.jpg -> img/anh8-2.jpg)
function anhPhu(src, hau) {
    return src.replace(/(\.[A-Za-z0-9]+)$/, hau + "$1");
}

// anh bi loi: thu lan luot cac duoi file khac (webp, jpg, jpeg, png), van khong co thi an di
var duoiAnh = ["webp", "jpg", "jpeg", "png"];

document.addEventListener("error", function (e) {
    var img = e.target;
    if (img.tagName !== "IMG") return;

    var goc = img.getAttribute("data-goc");
    var m = (img.getAttribute("src") || "").match(/^(.*)\.(webp|jpg|jpeg|png)$/i);
    if (!goc && m) {
        goc = m[1];
        img.setAttribute("data-goc", goc);
        img.setAttribute("data-ext0", m[2].toLowerCase());
    }
    if (!goc) {
        img.style.display = "none";
        return;
    }

    var ext0 = img.getAttribute("data-ext0");
    var thuTu = [ext0].concat(duoiAnh.filter(function (x) { return x !== ext0; }));
    var thu = Number(img.getAttribute("data-thu") || 0) + 1;

    if (thu < thuTu.length) {
        img.setAttribute("data-thu", thu);
        img.src = goc + "." + thuTu[thu];
    } else {
        img.style.display = "none";
    }
}, true);

var toastTimer;
function thongBao(noiDung) {
    var t = $("toast");
    t.innerText = noiDung;
    t.classList.add("hien");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("hien"); }, 2200);
}


// =====================================================
// PHAN 3: GIO HANG (luu trong localStorage)
// =====================================================
function layGio() {
    try {
        return JSON.parse(localStorage.getItem("typhGio")) || [];
    } catch (e) {
        return [];
    }
}

function luuGio(g) {
    localStorage.setItem("typhGio", JSON.stringify(g));
    capNhatSoLuong();
}

function capNhatSoLuong() {
    var tong = 0;
    layGio().forEach(function (x) { tong += x.sl; });
    var badge = $("cart-count");
    badge.innerText = tong;
    badge.style.display = tong > 0 ? "flex" : "none";
}

function themVaoGio(id, sl, mau) {
    var g = layGio();
    var daCo = false;

    g.forEach(function (x) {
        if (x.id === id && x.mau === mau) {
            x.sl += sl;
            daCo = true;
        }
    });
    if (!daCo) {
        g.push({ id: id, sl: sl, mau: mau });
    }

    luuGio(g);
    thongBao("Đã thêm vào giỏ hàng");

    var badge = $("cart-count");
    badge.classList.remove("nay");
    void badge.offsetWidth;
    badge.classList.add("nay");
}

// tinh tien: tam tinh, giam gia (ma TYPH10), phi ship, tong
function tinhTien() {
    var tam = 0;
    layGio().forEach(function (x) { tam += timSP(x.id).gia * x.sl; });

    var ma = localStorage.getItem("typhMa") || "";
    var giam = ma === "TYPH10" ? Math.round(tam * 0.1) : 0;
    var ship = (tam - giam >= 10000000 || tam === 0) ? 0 : 300000;

    return { tam: tam, giam: giam, ship: ship, tong: tam - giam + ship, ma: ma };
}

function dongTien(ten, giaTri, cls) {
    return '<div class="row ' + (cls || "") + '"><span>' + ten + '</span><span>' + giaTri + '</span></div>';
}

function tomTatTien(t) {
    var h = dongTien("Tạm tính", fmt(t.tam));
    if (t.giam > 0) h += dongTien("Giảm giá (" + t.ma + ")", "- " + fmt(t.giam));
    h += dongTien("Phí vận chuyển", t.ship === 0 ? "Miễn phí" : fmt(t.ship));
    h += dongTien("Tổng cộng", fmt(t.tong), "total");
    return h;
}


// =====================================================
// PHAN 3B: TAI KHOAN (dang ky / dang nhap / dang xuat)
// Luu trong localStorage cua trinh duyet (chi la demo, chua co may chu that)
// =====================================================
var sauDangNhap = "#/";   // dang nhap xong thi quay ve trang nay

function layUsers() {
    try {
        return JSON.parse(localStorage.getItem("typhUsers")) || [];
    } catch (e) {
        return [];
    }
}

function timUser(email) {
    return layUsers().filter(function (u) { return u.email === email; })[0] || null;
}

// nguoi dang dang nhap (hoac null)
function layUser() {
    var email = localStorage.getItem("typhUser");
    return email ? timUser(email) : null;
}

// khong luu mat khau that, chi luu ban ma hoa SHA-256
function bamMatKhau(email, mk) {
    var chuoi = "typh:" + email + ":" + mk;

    if (window.crypto && window.crypto.subtle && typeof TextEncoder !== "undefined") {
        return window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(chuoi)).then(function (buf) {
            return Array.prototype.map.call(new Uint8Array(buf), function (b) {
                return ("0" + b.toString(16)).slice(-2);
            }).join("");
        });
    }

    // du phong neu trinh duyet cu khong ho tro
    var h = 5381;
    for (var i = 0; i < chuoi.length; i++) {
        h = ((h << 5) + h + chuoi.charCodeAt(i)) | 0;
    }
    return Promise.resolve("s" + (h >>> 0).toString(16));
}

// hien icon dang nhap / dang ky (hoac ten nguoi dung) tren header
function capNhatUser() {
    var u = layUser();
    var box = $("tai-khoan");

    if (!u) {
        box.innerHTML =
            '<a href="#/login" class="nut-tk" title="Đăng nhập"><i class="fa-solid fa-right-to-bracket"></i><span>Đăng nhập</span></a>' +
            '<a href="#/register" class="nut-tk dk" title="Đăng ký"><i class="fa-solid fa-user-plus"></i><span>Đăng ký</span></a>';
        return;
    }

    var ten = u.ten.split(" ").pop();
    box.innerHTML =
        '<div class="user-menu">' +
        '<button class="nut-tk" data-mo-user title="Tài khoản"><i class="fa-solid fa-circle-user"></i><span>' + esc(ten) + '</span><i class="fa-solid fa-angle-down nho"></i></button>' +
        '<div class="user-drop" id="user-drop"><p><b>' + esc(u.ten) + '</b><small>' + esc(u.email) + '</small></p>' +
        '<button data-dang-xuat><i class="fa-solid fa-right-from-bracket"></i> Đăng xuất</button></div></div>';
}

// hien thong bao loi duoi tung o nhap (va to vien do o nhap sai)
function hienLoi(f, trang, truong, loi) {
    truong.forEach(function (k) {
        var el = $("loi-" + trang + "-" + k);
        if (el) el.innerText = loi[k] || "";

        var o = f.elements[k] ? f.elements[k].closest(".o-nhap") : null;
        if (o) {
            if (loi[k]) o.classList.add("sai");
            else o.classList.remove("sai");
        }
    });
}

// xoa chu do + xoa noi dung cu moi khi mo trang dang nhap / dang ky
function xoaLoiAuth() {
    ["login-email", "login-matkhau", "login-chung", "register-hoten", "register-email", "register-sdt", "register-matkhau", "register-nhaplai"].forEach(function (id) {
        var el = $("loi-" + id);
        if (el) el.innerText = "";
    });
    var all = document.querySelectorAll(".o-nhap");
    for (var i = 0; i < all.length; i++) all[i].classList.remove("sai");
    if ($("form-login").reset) $("form-login").reset();
    if ($("form-register").reset) $("form-register").reset();
}

function vaoTaiKhoan(user) {
    localStorage.setItem("typhUser", user.email);
    capNhatUser();
    var den = sauDangNhap;
    sauDangNhap = "#/";
    if (location.hash === den) route();
    else location.hash = den;
}

function dangKy(f) {
    var ten = f.elements["hoten"].value.trim();
    var email = f.elements["email"].value.trim().toLowerCase();
    var sdt = f.elements["sdt"].value.replace(/\s/g, "");
    var mk = f.elements["matkhau"].value;
    var mk2 = f.elements["nhaplai"].value;

    var loi = {};
    if (ten.length < 2) loi.hoten = "Vui lòng nhập họ tên (ít nhất 2 ký tự)";

    if (!/^\S+@\S+\.\S+$/.test(email)) loi.email = "Email chưa đúng định dạng (ví dụ: ten@gmail.com)";
    else if (timUser(email)) loi.email = "Email này đã được đăng ký, hãy đăng nhập";

    if (sdt && !/^(0|\+84)\d{9,10}$/.test(sdt)) loi.sdt = "Số điện thoại chưa đúng";

    if (mk.length < 6) loi.matkhau = "Mật khẩu phải có ít nhất 6 ký tự";
    else if (!/[A-Za-z]/.test(mk) || !/\d/.test(mk)) loi.matkhau = "Mật khẩu cần có cả chữ và số";

    if (!loi.matkhau && mk2 !== mk) loi.nhaplai = "Mật khẩu nhập lại không khớp";
    if (!loi.matkhau && !mk2) loi.nhaplai = "Vui lòng nhập lại mật khẩu";

    hienLoi(f, "register", ["hoten", "email", "sdt", "matkhau", "nhaplai"], loi);
    if (Object.keys(loi).length > 0) return;

    bamMatKhau(email, mk).then(function (hash) {
        var ds = layUsers();
        var user = { ten: ten, email: email, sdt: sdt, mk: hash, ngay: new Date().toLocaleDateString("vi-VN") };
        ds.push(user);
        localStorage.setItem("typhUsers", JSON.stringify(ds));
        thongBao("Đăng ký thành công! Xin chào " + ten);
        vaoTaiKhoan(user);
    });
}

function dangNhap(f) {
    var email = f.elements["email"].value.trim().toLowerCase();
    var mk = f.elements["matkhau"].value;
    var user = null;

    var loi = {};
    if (!email) loi.email = "Vui lòng nhập email";
    else if (!/^\S+@\S+\.\S+$/.test(email)) loi.email = "Email chưa đúng định dạng";
    else {
        user = timUser(email);
        if (!user) loi.email = "Email này chưa được đăng ký";
    }
    if (!mk) loi.matkhau = "Vui lòng nhập mật khẩu";

    hienLoi(f, "login", ["email", "matkhau"], loi);
    $("loi-login-chung").innerText = "";
    if (Object.keys(loi).length > 0) return;

    bamMatKhau(email, mk).then(function (hash) {
        if (hash !== user.mk) {
            hienLoi(f, "login", ["email", "matkhau"], { matkhau: "Mật khẩu không đúng" });
            return;
        }
        thongBao("Đăng nhập thành công! Xin chào " + user.ten);
        vaoTaiKhoan(user);
    });
}


// =====================================================
// PHAN 4: HIEN THI CAC TRANG
// =====================================================

// the san pham (dung o trang chu, trang san pham, san pham lien quan)
function theSP(p) {
    var nhan = "";
    if (p.giaCu) {
        nhan = '<span class="tag tag-sale">-' + Math.round((1 - p.gia / p.giaCu) * 100) + '%</span>';
    } else if (p.nhan === "best") {
        nhan = '<span class="tag">BEST SELLER</span>';
    } else if (p.nhan === "moi") {
        nhan = '<span class="tag">MỚI</span>';
    }

    return '<div class="sp">' +
        '<div class="sp-hinh">' +
        '<a href="#/product/' + p.id + '">' + khung(p.src, nhan) + '</a>' +
        '<button class="nut-them" data-add="' + p.id + '"><i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ</button>' +
        '</div>' +
        '<p class="loai">' + tenLoai[p.loai].toUpperCase() + '</p>' +
        '<h4><a href="#/product/' + p.id + '">' + p.ten + '</a></h4>' +
        '<div class="gia">' + fmt(p.gia) + (p.giaCu ? ' <s>' + fmt(p.giaCu) + '</s>' : '') + '</div>' +
        '</div>';
}

// ---------- trang chu ----------
function veHome() {
    $("ds-best").innerHTML = products.filter(function (p) { return p.nhan === "best"; }).slice(0, 4).map(theSP).join("");
    $("ds-moi").innerHTML = products.filter(function (p) { return p.nhan === "moi"; }).slice(0, 8).map(theSP).join("");
}

// ---------- trang san pham: loc + tim kiem + sap xep ----------
var loc = { cat: "all", gia: [], chat: [], q: "", sort: "moi", trang: 1 };

function locSP() {
    var tuKhoa = boDau(loc.q.trim());

    var kq = products.filter(function (p) {
        if (loc.cat === "sale") {
            if (!p.giaCu) return false;
        } else if (loc.cat !== "all" && p.loai !== loc.cat) {
            return false;
        }

        if (tuKhoa && boDau(p.ten + " " + tenLoai[p.loai] + " " + p.chat).indexOf(tuKhoa) === -1) return false;

        if (loc.chat.length && loc.chat.indexOf(p.chat) === -1) return false;

        if (loc.gia.length) {
            var ok = false;
            loc.gia.forEach(function (i) {
                if (p.gia >= dsGia[i].min && p.gia < dsGia[i].max) ok = true;
            });
            if (!ok) return false;
        }
        return true;
    });

    kq.sort(function (a, b) {
        if (loc.sort === "gia-tang") return a.gia - b.gia;
        if (loc.sort === "gia-giam") return b.gia - a.gia;
        if (loc.sort === "ten") return a.ten.localeCompare(b.ten, "vi");
        return b.id - a.id;
    });
    return kq;
}

function itemCat(k, ten) {
    return '<li><a href="#/shop' + (k === "all" ? "" : "/" + k) + '"' + (loc.cat === k ? ' class="dang"' : '') + '>' + ten + '</a></li>';
}

function veSidebar() {
    var h = '<h4>Danh mục</h4><ul class="loc-cat">' + itemCat("all", "Tất cả sản phẩm");
    for (var k in tenLoai) {
        h += itemCat(k, tenLoai[k]);
    }
    h += itemCat("sale", "Đang giảm giá") + '</ul>';

    h += '<h4>Khoảng giá</h4>';
    dsGia.forEach(function (g, i) {
        h += '<label><input type="checkbox" data-gia="' + i + '"' + (loc.gia.indexOf(i) > -1 ? " checked" : "") + '> ' + g.ten + '</label>';
    });

    h += '<h4>Chất liệu</h4>';
    dsChat.forEach(function (c) {
        h += '<label><input type="checkbox" data-chat="' + c + '"' + (loc.chat.indexOf(c) > -1 ? " checked" : "") + '> ' + c + '</label>';
    });

    h += '<button class="btn-dark xoa-loc" id="xoa-loc">Xóa bộ lọc</button>';
    $("sidebar").innerHTML = h;
}

function veShop() {
    veSidebar();
    var kq = locSP();

    var tieuDe = loc.cat === "all" ? "Tất cả sản phẩm" : (loc.cat === "sale" ? "Đang giảm giá" : tenLoai[loc.cat]);
    $("shop-tieude").innerText = loc.q.trim() ? 'Kết quả cho "' + loc.q.trim() + '"' : tieuDe;
    $("shop-dem").innerText = kq.length + " sản phẩm";
    $("sort-select").value = loc.sort;

    var allInput = document.querySelectorAll(".form-tim input");
    for (var i = 0; i < allInput.length; i++) {
        allInput[i].value = loc.q;
    }

    var hien = kq.slice(0, loc.trang * 12);
    if (hien.length === 0) {
        $("ds-shop").innerHTML = '<p class="khong-co">Không tìm thấy sản phẩm phù hợp. Hãy thử bỏ bớt bộ lọc hoặc đổi từ khóa khác.</p>';
    } else {
        $("ds-shop").innerHTML = hien.map(theSP).join("");
    }
    $("xem-them").style.display = kq.length > hien.length ? "inline-block" : "none";
}

function resetLoc() {
    loc.q = "";
    loc.gia = [];
    loc.chat = [];
    loc.sort = "moi";
    loc.trang = 1;
}

function timKiem(q) {
    resetLoc();
    loc.q = q;
    loc.cat = "all";
    if (location.hash === "#/shop") {
        veShop();
    } else {
        location.hash = "#/shop";
    }
}

// ---------- trang chi tiet san pham ----------
function veChiTiet(id) {
    var p = timSP(id);
    if (!p) {
        location.hash = "#/shop";
        return;
    }

    var thumbs = "";
    [p.src, anhPhu(p.src, "-2"), anhPhu(p.src, "-3"), anhPhu(p.src, "-4")].forEach(function (a, i) {
        thumbs += '<div class="thumb' + (i === 0 ? " chon" : "") + '" data-thumb="' + a + '">' + khung(a) + '</div>';
    });

    var mau = "";
    mauList.forEach(function (m, i) {
        mau += '<span class="mau-chip' + (i === 0 ? " chon" : "") + '" data-mau="' + m.ten + '" title="' + m.ten + '" style="background-color:' + m.ma + '"></span>';
    });

    var lienQuan = products.filter(function (x) { return x.loai === p.loai && x.id !== p.id; }).slice(0, 4).map(theSP).join("");
    var baoHanh = (p.loai === "sofa" || p.loai === "giuong") ? "36 tháng" : "12 tháng";

    $("chi-tiet-noidung").innerHTML =
        '<p class="duong-dan pad"><a href="#/">Trang chủ</a> / <a href="#/shop/' + p.loai + '">' + tenLoai[p.loai] + '</a> / ' + p.ten + '</p>' +
        '<div id="ct">' +
        '<div><div id="anh-lon">' + khung(p.src) + '</div><div class="thumbs">' + thumbs + '</div></div>' +
        '<div class="info" data-id="' + p.id + '">' +
        '<h2>' + p.ten + '</h2>' +
        '<div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i> <span>4.8 (126 đánh giá)</span></div>' +
        '<div class="gia-lon">' + fmt(p.gia) + (p.giaCu ? ' <s>' + fmt(p.giaCu) + '</s>' : '') + '</div>' +
        '<p class="short">' + moTaLoai[p.loai] + '</p>' +
        '<h5>Màu sắc</h5><div class="mau">' + mau + '</div>' +
        '<h5>Số lượng</h5><div class="sl-box"><button data-sl="-1">-</button><input type="text" id="sl" value="1" readonly><button data-sl="1">+</button></div>' +
        '<div class="btn-row"><button class="btn btn-dark" data-add-ct>Thêm vào giỏ hàng</button><button class="btn btn-out" data-mua-ngay>Mua ngay</button></div>' +
        '<ul class="policy"><li><i class="fa-solid fa-truck"></i> Miễn phí vận chuyển cho đơn từ 10 triệu</li><li><i class="fa-solid fa-shield-halved"></i> Bảo hành ' + baoHanh + '</li><li><i class="fa-solid fa-rotate-left"></i> Đổi trả linh hoạt trong 7 ngày</li></ul>' +
        '</div></div>' +
        '<h3 class="tieu-de-nho">Thông tin sản phẩm</h3>' +
        '<table class="thong-so"><tr><td>Danh mục</td><td>' + tenLoai[p.loai] + '</td></tr><tr><td>Chất liệu</td><td>' + p.chat + '</td></tr><tr><td>Bảo hành</td><td>' + baoHanh + '</td></tr><tr><td>Mã sản phẩm</td><td>TYPH-' + (1000 + p.id) + '</td></tr></table>' +
        '<h3 class="tieu-de-nho">Sản phẩm liên quan</h3><div class="shop-grid four">' + lienQuan + '</div>';
}

// ---------- trang gio hang ----------
function veGio() {
    var g = layGio();
    var box = $("gio-noidung");

    if (g.length === 0) {
        box.innerHTML = '<div class="trong"><i class="fa-solid fa-bag-shopping"></i><p>Giỏ hàng của bạn đang trống.</p><a href="#/shop" class="btn btn-dark">Tiếp tục mua sắm</a></div>';
        return;
    }

    var hang = "";
    g.forEach(function (x, i) {
        var p = timSP(x.id);
        hang += '<tr><td><div class="item"><a href="#/product/' + p.id + '" class="item-anh">' + khung(p.src) + '</a>' +
            '<div><h4>' + p.ten + '</h4><p>Màu: ' + x.mau + '</p></div></div></td>' +
            '<td>' + fmt(p.gia) + '</td>' +
            '<td><div class="sl-box"><button data-gio-sl="' + i + ':-1">-</button><span>' + x.sl + '</span><button data-gio-sl="' + i + ':1">+</button></div></td>' +
            '<td>' + fmt(p.gia * x.sl) + '</td>' +
            '<td><i class="fa-regular fa-trash-can xoa" data-xoa="' + i + '"></i></td></tr>';
    });

    var t = tinhTien();
    box.innerHTML =
        '<p class="duong-dan pad"><a href="#/">Trang chủ</a> / Giỏ hàng</p>' +
        '<h2 class="tieu-de-nho">Giỏ hàng của bạn</h2>' +
        '<div class="gio-layout"><div>' +
        '<div class="table-wrap"><table class="bang-gio"><thead><tr><th>Sản phẩm</th><th>Đơn giá</th><th>Số lượng</th><th>Thành tiền</th><th></th></tr></thead><tbody>' + hang + '</tbody></table></div>' +
        '<a href="#/shop" class="quay-lai"><i class="fa-solid fa-arrow-left"></i> Tiếp tục mua sắm</a></div>' +
        '<div class="summary"><h3>Tóm tắt đơn hàng</h3>' + tomTatTien(t) +
        '<div class="coupon"><input type="text" id="ma-giam" placeholder="Mã giảm giá (thử TYPH10)"><button data-ap-ma>Áp dụng</button></div>' +
        '<a href="#/checkout" class="btn btn-dark full">Tiến hành đặt hàng</a></div></div>';
}

// ---------- trang thanh toan ----------
function veThanhToan() {
    var g = layGio();
    if (g.length === 0) {
        location.hash = "#/cart";
        return;
    }

    var ds = "";
    g.forEach(function (x) {
        var p = timSP(x.id);
        ds += '<div class="tt-sp"><span>' + p.ten + ' <small>(' + x.mau + ') × ' + x.sl + '</small></span><b>' + fmt(p.gia * x.sl) + '</b></div>';
    });

    var tp = ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Cần Thơ", "Hải Phòng", "Tỉnh / thành khác"];
    var opt = tp.map(function (t) { return '<option>' + t + '</option>'; }).join("");

    var u = layUser();
    var nhac = u ? "" : '<p class="nhac-dn">Bạn đã có tài khoản? <a href="#/login" data-sau="#/checkout">Đăng nhập</a> để điền nhanh thông tin. Chưa có? <a href="#/register" data-sau="#/checkout">Đăng ký</a></p>';

    $("tt-noidung").innerHTML =
        '<p class="duong-dan pad"><a href="#/">Trang chủ</a> / <a href="#/cart">Giỏ hàng</a> / Đặt hàng</p>' + nhac +
        '<h2 class="tieu-de-nho">Thông tin đặt hàng</h2>' +
        '<form id="form-dat-hang" class="gio-layout" novalidate><div class="form-tt">' +
        '<label>Họ và tên *<input type="text" name="ten"><em class="loi" id="loi-ten"></em></label>' +
        '<label>Số điện thoại *<input type="text" name="sdt" placeholder="0901234567"><em class="loi" id="loi-sdt"></em></label>' +
        '<label>Email<input type="text" name="email"><em class="loi" id="loi-email"></em></label>' +
        '<label>Tỉnh / thành phố<select name="thanhpho">' + opt + '</select></label>' +
        '<label>Địa chỉ nhận hàng *<input type="text" name="diachi" placeholder="Số nhà, đường, phường / xã, quận / huyện"><em class="loi" id="loi-diachi"></em></label>' +
        '<label>Ghi chú<textarea name="ghichu" rows="3"></textarea></label>' +
        '<h4>Phương thức thanh toán</h4>' +
        '<label class="radio"><input type="radio" name="thanhtoan" value="Thanh toán khi nhận hàng (COD)" checked> Thanh toán khi nhận hàng (COD)</label>' +
        '<label class="radio"><input type="radio" name="thanhtoan" value="Chuyển khoản ngân hàng"> Chuyển khoản ngân hàng</label>' +
        '</div><div class="summary"><h3>Đơn hàng của bạn</h3>' + ds + '<div class="gach"></div>' + tomTatTien(tinhTien()) +
        '<button type="submit" class="btn btn-dark full">Đặt hàng</button></div></form>';

    // da dang nhap thi dien san ho ten, so dien thoai, email
    if (u) {
        var form = $("form-dat-hang");
        form.elements["ten"].value = u.ten;
        form.elements["sdt"].value = u.sdt || "";
        form.elements["email"].value = u.email;
    }
}

function datHang(f) {
    var ten = f.elements["ten"].value.trim();
    var sdt = f.elements["sdt"].value.replace(/\s/g, "");
    var email = f.elements["email"].value.trim();
    var diachi = f.elements["diachi"].value.trim();

    var loi = {};
    if (ten.length < 2) loi.ten = "Vui lòng nhập họ tên";
    if (!/^(0|\+84)\d{9,10}$/.test(sdt)) loi.sdt = "Số điện thoại chưa đúng";
    if (email && !/^\S+@\S+\.\S+$/.test(email)) loi.email = "Email chưa đúng";
    if (diachi.length < 5) loi.diachi = "Vui lòng nhập địa chỉ nhận hàng";

    ["ten", "sdt", "email", "diachi"].forEach(function (k) {
        $("loi-" + k).innerText = loi[k] || "";
    });
    if (Object.keys(loi).length > 0) return;

    var hang = layGio().map(function (x) {
        var p = timSP(x.id);
        return { ten: p.ten, mau: x.mau, sl: x.sl, gia: p.gia };
    });

    var don = {
        ma: "TYPH" + Date.now().toString().slice(-6),
        ngay: new Date().toLocaleString("vi-VN"),
        khach: { ten: ten, sdt: sdt, email: email, diachi: diachi + ", " + f.elements["thanhpho"].value },
        thanhtoan: f.elements["thanhtoan"].value,
        nguoiDung: layUser() ? layUser().email : "",
        hang: hang,
        tien: tinhTien()
    };

    var all = [];
    try { all = JSON.parse(localStorage.getItem("typhDon")) || []; } catch (e) { all = []; }
    all.push(don);
    localStorage.setItem("typhDon", JSON.stringify(all));
    localStorage.setItem("typhLast", JSON.stringify(don));

    luuGio([]);
    localStorage.removeItem("typhMa");
    location.hash = "#/done";
}

// ---------- trang dat hang thanh cong ----------
function veXong() {
    var don = null;
    try { don = JSON.parse(localStorage.getItem("typhLast")); } catch (e) { don = null; }
    if (!don) {
        location.hash = "#/";
        return;
    }

    var ds = "";
    don.hang.forEach(function (x) {
        ds += '<div class="tt-sp"><span>' + esc(x.ten) + ' <small>(' + esc(x.mau) + ') × ' + x.sl + '</small></span><b>' + fmt(x.gia * x.sl) + '</b></div>';
    });

    $("xong-noidung").innerHTML =
        '<div class="xong"><i class="fa-regular fa-circle-check"></i>' +
        '<h2>Đặt hàng thành công!</h2>' +
        '<p>Cảm ơn <b>' + esc(don.khach.ten) + '</b>. Mã đơn hàng của bạn là <b>' + esc(don.ma) + '</b>.</p>' +
        '<p class="nho">Giao đến: ' + esc(don.khach.diachi) + ' · SĐT: ' + esc(don.khach.sdt) + '<br>Thanh toán: ' + esc(don.thanhtoan) + '</p>' +
        '<div class="summary">' + ds + '<div class="gach"></div>' + tomTatTien(don.tien) + '</div>' +
        '<a href="#/shop" class="btn btn-dark">Tiếp tục mua sắm</a></div>';
}


// =====================================================
// PHAN 5: CHUYEN TRANG (dua vao dia chi sau dau #)
// #/  #/shop  #/shop/sofa  #/product/5  #/cart  #/checkout  #/done
// =====================================================
var navbar = $("navbar");

function route() {
    var parts = (location.hash || "#/").replace("#/", "").split("/");
    var trang = parts[0] || "home";
    if (["home", "shop", "product", "cart", "checkout", "done", "login", "register"].indexOf(trang) === -1) {
        trang = "home";
    }

    // da dang nhap roi thi khong vao trang dang nhap / dang ky nua
    if ((trang === "login" || trang === "register") && layUser()) {
        location.hash = "#/";
        return;
    }

    var all = document.querySelectorAll(".trang");
    for (var i = 0; i < all.length; i++) {
        all[i].classList.remove("hien");
    }
    $("trang-" + trang).classList.add("hien");
    if (trang === "login" || trang === "register") xoaLoiAuth();

    if (trang === "shop") {
        var c = parts[1] || "all";
        if (c !== "all" && c !== "sale" && !tenLoai[c]) c = "all";
        loc.cat = c;
        loc.trang = 1;
        veShop();
    }
    if (trang === "product") veChiTiet(Number(parts[1]));
    if (trang === "cart") veGio();
    if (trang === "checkout") veThanhToan();
    if (trang === "done") veXong();

    navbar.classList.remove("active");
    window.scrollTo(0, 0);
}

window.addEventListener("hashchange", route);


// =====================================================
// PHAN 6: SU KIEN (bam nut, doi bo loc, gui form)
// =====================================================
document.addEventListener("click", function (e) {
    var t = e.target;
    var nut;

    // bam ra ngoai thi dong menu tai khoan
    if (!t.closest(".user-menu") && $("user-drop")) {
        $("user-drop").classList.remove("mo");
    }

    // tai khoan: mo menu, dang xuat, hien / an mat khau
    if ((nut = t.closest("[data-mo-user]"))) {
        $("user-drop").classList.toggle("mo");
        return;
    }
    if (t.closest("[data-dang-xuat]")) {
        localStorage.removeItem("typhUser");
        capNhatUser();
        thongBao("Đã đăng xuất");
        location.hash = "#/";
        return;
    }
    if ((nut = t.closest("[data-hien-mk]"))) {
        var o = nut.parentNode.querySelector("input");
        var hien = o.type === "password";
        o.type = hien ? "text" : "password";
        nut.className = (hien ? "fa-regular fa-eye-slash" : "fa-regular fa-eye") + " mat";
        return;
    }
    // link "dang nhap de dien nhanh" o trang thanh toan: dang nhap xong quay lai do
    if ((nut = t.closest("[data-sau]"))) {
        sauDangNhap = nut.getAttribute("data-sau");
    }

    // bam vao link vao trang san pham (ngoai thanh loc) thi xoa bo loc cu
    var link = t.closest('a[href^="#/shop"]');
    if (link && !t.closest("#sidebar")) {
        resetLoc();
        if (link.getAttribute("href") === location.hash) route();
    }

    // them nhanh vao gio tu the san pham
    if ((nut = t.closest("[data-add]"))) {
        themVaoGio(Number(nut.getAttribute("data-add")), 1, "Be");
        return;
    }

    // trang chi tiet: doi anh, chon mau, so luong, them gio, mua ngay
    if ((nut = t.closest("[data-thumb]"))) {
        $("anh-lon").innerHTML = khung(nut.getAttribute("data-thumb"));
        var all = document.querySelectorAll(".thumb");
        for (var i = 0; i < all.length; i++) all[i].classList.remove("chon");
        nut.classList.add("chon");
        return;
    }
    if ((nut = t.closest(".mau-chip"))) {
        var chips = document.querySelectorAll(".mau-chip");
        for (var j = 0; j < chips.length; j++) chips[j].classList.remove("chon");
        nut.classList.add("chon");
        return;
    }
    if ((nut = t.closest("[data-sl]"))) {
        var o = $("sl");
        o.value = Math.max(1, Number(o.value) + Number(nut.getAttribute("data-sl")));
        return;
    }
    if ((nut = t.closest("[data-add-ct],[data-mua-ngay]"))) {
        var id = Number(document.querySelector(".info").getAttribute("data-id"));
        var mau = document.querySelector(".mau-chip.chon").getAttribute("data-mau");
        themVaoGio(id, Number($("sl").value), mau);
        if (nut.hasAttribute("data-mua-ngay")) location.hash = "#/checkout";
        return;
    }

    // trang gio hang: tang giam, xoa, ma giam gia
    if ((nut = t.closest("[data-gio-sl]"))) {
        var kq = nut.getAttribute("data-gio-sl").split(":");
        var g = layGio();
        g[Number(kq[0])].sl = Math.max(1, g[Number(kq[0])].sl + Number(kq[1]));
        luuGio(g);
        veGio();
        return;
    }
    if ((nut = t.closest("[data-xoa]"))) {
        var g2 = layGio();
        g2.splice(Number(nut.getAttribute("data-xoa")), 1);
        luuGio(g2);
        veGio();
        return;
    }
    if (t.closest("[data-ap-ma]")) {
        var ma = $("ma-giam").value.trim().toUpperCase();
        if (ma === "TYPH10") {
            localStorage.setItem("typhMa", ma);
            thongBao("Đã áp dụng mã TYPH10");
            veGio();
        } else {
            thongBao("Mã giảm giá không hợp lệ");
        }
        return;
    }

    // trang san pham: xem them, xoa loc, nut bo loc tren dien thoai
    if (t.closest("#xem-them")) {
        loc.trang++;
        veShop();
        return;
    }
    if (t.closest("#xoa-loc")) {
        resetLoc();
        veShop();
        return;
    }
    if (t.closest("#btn-loc")) {
        $("sidebar").classList.toggle("mo");
    }
});

document.addEventListener("change", function (e) {
    var t = e.target;

    if (t.hasAttribute("data-gia") || t.hasAttribute("data-chat")) {
        var ds = t.hasAttribute("data-gia") ? loc.gia : loc.chat;
        var giaTri = t.hasAttribute("data-gia") ? Number(t.getAttribute("data-gia")) : t.getAttribute("data-chat");
        var vt = ds.indexOf(giaTri);
        if (t.checked && vt === -1) ds.push(giaTri);
        if (!t.checked && vt > -1) ds.splice(vt, 1);
        loc.trang = 1;
        veShop();
    }
    if (t.id === "sort-select") {
        loc.sort = t.value;
        loc.trang = 1;
        veShop();
    }
});

document.addEventListener("submit", function (e) {
    var f = e.target;

    if (f.classList.contains("form-tim")) {
        e.preventDefault();
        timKiem(f.querySelector("input").value);
    }
    if (f.id === "form-email") {
        e.preventDefault();
        thongBao("Cảm ơn bạn đã đăng ký! (giao diện demo)");
        f.reset();
    }
    if (f.id === "form-dat-hang") {
        e.preventDefault();
        datHang(f);
    }
    if (f.id === "form-login") {
        e.preventDefault();
        dangNhap(f);
    }
    if (f.id === "form-register") {
        e.preventDefault();
        dangKy(f);
    }
});

// mo / dong menu tren dien thoai
$("menu-icon").addEventListener("click", function () {
    navbar.classList.toggle("active");
});


// =====================================================
// PHAN 7: CHAY LAN DAU
// =====================================================
capNhatSoLuong();
capNhatUser();
veHome();
route();