'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Tickets', [
      {
        trip_id: 1,
        user_id: 1,
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
     */
    await queryInterface.bulkDelete('Tickets', null, {});
  }
};
