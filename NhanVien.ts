class NhanVien {
  public maNV: number;
  public hoTen: string;
  public luongCB: number;
  public loaiNV: string;
  constructor(
    maNV: number,
    hoTen: string,
    luongCB: number,
    loaiNV: string
  ) {
    this.maNV = maNV;
    this.hoTen = hoTen;
    this.luongCB = luongCB;
    this.loaiNV = loaiNV;
  }
  public TinhLuong() {
    return this.luongCB * 1;
  }
}
