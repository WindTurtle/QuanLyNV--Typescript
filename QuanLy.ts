class QuanLy extends NhanVien {
  constructor(maNV: number, hoTen: string, luongCB: number, loaiNV: string) {
    super(maNV, hoTen, luongCB, loaiNV);
  }
  TinhLuong() {
    return super.TinhLuong() * 1.5;
  }
}
