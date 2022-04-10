'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petsitter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.petsitter.hasMany(models.booking_petsitter)
      models.petsitter.hasMany(models.petsitter_registration)
    }
  }
  petsitter.init({
    name: DataTypes.STRING,
    age : DataTypes.INTEGER,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    photo: DataTypes.STRING,
    location: DataTypes.STRING,
    license: DataTypes.BOOLEAN,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'petsitter',
  });
  return petsitter;
};