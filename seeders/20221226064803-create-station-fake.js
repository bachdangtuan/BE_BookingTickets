'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('stations', [
            {
                name: "Bến Xe Giáp Bát",
                address: "Giải Phóng, Giáp Bát, Hoàng Mai, Hà Nội",
                province: "HN",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến xe buýt Long Biên",
                address: "32 Phó Đức Chính, Nguyễn Trung Trực, Ba Đình, Hà Nội",
                province: "HN",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến xe Gia Lâm",
                address: "Xe buýt 03, 22, 34 vào- ra xe Gia Lâm Bến, Long Biên, Hà Nội",
                province: "HN",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến xe buýt Bến xe Kim Mã",
                address: "P. Nguyễn Thái Học, Kim Mã, Đống Đa, Hà Nội",
                province: "HN",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến Xe Khách Mỹ Đình",
                address: "20 Phạm Hùng, Mỹ Đình, Hà Nội",
                province: "HN",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến Xe Nam Anh",
                address: "Thanh Long, Hai Bà Trưng, Hà Nội",
                province: "HN",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến Xe Nước Ngầm",
                address: "Giải Phóng, Hoàng Liệt, Hoàng Mai, Hà Nội",
                province: "HN",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến Xe Trâu Bò Sữa",
                address: "Ngõ 53 Nguyễn Khoái, Bạch Đằng, Hai Bà Trưng, Hà Nội",
                province: "HN",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến Xe Trung Tâm Đà Nẵng",
                address: "Tôn Đức Thắng, Hoà Minh, Liên Chiểu, Đà Nẵng",
                province: "DN",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến xe Đức Long phía nam",
                address: "QL1A, Hoà Phước, Hòa Vang, Đà Nẵng",
                province: "DN",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến xe khách Vĩnh Niệm",
                address: "Vĩnh Niệm, Lê Chân, Hải Phòng",
                province: "HP",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến xe Lạc Long",
                address: "P. Tam Bạc, Minh Khai, Hải Phòng",
                province: "HP",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến Xe Tam Bạc",
                address: "3 P. Tam Bạc, Minh Khai, Hồng Bàng, Hải Phòng",
                province: "HP",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến Xe Thượng Lý",
                address: "Sở Dầu, Hồng Bàng, Hải Phòng",
                province: "HP",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến Xe Buýt Đình Vũ",
                address: "Đ. Đình Vũ, Đông Hải 2, Hải An, Hải Phòng",
                province: "HP",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến Xe Khách Trung Tâm Hòa Bình",
                address: "Trần Hưng Đạo, Hòa Bình, Tp. Hòa Bình, Hòa Bình",
                province: "HB",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến Xe Phía Bắc Thanh Hóa",
                address: "1a Nguyễn Chí Thanh, P. Nam Ngạn, Thành phố Thanh Hóa, Thanh Hoá",
                province: "TH",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến Xe Khách Phía Nam",
                address: "690 Quang Trung, P. Tân Sơn, Thành phố Thanh Hóa, Thanh Hoá",
                province: "TH",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến xe khách Sầm Sơn",
                address: "275 Đ. Lê Lợi, Sơn Thắng, Sầm Sơn, Thanh Hoá",
                province: "TH",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến xe Phía Đông TP. Vinh",
                address: "QL46, Nghi Phú, Thành phố Vinh, Nghệ An",
                province: "NA",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến Xe Khách Thị Xã Cửa Lò",
                address: "35 Sào Nam, Thu Thuỷ, Cửa Lò, Nghệ An",
                province: "NA",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến xe Quế Phong",
                address: " Kim Sơn, Quế Phong, Nghệ An",
                province: "NA",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến xe Đô Lương",
                address: "Yên Sơn, Đô Lương, Nghệ An",
                province: "NA",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Bến xe Phía Bắc Huế",
                address: "132 Lý Thái Tổ, An Hòa, Thành phố Huế, Thừa Thiên Huế",
                province: "HUE",
                createdAt: "2022-12-26 07:06:14",
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
        await queryInterface.bulkDelete('stations', null, {});
    }
};
