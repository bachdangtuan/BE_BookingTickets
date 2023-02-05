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
        await queryInterface.bulkInsert('Trips', [
            {
                fromStation: 1,
                toStation: 4,
                startTime: '2022-12-26 09:06:14',
                price: 40000,
                status: 3,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 1,
                toStation: 4,
                startTime: '2022-12-26 10:06:14',
                price: 20000,
                status: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 1,
                toStation: 4,
                startTime: '2022-12-26 11:06:14',
                price: 40000,
                status: 2,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 1,
                toStation: 4,
                startTime: '2022-12-26 12:06:14',
                price: 40000,
                status: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 1,
                toStation: 4,
                startTime: '2022-12-26 13:06:14',
                price: 40000,
                status: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 1,
                toStation: 4,
                startTime: '2022-12-26 14:06:14',
                price: 40000,
                status: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 1,
                toStation: 4,
                startTime: '2022-12-26 15:06:14',
                price: 40000,
                status: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 1,
                toStation: 4,
                startTime: '2022-12-26 16:06:14',
                price: 40000,
                status: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 2,
                toStation: 4,
                startTime: '2022-12-26 09:06:14',
                price: 40000,
                status: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 2,
                toStation: 4,
                startTime: '2022-12-26 10:06:14',
                price: 40000,
                status: 4,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 2,
                toStation: 4,
                startTime: '2022-12-26 11:06:14',
                price: 40000,
                status: 4,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 2,
                toStation: 4,
                startTime: '2022-12-26 12:06:14',
                price: 40000,
                status: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 2,
                toStation: 4,
                startTime: '2022-12-26 13:06:14',
                price: 40000,
                status: 4,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 2,
                toStation: 4,
                startTime: '2022-12-26 14:06:14',
                price: 40000,
                status: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 2,
                toStation: 4,
                startTime: '2022-12-26 14:06:14',
                price: 40000,
                status: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 2,
                toStation: 4,
                startTime: '2022-12-26 15:06:14',
                price: 40000,
                status: 1,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 2,
                toStation: 4,
                startTime: '2022-12-26 16:06:14',
                price: 40000,
                status: 2,
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            }, {
                fromStation: 2,
                toStation: 4,
                startTime: new Date(),
                price: 40000,
                status: 2,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },     {
                fromStation: 1,
                toStation: 4,
                startTime: new Date(),
                price: 50000,
                status: 1,
                createdAt: new Date(),
                updatedAt: "2022-12-28 07:06:16"
            },

        ], {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Trips', null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
