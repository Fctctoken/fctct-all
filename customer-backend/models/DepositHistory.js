const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DepositHistory = sequelize.define('DepositHistory', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  method: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  transactionId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = DepositHistory;
