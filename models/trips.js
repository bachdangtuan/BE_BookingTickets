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

        static associate({Stations, passengerCarCompanies, Users}) {
            // Quan hệ chuyến đi và người, quan hệ nhiều nhiều
            this.belongsToMany(Users, {through: 'Tickets', as: 'user', foreignKey: 'trip_id',});
            //Quan hệ giữa chuyến đi và nhà xe,quan hệ nhiều nhiều
            this.belongsToMany(passengerCarCompanies, {through: 'Route', foreignKey: 'trip_id', as: 'company'});
            //Quan hệ giữa chuyến đi và bến xe điểm đi (1-n)
            this.belongsTo(Stations, {foreignKey: 'fromStation', as: 'from'});
            //Quan hệ giữa chuyến đi và bến xe điểm đến (1-n)
            this.belongsTo(Stations, {foreignKey: 'toStation', as: 'to'});
        }
    }

    Trips.init({
        startTime: DataTypes.DATE || DataTypes.STRING,
        price: DataTypes.FLOAT,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Trips',
    });
    return Trips;
};
