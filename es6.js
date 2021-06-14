// // khai báo biến
// // phân biệt let và const

// /**
//   Phạm vi hoạt động của từ khóa var: toàn bộ scope
//   Phạm vi hoạt động của từ khóa let: Trong từng scope khác nhau sẽ phân biệt nhau
//   Trong 1 scope thì không thể khai báo 2 lần let với cùng 1 tên biến
//   Đối với khai báo biến = var trong js sẽ hỗ trợ cơ chế tự khai báo hosting ( ngầm định khai báo biến đó ở đầu scope ). 
//   Đối với let và const không hổ trợ hoisting
//  */



// let hoTen = 'Thành';

// {
//   let hoTen = 'Minh';
//   console.log('hoTen', hoTen);
// }

// console.log('hoTen', hoTen);


// // ===================== ARROW FUNCTION =======================//
// /** ArrowFunction: 
//  * + Không hỗ trợ cơ chết hoisting (Khai báo trc mới được sử dụng gọi hàm)
//  * + Đối với hàm có 1 lệnh return thì không cần đóng {} và không cần ghi return
//  * + Đối với hàm có 1 tham số thì không cần {thamso} => {} --> thamSo{}
//  */

// //  es5 
// //   tenHamES5();
// // function tenHamES5(){
// //   console.log('tenHamES5');
// // }

// // es6
// // var tenHam = () => {
// //   console.log('Hello Cybersoft');
// // }

// // tenHam();
// // // var tinhTong = {a,b} => {return a+b};
// // // Ví dụ hàm có 1 lệnh return 
// // let tinhTong = (a, b) => a + b;
// // // ví dụ hàm có 1 tham số
// // var showMess = name => console.log(`Hello ${name}`)
// // console.log(tinhTong(5, 10));
// // showMess('Thành')
// // ArrowFunction không làm thay đổi ngữ cảnh của con trỏ this

// /** 
//  * Ngữ cảnh (context) con trỏ this: 
//  * - Mặc định khi sử dụng con trỏ this thì nó là window (var bien hoặc window.bien)
//  * - Khi dùng con trỏ this trong đối tượng object = {} --> thì this là đối tượng đó
//  * - Khi dùng con troe this trong function (prototype hoặc class) thì this sẽ đại diện cho prototype hay class đó
//  */

// console.log(window.innerHeight, window.innerWidth);
// console.log(window.location.host);
// console.log(this.innerHeight);

// let hocVien = {
//   id: 1,
//   hoTenHocVien: 'Nguyễn Văn A',
//   lop: 'FrontEnd 66',
//   layThongTinHocVien: function () {
//     // Trong phương thức khai báo 1 hàm
//     let hienThiThongTin = () => {
//       console.log(` Họ tên: ${this.hoTenHocVien} - Lớp: ${this.lop} `);
//     }

//     // Gọi lại hàm đó
//     hienThiThongTin();
//   }
// }
// hocVien.layThongTinHocVien();

// // ==================== Rest Params =========================


// // function tinhTong(a, b) {
// //   console.log(a + b);
// // }

// // function tinhTong(a, b, c) {
// //   console.log(a + b + c);
// // }

// var tinhTong = function (thamSo1, ...restParams) { //...restParams là mảng []

//   switch (restParams.length) {
//     case 2: {
//       console.log(thamSo1, 'tổng 2 số = ', restParams[0] + restParams[1]);
//     } break;
//     case 3: {
//       console.log(thamSo1, 'tổng 3 số = ', restParams[0] + restParams[1] + restParams[2]);
//     } break;
//     default: {
//       console.log('Tham số không hợp lệ !');
//     }
//   }
// }

// tinhTong('Bài toán', 1, 2, 3);

// //====================== Spread Operator ==============================

// let sinhVien1 = { maSV: 1, hoTen: 'Văn Vĩ Thành' };
// let sinhVien2 = { ...sinhVien1, lop: 'FrontEnd66' };
// sinhVien2.maSV = 2;
// sinhVien2.hoTen = 'Văn Zĩ Thành';

// console.log('SV1', sinhVien1);
// console.log('SV2', sinhVien2);

// let arr1 = [1, 2, 3, 4];
// let arr2 = [...arr1, 5, 6];

// arr2.push(8);
// arr1.splice(1, 1);
// console.log('arr1', arr1);
// console.log('arr2', arr2);

// // ============================ DESTRUCTURING ===========================

