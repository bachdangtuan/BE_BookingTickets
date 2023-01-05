'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Stations extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Trips}) {
            // define association here 1 station thì có nhiều chuyến đi
            this.hasMany(Trips, {foreignKey: 'fromStation', as: 'from'});
            this.hasMany(Trips, {foreignKey: 'toStation', as: 'to'});
        }
    }

    Stations.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        address: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        province: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        modelName: 'Stations',
    });
    return Stations;
};