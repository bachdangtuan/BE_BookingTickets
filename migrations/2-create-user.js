'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         */
        await queryInterface.createTable('users',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: {
                    type: Sequelize.STRING
                },
                email: {
                    type: Sequelize.STRING
                },
                avatar: {
                    type: Sequelize.STRING
                },
                username: {
                    type: Sequelize.STRING
                },
                password: {
                    type: Sequelize.STRING
                },
                numberPhone: {
                    type: Sequelize.STRING || Sequelize.NUMBER
                },
                type: {
                    type: Sequelize.STRING,
                    defaultValue: 'client'
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
        await queryInterface.dropTable('Users');
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};
