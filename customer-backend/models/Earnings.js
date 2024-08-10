const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Earnings = sequelize.define('Earnings', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  stakingBonus: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  introducerReward: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  communityReward: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
});

module.exports = Earnings;
