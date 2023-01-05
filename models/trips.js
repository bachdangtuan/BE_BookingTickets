'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Trips extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Stations, passengerCarCompanies,Ticket}) {
            // define association here
            this.belongsTo(Stations, {foreignKey: 'fromStation', as: 'from'});
            this.belongsTo(Stations, {foreignKey: 'toStation', as: 'to'});
            this.hasMany(passengerCarCompanies, {foreignKey: 'trip_id', as: 'lo_trinh'});
            this.hasMany(Ticket, {foreignKey: 'trip_id'});
        }
    }

    Trips.init({
        startTime: DataTypes.DATE,
        price: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'Trips',
    });
    return Trips;
};