// let sanPham = {
//   maSP: 1,
//   tenSP: 'Iphone',
//   hinhAnh: 'http://picsum.photo/200/200',
//   thongTinSanPham: function () {
//     console.log('Mã sp', sanPham.maSP);
//     console.log('Tên sp', sanPham.tenSP);
//     console.log('Hình sp', sanPham.hinhAnh);
//   }
// }

// // es5
// // let maSP = sanPham.maSP;
// // let tenSP = sanPham.tenSP;
// // let hinhAnh = sanPham.hinhAnh;
// // let thongTinSanPham = sanPham.thongTinSanPham;

// // es6
// let { maSP, tenSP, hinhAnh, thongTinSanPham } = sanPham;

// //============================== Object Literal =============================
// // + Từ tên biến tạo ra tên thuộc tính
// //
// let fName = 'Mị';
// let myObj = {
//   fName,
//   sayHi: function () {
//     console.log(`Hello ${this.fName}`);
//   }
// }

// console.log('obj', myObj);


// let tenThuocTinh = 'Mã Học Viên';

// let hocVien1 = {
//   [tenThuocTinh]: '001',
//   tenHocVien: 'Huynh Minh Thong'
// }

// console.log(hocVien1);

// console.log('Học Viên', hocVien1[tenThuocTinh]);

// //======================== For In - For Of ==============================

// // (1) For In : ngoài duyệt array ra for in còn dùng để duyệt các thuộc tính của object
// let mangSanPham = [
//   { maSP: 1, tenSP: 'Iphone X', gia: 1000, hinhAnh: 'http://picsum.photos/200/200' },
//   { maSP: 2, tenSP: 'Iphone Xs', gia: 2000, hinhAnh: 'http://picsum.photos/200/200' },
//   { maSP: 3, tenSP: 'Iphone Xs Max', gia: 3000, hinhAnh: 'http://picsum.photos/200/200' },
// ]

// // for (let index in mangSanPham) { // index = 0 -> ... length -1
// //   // Mỗi lần duyệt lấy ra 1 sp
// //   let sanPham = mangSanPham[index]; 
// //   console.log('index', index);
// //   console.log('mangSanPham', mangSanPham[index]);
// //   console.log('sanPham', sanPham);
// // }

// var nguoiDung = {
//   taiKhoan: 'Văn Vĩ Thành',
//   matKhau: 240500,
//   email: 'vanvithanh2405@gmail.com',
//   soDienThoai: '0902889710'
// }

// for (let tenThuocTinh in nguoiDung){
//   console.log(tenThuocTinh, nguoiDung[tenThuocTinh]);
// }

// // (2) For of
// for (let sanPham of mangSanPham){ // mỗi lần duyệt lất ra 1 object trong mảng 
//   console.log('sanPham',sanPham);
// }

// // For in dùng để duyệt key[thuộc tính] của object, for of dùng để duyệt object


// ==================== BÀI TẬP ====================
document.querySelector('form').onsubmit = function (event) {
  event.preventDefault();

  let arrInput = document.querySelectorAll('form input');
  console.log('arrInput', arrInput);
  let hocVien = {} // tạo một mảng rỗng vì người nhập chưa nhập vào thông tin gì
  // Duyệt các thẻ input
  for (let input of arrInput) {
    // lấy name và value
    // let name = input.name;
    // let value = input.value;
    let { name, value } = input;

    hocVien = { ...hocVien, [name]: value }; // ghi chép giá trị cũ và thêm giá trị của vòng lặp 
  }
  // Tạo table từ object học viên

  console.log('hocVien', hocVien); //{maHocVien:1,tenHocVien:'aaa',....}

  var trHocVien = `<tr>`

  for (let tenThuocTinh in hocVien){
    trHocVien += `
      <td>${hocVien[tenThuocTinh]}</td>
    `
  }
  trHocVien+=`</tr>`

  document.querySelector('#tableHocVien').innerHTML = trHocVien;
}

// ============================ class ==================================
// es5
// function HocVien (){
//   this.maHocVien = '';
//   this.tenHocVien = '';
//   this.hienThiThongTin = function(){
//     console.log('Mã học viên', this.maHocVien);
//     console.log('Tên học viên', this.tenHocVien);
//   }
// }

// es6

// class HocVien{
//   maHocVien = '';
//   tenHocVien = '';

//   constructor(ma,ten){
//     this.maHocVien = ma;
//     this.tenHocVien = ten;
//   }

//   // Có 2 cách khai báo phương thức
//   hienThiThongTinHocVien (){
//     console.log('Mã học viên', this.maHocVien);
//     console.log('Tên học viên', this.tenHocVien);
//   }

