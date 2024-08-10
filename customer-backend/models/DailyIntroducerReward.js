const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DailyIntroducerReward = sequelize.define('DailyIntroducerReward', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  stakeAmount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  reward: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
});

module.exports = DailyIntroducerReward;
