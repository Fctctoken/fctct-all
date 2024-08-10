const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DailyStakingBonus = sequelize.define('DailyStakingBonus', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  bonusAmount: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = DailyStakingBonus;
