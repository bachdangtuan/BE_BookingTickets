'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         */
        await queryInterface.createTable('trips', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            startTime: {
                type: Sequelize.DATE
            },
            fromStation: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'stations',
                    key: "id",
                }
            },
            toStation: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'stations',
                    key: "id",
                }
            },
            price: {
                type: Sequelize.FLOAT
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
        await queryInterface.dropTable('trips');
    }
};
