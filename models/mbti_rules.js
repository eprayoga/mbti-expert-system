'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mbti_rules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mbti_rules.init({
    id: DataTypes.INTEGER,
    type_code: DataTypes.STRING,
    character_code: DataTypes.STRING,
    probability: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'mbti_rules',
  });
  return mbti_rules;
};