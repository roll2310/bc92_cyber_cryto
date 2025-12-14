/** Tính tổng 2 ký số
 * -Đầu vào 
 * +Tạo biến số có 2 ký số
 * -Xử lý
 * +Tách lấy ký số hàng chục
 * +Tách lấy ký số hàng đơn vị
 * -Xuất
 * 
 * +Tính tổng 2 ký số
 */


let soKySo = Number(prompt("Nhap so co 2 ky so:"));
let kySoHangChuc = Math.floor(soKySo / 10);
let KySoHangDonVI = soKySo % 10;
let TongKySo = 0;
TongKySo = kySoHangChuc + KySoHangDonVI;
let result = "Tong 2 ky so la: " + TongKySo ;
console.log(result);