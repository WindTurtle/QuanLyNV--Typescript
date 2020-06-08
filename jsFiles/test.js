"use strict";
var arrNhanVien = new Array();
var themNhanVien = function () {
    var maNV = parseInt(document.getElementById("txtMaNV").value);
    var tenNV = document.getElementById("txtTenNV")
        .value;
    var luongCB = parseFloat(document.getElementById("txtLuongCB").value);
    var sep = document.getElementById("radSep");
    var quanLy = document.getElementById("radQuanLy");
    var thuong = document.getElementById("radThuong");
    var loaiNV = "";
    if (sep.checked) {
        loaiNV = "Sếp";
        var newSep = new Sep(maNV, tenNV, luongCB, loaiNV);
        arrNhanVien.push(newSep);
    }
    else if (quanLy.checked) {
        loaiNV = "Quản Lý";
        var newQuanLy = new QuanLy(maNV, tenNV, luongCB, loaiNV);
        arrNhanVien.push(newQuanLy);
    }
    else if (thuong.checked) {
        loaiNV = "Nhân Viên";
        var newThuong = new NhanVien(maNV, tenNV, luongCB, loaiNV);
        arrNhanVien.push(newThuong);
    }
    renderTable();
    console.log(arrNhanVien);
};
var renderTable = function () {
    var content = "";
    for (var i = 0; i < arrNhanVien.length; i++) {
        var item = arrNhanVien[i];
        content += "\n    <tr>\n      <th scope=\"row\">" + item.maNV + "</th>\n      <td>" + item.hoTen + "</td>\n      <td>" + ("$" + item.luongCB) + "</td>\n      <td>" + item.loaiNV + "</td>\n      <td>" + ("$" + item.TinhLuong()) + "</td>\n    </tr>\n    ";
    }
    (document.getElementById("tableContent")).innerHTML = content;
};
