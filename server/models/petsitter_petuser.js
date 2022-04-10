'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petsitter_petuser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  petsitter_petuser.init({
    ect : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'petsitter_petuser',
  });
  return petsitter_petuser;
};