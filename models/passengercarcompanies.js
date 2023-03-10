'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class passengerCarCompanies extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // KẾT NỐI BẢNG
        static associate({Trips, Vehicles}) {
            // define association here
            this.belongsToMany(Trips, {through: 'Route', foreignKey: 'company_id', as: 'trip'})
            this.belongsToMany(Vehicles, {through: 'ParkVehicle', foreignKey: 'company_id', as: 'vehicle'})
        }
    }

    passengerCarCompanies.init({
            name: DataTypes.STRING,
            image: DataTypes.STRING,
            address: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            status: {
                type: DataTypes.BOOLEAN,
                default: true
            },
            description: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'passengerCarCompanies',
        }
    )
    ;
    return passengerCarCompanies;
};
