'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Vehicles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({passengerCarCompanies}) {
            this.belongsToMany(passengerCarCompanies, {
                through: 'ParkVehicle',
                foreignKey: 'vehicle_id',
                as: 'companies'
            })
        }
    }

    Vehicles.init({
        name: DataTypes.STRING,
        images: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Vehicles',
    });
    return Vehicles;
};
