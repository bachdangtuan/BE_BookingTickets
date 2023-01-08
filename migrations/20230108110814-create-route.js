'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Route', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            trip_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'trips',
                    key: "id",
                }
            },
            company_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'passengerCarCompanies',
                    key: "id",
                }
            },
            name: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Routes');
    }
};
