const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Referral = sequelize.define('Referral', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  referredUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  referralLink: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rewardAmount: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0
  }
});

module.exports = Referral;