//   // Cách 2
//   hienThiThongTinHocVien = () => {
//     console.log('Mã học viên', this.maHocVien);
//     console.log('Tên học viên', this.tenHocVien);
//   }
// }

// let hv = new HocVien(1,'Văn Vĩ Thành');


// import { LaoCong,arrSinhVien } from './models/LaoCong.js';

// let laoCong = new LaoCong();
// laoCong.maNhanVien = '1';

// console.log('laoCong', laoCong);
// console.log(arrSinhVien);

// let nhanVien = new NhanVienLaoCong ('Phúc');
// nhanVien.maNhanVien = 2;
// nhanVien.tinhLuong();
// console.log({nhanVien});


let mangSanPham = [
    {maSP:1,tenSP:'Google pixel xl', gia: 1000, hangSX: 'Google'},
    {maSP:2,tenSP:'Google pixel xl 2', gia: 2000, hangSX: 'Google'},
    {maSP:3,tenSP:'Sony xperia xz', gia: 3000, hangSX: 'Sony'},
    {maSP:4,tenSP:'Sony xperia xzs', gia: 3000, hangSX: 'Sony'},
    {maSP:5,tenSP:'Iphone X', gia: 2500, hangSX: 'Apple'},
    {maSP:6,tenSP:'Iphone XS', gia: 1500, hangSX: 'Apple'},
    {maSP:7,tenSP:'Samsung galaxy s9', gia: 1500, hangSX: 'Samsung'},
    {maSP:8,tenSP:'Samsung galaxy note 10 Plus', gia: 2000, hangSX: 'Samsung'},
    {maSP:9,tenSP:'Xiaomi mi 9', gia: 5000, hangSX: 'Xiaomi'},
    {maSP:10,tenSP:'Xiaomi mi 10', gia: 4500, hangSX: 'Xiaomi'},
]

// filter: là hàm lọc ra các sản phẩm thỏa điều kiện của arrowFunction
// lọc để tìm sản phẩm có hangSX là Sony 
let arrSony = mangSanPham.filter(sanPham => sanPham.hangSX === 'Sony');

console.log('arrSony', arrSony);

//Find : là hàm tìm ra phần tử thỏa điều kiện arrowFunction. lấy ra sản phẩm đầu tiên tìm thấy. Tìm không thấy thì trả về undefine

let sp5 = mangSanPham.find(sanPham => sanPham.maSP === 11);

if (sp5){
  console.log('sp5',sp5);
} else {
  console.log(sp5);
}

//Bài tập 1: lấy ra sản phẩm có giá trên 2000
//Bài tập 2: Thay đổi tên sản phẩm thứ 10 thành xiaomi mi mix 3

// BT1 
let arrPrice = mangSanPham.filter(sanPham => sanPham.gia >= 2000);
console.log('arrPrice', arrPrice);

//BT2
let sp10 = mangSanPham.find(sanPham => sanPham.maSP === 10);
if(sp10){
  sp10.tenSP = 'xiaomi mi mix 3'
}
console.log('sp10',sp10);

// findIndex: tương tự như find tuy nhiên tìm vị trí phần tử trong mảng nếu không tìm thấy trả về -1

let index = mangSanPham.findIndex(sp => sp.maSP === 9);
if(index !== -1){
  mangSanPham[index].tenSP = 'Điện thoại như cái loz';
  console.log('mangSP', mangSanPham);
  mangSanPham.splice(index,1);
} else {
  console.log('Không tìm thấy sản phẩm', index);
}

//foreach: Dùng để duyệt qua các phần tử của mảng để làm thao tác gì đó

mangSanPham.forEach((sanPham,index)=>{
  sanPham.gia += 1000000;
  console.log('sanPham',sanPham);
})

//.map: là phương thức dùng để thực hiện biến đổi từ mảng này sang mảng khác
// Từ mảng => mảng khác

let htmlCard = mangSanPham.map((sanPham,index)=>{
// tạo ra một object mới để đưa vào mảng htmlCard
  return `
      <div class="col-4">
        <div class="card text-left">
          <img class="card-img-top" src="https://picsum.photos/id/${sanPham.maSP}/300/300" alt="...">
          <div class="card-body">
            <h4 class="card-title">${sanPham.tenSP}</h4>
            <p class="card-text">${sanPham.gia}</p>
          </div>
        </div>
      </div>
  `
});

// từ dây tạo ra vòng lặp foreach để hiện lên giao diện 
htmlCard.forEach((htmlSanPham,index)=>{
  // sanPham.gia +=1000;
  document.querySelector('#danhSachSanPham').innerHTML += htmlSanPham;
})

