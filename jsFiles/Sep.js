"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sep = /** @class */ (function (_super) {
    __extends(Sep, _super);
    function Sep(maNV, hoTen, luongCB, loaiNV) {
        return _super.call(this, maNV, hoTen, luongCB, loaiNV) || this;
    }
    Sep.prototype.TinhLuong = function () {
        return _super.prototype.TinhLuong.call(this) * 3;
    };
    return Sep;
}(NhanVien));
