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
                name: "Ben xe viet nam",
                address: "My dinh viet nam",
                province: "HCM",
                createdAt: "2022-12-26 07:06:14",
                updatedAt: "2022-12-28 07:06:16"
            },
            {
                name: "Ben xe Da Nag",
                address: "My dinh viet nam",
                province: "DN",
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