//reduce: hàm reduce tương tự hàm map tuy nhiên kết quả trả về là 1 giá trị. Từ mảng => 1 giá trị
// let mangSanPham = [
//   {maSP:1,tenSP:'Google pixel xl', gia: 1000, hangSX: 'Google'},
//   {maSP:2,tenSP:'Google pixel xl 2', gia: 2000, hangSX: 'Google'},
//   {maSP:3,tenSP:'Sony xperia xz', gia: 3000, hangSX: 'Sony'},
//   {maSP:4,tenSP:'Sony xperia xzs', gia: 3000, hangSX: 'Sony'},
//   {maSP:5,tenSP:'Iphone X', gia: 2500, hangSX: 'Apple'},
//   {maSP:6,tenSP:'Iphone XS', gia: 1500, hangSX: 'Apple'},
//   {maSP:7,tenSP:'Samsung galaxy s9', gia: 1500, hangSX: 'Samsung'},
//   {maSP:8,tenSP:'Samsung galaxy note 10 Plus', gia: 2000, hangSX: 'Samsung'},
//   {maSP:9,tenSP:'Xiaomi mi 9', gia: 5000, hangSX: 'Xiaomi'},
//   {maSP:10,tenSP:'Xiaomi mi 10', gia: 4500, hangSX: 'Xiaomi'},
// ]
let tongTienSanPham = mangSanPham.reduce((tongTien,sanPham,index)=>{
  return tongTien += sanPham.gia;
},0)

console.log('Tổng tiền', tongTienSanPham );

// BT3: Sử dụng reduce để tạo từ 1 mảng object => 1 chuỗi htmlCard

let stringHTML = mangSanPham.reduce((content,sanPham,index)=>{
  return content += `<tr>
        <td>${sanPham.maSP}</td>
        <td>${sanPham.tenSP}</td>
        <td><img width="50" height="50" src="https://picsum.photos/id/${sanPham.maSP}/300/300" alt="..." ></img></td>
        <td>${sanPham.gia}</td>
        <td>${sanPham.hangSX}</td>
  </tr>`
},'')

document.querySelector('#tblSanPham').innerHTML= stringHTML;

let arrResult = mangSanPham.reduce((result,sanPham,index) =>{
  return [...result, `
        <div class="col-4">
        <div class="card text-left">
          <img class="card-img-top" src="https://picsum.photos/id/${sanPham.maSP}/300/300" alt="...">
          <div class="card-body">
            <h4 class="card-title">${sanPham.tenSP}</h4>
            <p class="card-text">${sanPham.gia}</p>
          </div>
        </div>
      </div>
  `]
},[]);

console.log(arrResult);

//sort:


// let mangSanPham = [
//   {maSP:1,tenSP:'Google pixel xl', gia: 1000, hangSX: 'Google'},
//   {maSP:2,tenSP:'Google pixel xl 2', gia: 2000, hangSX: 'Google'},
//   {maSP:3,tenSP:'Sony xperia xz', gia: 3000, hangSX: 'Sony'},
//   {maSP:4,tenSP:'Sony xperia xzs', gia: 3000, hangSX: 'Sony'},
//   {maSP:5,tenSP:'Iphone X', gia: 2500, hangSX: 'Apple'},
//   {maSP:6,tenSP:'Iphone XS', gia: 1500, hangSX: 'Apple'},
//   {maSP:7,tenSP:'Samsung galaxy s9', gia: 1500, hangSX: 'Samsung'},
//   {maSP:8,tenSP:'Samsung galaxy note 10 Plus', gia: 2000, hangSX: 'Samsung'},
//   {maSP:9,tenSP:'Xiaomi mi 9', gia: 5000, hangSX: 'Xiaomi'},
//   {maSP:10,tenSP:'Xiaomi mi 10', gia: 4500, hangSX: 'Xiaomi'},
// ]
// sắp xếp chuỗi a - z và sắp xếp theo số
mangSanPham.sort((sp, preSP)=>{

  let tenSanPham = sp.tenSP.toUpperCase().trim();

  let tenSPTruoc = preSP.tenSP.toUpperCase().trim();

  if (tenSanPham > tenSPTruoc){
    return 1;
  }
  return -1;
});

console.log('mangSapXepTen',mangSanPham);
// mangSanPham.reverse();
// console.log('mangSXTen',mangSanPham);

// // Sắp xếp theo số
// let sapXepTheoGia = mangSanPham.sort((sp,preSp)=>{

//   return sp.gia - preSp.gia;

// })
// console.log('MangSX theo giá', sapXepTheoGia);