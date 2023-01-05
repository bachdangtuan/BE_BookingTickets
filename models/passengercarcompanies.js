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
        static associate({Trips,Vehicle}) {
            // define association here
            this.belongsTo(Trips, {foreignKey: 'trip_id', as: 'lo_trinh'});
            this.hasMany(Vehicle, {foreignKey: 'passengerCarCompanies_id'})
        }
    }

    passengerCarCompanies.init({
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'passengerCarCompanies',
    });
    return passengerCarCompanies;
};