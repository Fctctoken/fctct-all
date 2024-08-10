const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  kycData: {
    type: DataTypes.JSON,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  joinedDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  walletAddress: {
    type: DataTypes.STRING,
    allowNull: true
  },
  walletApproved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = User;
