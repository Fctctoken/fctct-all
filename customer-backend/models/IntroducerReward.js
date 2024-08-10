const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const IntroducerReward = sequelize.define('IntroducerReward', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = IntroducerReward;
