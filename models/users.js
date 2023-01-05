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
        static associate({Ticket}) {
            // define association here
            this.hasMany(Ticket,{foreignKey:'user_id'})
        }
    }

    Users.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        numberPhone: DataTypes.STRING || DataTypes.NUMBER_TYPE,
        avatar: DataTypes.STRING,
        sex: DataTypes.STRING,
        type: {
            type: DataTypes.STRING,
            default: 'client'
        }
    }, {
        sequelize,
        modelName: 'Users',
    });
    return Users;
};