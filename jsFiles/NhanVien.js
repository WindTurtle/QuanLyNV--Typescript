"use strict";
var NhanVien = /** @class */ (function () {
    function NhanVien(maNV, hoTen, luongCB, loaiNV) {
        this.maNV = maNV;
        this.hoTen = hoTen;
        this.luongCB = luongCB;
        this.loaiNV = loaiNV;
    }
    NhanVien.prototype.TinhLuong = function () {
        return this.luongCB * 1;
    };
    return NhanVien;
}());
