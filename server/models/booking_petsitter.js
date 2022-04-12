'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking_petsitter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.booking_petsitter.belongsTo(models.petsitter,{foreignKey: 'petsitter_id'})
    }
  }
  booking_petsitter.init({
    location: DataTypes.STRING,
    isBooking : DataTypes.BOOLEAN,
    date: DataTypes.STRING,
    petsitter_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'booking_petsitter',
  });
  return booking_petsitter;
};