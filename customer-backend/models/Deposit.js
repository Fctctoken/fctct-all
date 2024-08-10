const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Deposit = sequelize.define('Deposit', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  },
  transactionHash: {
    type: DataTypes.STRING,
    allowNull: false
  },
  screenshot: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Pending'  // Pending, Approved, Rejected
  }
});

module.exports = Deposit;
