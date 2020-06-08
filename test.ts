let arrNhanVien = new Array();

const themNhanVien = () => {
  var maNV: number = parseInt(
    (<HTMLInputElement>document.getElementById("txtMaNV")).value
  );

  var tenNV: string = (<HTMLInputElement>document.getElementById("txtTenNV"))
    .value;

  var luongCB: number = parseFloat(
    (<HTMLInputElement>document.getElementById("txtLuongCB")).value
  );
  var sep = <HTMLInputElement>document.getElementById("radSep");
  var quanLy = <HTMLInputElement>document.getElementById("radQuanLy");
  var thuong = <HTMLInputElement>document.getElementById("radThuong");
  var loaiNV = "";
  if (sep.checked) {
    loaiNV = "Sếp";
    var newSep = new Sep(maNV, tenNV, luongCB, loaiNV);
    arrNhanVien.push(newSep);
  } else if (quanLy.checked) {
    loaiNV = "Quản Lý";
    var newQuanLy = new QuanLy(maNV, tenNV, luongCB, loaiNV);
    arrNhanVien.push(newQuanLy);
  } else if (thuong.checked) {
    loaiNV = "Nhân Viên";
    var newThuong = new NhanVien(maNV, tenNV, luongCB, loaiNV);
    arrNhanVien.push(newThuong);
  }
  renderTable();
  console.log(arrNhanVien);
};

const renderTable = () => {
  var content = "";
  for (let i = 0; i < arrNhanVien.length; i++) {
    var item = arrNhanVien[i];
    content += `
    <tr>
      <th scope="row">${item.maNV}</th>
      <td>${item.hoTen}</td>
      <td>${"$" + item.luongCB}</td>
      <td>${item.loaiNV}</td>
      <td>${"$" + item.TinhLuong()}</td>
    </tr>
    `;
  }
  (<HTMLInputElement>(
    document.getElementById("tableContent")
  )).innerHTML = content;
};
