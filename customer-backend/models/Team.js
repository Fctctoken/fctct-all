const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Team = sequelize.define('Team', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  referrerId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Team;
