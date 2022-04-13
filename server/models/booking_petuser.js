'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking_petuser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.booking_petuser.belongsTo(models.petuser,{foreignKey: 'petuser_id'})
    }
  }
  booking_petuser.init({
    location: DataTypes.STRING,
    isBooking : DataTypes.BOOLEAN,
    startdate: DataTypes.STRING,
    enddate : DataTypes.STRING,
    days : DataTypes.STRING,
    petuser_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'booking_petuser',
  });
  return booking_petuser;
};