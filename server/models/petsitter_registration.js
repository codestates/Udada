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
    location: DataTypes.INTEGER,
    date: DataTypes.DATE,
    payment: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'petsitter_registration',
  });
  return petsitter_registration;
};