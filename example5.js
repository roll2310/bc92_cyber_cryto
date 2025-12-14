/** Tính chu vi
    * -Đầu vào  
    * +Tạo biến chiều dài, rộng
    * -Xử lý
    * +Tính chu vi = (dài + rộng) * 2
    * +Tính diện tích = dài * rộng
    * -Xuất
    * +In ra chu vi, diện tích 
 */

let Dai = Number(prompt("Nhap chieu dai :"));
let Rong = Number(prompt("Nhap chieu rong :"));

let ChuVi = 0;
ChuVi = (Dai + Rong) * 2;
let DienTich = 0;
DienTich = Dai * Rong;      
let result = "Chu vi hinh chu nhat la: " + ChuVi ;
console.log(result);
let result1 = "Dien tich hinh chu nhat la: " + DienTich ;
console.log(result1);