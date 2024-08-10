const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CommunityReward = sequelize.define('CommunityReward', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = CommunityReward;
