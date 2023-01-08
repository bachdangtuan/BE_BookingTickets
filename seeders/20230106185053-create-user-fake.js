'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         */
        await queryInterface.bulkInsert('Users', [
            {
                name: 'John Doe',
                username: 'tuan1',
                email:'tksjkdfg@gmail.com',
                password: '',
                numberPhone: '',
                avatar: '',
                type: 'admin',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'John Doe',
                username: 'tuan2',
                email:'tksjkdfg@gmail.com',
                password: '',
                numberPhone: '',
                avatar: '',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16",
                type: 'client'
            },
            {
                name: 'John Doe',
                username: 'tuan3',
                email:'tksjkdfg@gmail.com',
                password: '',
                numberPhone: '',
                avatar: '',
                type: 'client',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: 'John Doe',
                username: 'tuan4',
                email:'tksjkdfg@gmail.com',
                password: '',
                numberPhone: '',
                avatar: '',
                type: 'client',
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
    }
};
