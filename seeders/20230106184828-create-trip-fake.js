'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         */
        await queryInterface.bulkInsert('Trips',
            [
                {
                    fromStation: 1,
                    toStation: 3,
                    startTime: '2022-12-26 07:06:14',
                    price: 200,
                    createdAt: "2022-12-26 07:06:14",
                    updatedAt: "2022-12-28 07:06:16"
                },
                {
                    fromStation: 1,
                    toStation: 5,
                    startTime: '2022-12-26 07:06:14',
                    price: 200,
                    createdAt: "2022-12-26 07:06:14",
                    updatedAt: "2022-12-28 07:06:16"
                },
                {
                    fromStation: 2,
                    toStation: 3,
                    startTime: '2022-12-26 07:06:14',
                    price: 200,
                    createdAt: "2022-12-26 07:06:14",
                    updatedAt: "2022-12-28 07:06:16"
                },
                {
                    fromStation: 1,
                    toStation: 4,
                    startTime: '2022-12-26 07:06:14',
                    price: 200,
                    createdAt: "2022-12-26 07:06:14",
                    updatedAt: "2022-12-28 07:06:16"
                },
                {
                    fromStation: 1,
                    toStation: 4,
                    startTime: '2022-12-26 07:06:14',
                    price: 200,
                    createdAt: "2022-12-26 07:06:14",
                    updatedAt: "2022-12-28 07:06:16"
                }


            ]

            , {});
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
