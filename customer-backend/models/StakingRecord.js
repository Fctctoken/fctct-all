const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const StakingRecord = sequelize.define('StakingRecord', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = StakingRecord;
