###  Server + Dev
Yarn start - product
Yarn dev - nodemon
Backend + Server: Ubuntu, Nginx, MySql, ExpressJS
FrontEnd : 
    + Trang Quản trị: Angular 
    + Trang Client: VueJS

### Phân tích bài toán và tạo databases

#### Tạo Chuyến Đi

1 chuyến đi sẽ có nơi xuất phát và nơi đến (mối quan hệ 1 nhiều giữa bảng chuyến đi và bảng bến xe)
Cùng Chuyến đi: Đi từ Hà Nội đến Thanh Hóa 
 - Bến xe mỹ đình đến Bến xe Thanh Hóa 
 - Bến xe giáp bát đến bến xe thanh hóa
 - Bến xe kim mã đến bến xe thọ xuân

#### Tạo Nhà xe
Nhiều nhà xe có 1 chuyến đi (mối quan hệ nhiều - 1 giữa bảng nhà xe và bảng chuyến đi)
Ví dụ: Cùng chuyến đi từ Hà Nội đến Thanh Hóa có 3 nhà xe

#### Tạo Xe
1 nhà xe có nhiều loại xe (mối quan hệ 1 nhiều giữa bảng nhà xe và bảng xe)
Ví dụ: Nhà xe Thành Long : có 10 xe limouse 9 chỗ

#### Tạo ghế

1 xe loại xe có nhiều ghế