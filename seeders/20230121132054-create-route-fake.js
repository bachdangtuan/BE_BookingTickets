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
        await queryInterface.bulkInsert('Route', [
            {
                trip_id: 1,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 2,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 3,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 4,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 5,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 6,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 7,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 8,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 9,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 10,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 11,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 12,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 13,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 4,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 14,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 15,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 16,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 17,
                company_id: 1,
                name: 'Nội thành',
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                trip_id: 4,
                company_id: 2,
                name: 'Nội thành',
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
         * await queryInterface.bulkDelete('Route', null, {});
         */
        await queryInterface.bulkDelete('Route', null, {});
    }
};
