const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DailyCommunityReward = sequelize.define('DailyCommunityReward', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  earnings: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
});

module.exports = DailyCommunityReward;
