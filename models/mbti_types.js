'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mbti_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mbti_types.init({
    code: DataTypes.STRING,
    type: DataTypes.STRING,
    information: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'mbti_types',
  });
  return mbti_types;
};