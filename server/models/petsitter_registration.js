'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petsitter_registration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.petsitter_registration.belongsTo(models.petsitter,{foreignKey: 'petsitter_id'})
    }
  }
  petsitter_registration.init({
    location: DataTypes.STRING,
    startdate: DataTypes.STRING,
    enddate : DataTypes.STRING,
    days : DataTypes.STRING,
    payment: DataTypes.INTEGER,
    content: DataTypes.STRING,
    petsitter_id : DataTypes.INTEGER,
    careType: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'petsitter_registration',
  });
  return petsitter_registration;
};