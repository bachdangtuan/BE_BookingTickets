'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         */
        await queryInterface.bulkInsert('passengerCarCompanies', [
            {
                name: 'Nhà Xe Văn Minh',
                image: 'https://tintucxeco.net/wp-content/uploads/2019/01/nha-xe-van-minh-nghe-an-ha-noi.png',
                description: 'Nhà xe Văn Minh ra đời năm 2007, tại Nghệ An, chỉ một thời gian ngắn sau đó người ta đã thi nhau tìm đến nó mỗi khi có nhu cầu đi tuyến Hà Nội – Vinh ( Nghệ An), Hà Nội – Hà Tĩnh. Đến cuối năm 2016, Văn Minh tăng lên 24 xe giường nằm chất lượng cao.',
                address: 'Số 170A Trần Duy Hưng, Q. Cầu Giấy, Hà Nội.',
                phone: '093423455',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà Xe Phương Trang',
                image: 'https://cdn1.nhatrangtoday.vn/images/photos/xe-phuong-trang-top.jpg',
                description: 'Công ty Phương Trang được thành lập vào ngày 15 tháng 11 năm 2002 với hoạt động kinh doanh chính trong lĩnh vực mua bán xe ô tô, vận tải hành khách, bất động sản và kinh doanh dịch vụ.',
                address: '272 Đề Thám, Phạm Ngũ Lão, Quận 1, TP.HCM',
                phone: '093423455',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Xe khách Tuấn Hưng',
                image: 'https://tintucxeco.net/wp-content/uploads/2020/04/nha-xe-tuan-hung.jpg',
                description: 'Xe khách Tuấn Hưng là hãng xe lớn, có kinh nghiệm hoạt động lâu năm trong nghề. Hãng xe khách này có lịch trình chuyên chạy tuyến Sài Gòn đến các tỉnh miền Tây. Phải kể đến như: Bạc Liêu, Cần Thơ, Cà Mau, Năm Căn.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '02839636363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Xe khách Limousine Minh Trí',
                image: 'https://limody.vn/wp-content/uploads/2020/04/xe-Minh-Tri-limousine-1.jpg',
                description: 'Là thương hiệu xe khách tiên phong trong việc đưa dòng xe Limousine cao cấp vào hoạt động, Minh Trí Limousine là lựa chọn hàng đầu cho các khách du lịch khi có nhu cầu đi tuyến Sài Gòn - Đà Lạt hiện nay.',
                address: 'Khu C30 Lô B5, 230 Thành Thái, Phường 14, Quận 10, TP.HCM',
                phone: '1900.63.68.96',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: ' Nhà xe Hùng Cường',
                image: 'https://timchanhxe.com/wp-content/uploads/2021/01/nha-xe-hung-cuong-1.jpg',
                description: 'Nhà xe Hùng cường là hãng xe khách Sài Gòn chất lượng cao chạy tuyến Sài Gòn - Châu Đốc An Giang.',
                address: '48 Phó Cơ Điều, Phường 12, Quận 5, TP.HCM',
                phone: '0283 857 2624',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Xe khách Limousine Minh Trí',
                image: 'https://limody.vn/wp-content/uploads/2020/04/xe-Minh-Tri-limousine-1.jpg',
                description: 'Là thương hiệu xe khách tiên phong trong việc đưa dòng xe Limousine cao cấp vào hoạt động, Minh Trí Limousine là lựa chọn hàng đầu cho các khách du lịch khi có nhu cầu đi tuyến Sài Gòn - Đà Lạt hiện nay.',
                address: 'Khu C30 Lô B5, 230 Thành Thái, Phường 14, Quận 10, TP.HCM',
                phone: '1900.63.68.96',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà xe Huệ Nghĩa',
                image: 'https://static.vexere.com/production/images/1648100143839.jpeg',
                description: 'Huệ Nghĩa là hãng xe khách Sài Gòn chuyên cung cấp các dịch vụ vận tải đi nhiều tỉnh thành khác nhau từ TP.HCM.',
                address: '85 Đường Lý Chiêu Hoàng, Phường 10, Quận 6, TP.HCM',
                phone: '028 3963 6363',
                email: 'test1@gmail.com',
                createdAt: "2022-12-26 07:06:14",
                status: false,
                updatedAt: "2022-12-28 07:06:16"
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('passengerCarCompanies', null, {});
    }
};
