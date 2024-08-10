const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LevelIncome = sequelize.define('LevelIncome', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  income: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = LevelIncome;
