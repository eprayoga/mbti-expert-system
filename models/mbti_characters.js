'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mbti_characters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mbti_characters.init({
    code: DataTypes.STRING,
    character: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'mbti_characters',
  });
  return mbti_characters;
};