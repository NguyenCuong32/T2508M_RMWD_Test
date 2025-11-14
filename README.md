🚀 Dự án React: FPT Aptech Website Clone (Cơ bản)
Đây là một dự án ReactJS được xây dựng dựa trên bài thực hành "Frontend Web Development with React" (Set 03)  và được mở rộng thêm nhiều tính năng.

Dự án này ban đầu được thiết kế để hiển thị các đối tượng học viên và các môn học. Sau đó, dự án đã được nâng cấp thành một ứng dụng đa trang (SPA) hoàn chỉnh với các trang bổ sung, CSS module cho từng component, và các hiệu ứng tương tác.


✨ Tính năng chính
Đa trang (React Router): Ứng dụng sử dụng react-router-dom để quản lý điều hướng giữa các trang:

Trang chủ (/)

Giới thiệu (/about)

Chương trình học (/products)

Đặt lịch (/booking)

Địa điểm (/locations)

Đăng nhập (/signin) & Đăng ký (/signup)


Tải dữ liệu từ JSON: Dữ liệu cho các đối tượng học viên và các khóa học  được tải động từ các tệp .json bên ngoài.


Kiến trúc Component: Dự án được chia thành các component tái sử dụng (như Header, Footer, ProductCard) và các component trang (như Home, Products).

CSS Modules: Mỗi component và trang đều có tệp .module.css riêng biệt. Điều này đảm bảo CSS của một thành phần không ảnh hưởng (scoped) và không xung đột với CSS của thành phần khác.

Hiệu ứng tương tác (Animations):

Các thẻ (card) có hiệu ứng "nâng lên" (lift) mượt mà khi di chuột vào.

Các trang có hiệu ứng "fade-in" nhẹ nhàng khi tải.

Form với State (useState): Trang "Booking" sử dụng useState để xử lý việc gửi form và hiển thị thông báo "Booking Thành công" cho người dùng.

🛠️ Công nghệ sử dụng
ReactJS (v18+)

React Router DOM (v6+)

CSS Modules (Tích hợp sẵn trong Create React App)

JavaScript (ES6+)

JSON

📂 Cấu trúc thư mục
/fpt-aptech-project
  |-- /src
  |   |-- /components   (Các thành phần tái sử dụng: Header, Footer, ProductCard...)
  |   |-- /data         (Các tệp JSON dữ liệu: objects.json, subjects.json...)
  |   |-- /pages        (Các component trang: Home, About, Products...)
  |   |-- App.js        (Quản lý layout chính và các tuyến đường)
  |   |-- index.js      (Điểm vào của ứng dụng, bọc <BrowserRouter>)
  |   `-- index.css     (CSS toàn cục và định nghĩa @keyframes)
  |
  |-- README.md
  `-- package.json
🚀 Cài đặt và Chạy dự án
Clone repository (hoặc tải mã nguồn về)

Bash

git clone [URL_CUA_BAN]
Đi vào thư mục dự án

Bash

cd fpt-aptech-project
Cài đặt các dependencies (Bạn cần đảm bảo đã cài react-router-dom)

Bash

npm install
Chạy ứng dụng

Bash

npm start
Ứng dụng sẽ tự động mở trong trình duyệt của bạn tại http://localhost:3000.