'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         */
        await queryInterface.createTable('Tickets', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            trip_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Trips',
                    key: "id",
                }
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: "id",
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         */
        await queryInterface.dropTable('Tickets');
    }
};
