'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petuser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.petuser.hasMany(models.booking_petuser)
    }
  }
  petuser.init({
    userId: DataTypes.STRING,
    name: DataTypes.STRING,
    age : DataTypes.INTEGER,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    photo: DataTypes.STRING,
    location: DataTypes.STRING,
    careType: DataTypes.STRING,
    howMany: DataTypes.INTEGER,
    content: DataTypes.STRING,
    howBig: DataTypes.STRING,
    petAge : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'petuser',
  });
  return petuser;
};