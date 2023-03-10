'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Trips}) {
            this.belongsToMany(Trips, {
                through: 'Tickets',
                as: 'trip',
                foreignKey: 'user_id',
            });
        }
    }

    Users.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        numberPhone: DataTypes.STRING || DataTypes.NUMBER_TYPE,
        avatar: DataTypes.STRING,
        type: {
            type: DataTypes.STRING,
            default: 'client'
        }
    }, {
        sequelize,
        modelName: 'users',
    });
    return Users;
};
