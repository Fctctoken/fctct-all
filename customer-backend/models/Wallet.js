const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Wallet = sequelize.define('Wallet', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  balance: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Wallet;
