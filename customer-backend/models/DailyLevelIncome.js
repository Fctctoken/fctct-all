// models/DailyLevelIncome.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DailyLevelIncome = sequelize.define('DailyLevelIncome', {
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
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
});

module.exports = DailyLevelIncome;
