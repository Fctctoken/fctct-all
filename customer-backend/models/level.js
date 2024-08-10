const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Level = sequelize.define('Level', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  totalIncome: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0
  }
});

module.exports = Level;
