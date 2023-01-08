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
                name: 'Nhà Xe Con Mèo',
                image:'hinh anh 1',
                description:'Nhà xe chở những con mèo béo',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà Xe Angular',
                image:'hinh anh 1',
                description:'Nhà xe chở những con mèo béo',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'Nhà Xe VueJS',
                image:'hinh anh 1',
                description:'Nhà xe chở những con mèo béo',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            }
        ], {});


    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
