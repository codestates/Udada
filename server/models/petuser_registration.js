'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petuser_registration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.petuser_registration.belongsTo(models.petuser,{foreignKey: 'petuser_id'})
    }
  }
  petuser_registration.init({
    location: DataTypes.STRING,
    date: DataTypes.STRING,
    payment: DataTypes.INTEGER,
    content: DataTypes.STRING,
    petuser_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'petuser_registration',
  });
  return petuser_registration;
};