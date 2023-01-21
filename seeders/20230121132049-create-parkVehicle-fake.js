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
        await queryInterface.bulkInsert('ParkVehicle', [
            {
                vehicle_id: 1,
                company_id: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                vehicle_id: 2,
                company_id: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                vehicle_id: 3,
                company_id: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                vehicle_id: 4,
                company_id: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                vehicle_id: 5,
                company_id: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                vehicle_id: 6,
                company_id: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                vehicle_id: 7,
                company_id: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                vehicle_id: 8,
                company_id: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                vehicle_id: 9,
                company_id: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            }, {
                vehicle_id: 10,
                company_id: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            }, {
                vehicle_id: 11,
                company_id: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            }, {
                vehicle_id: 12,
                company_id: 1,
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
        await queryInterface.bulkDelete('ParkVehicle', null, {});
    }
};
