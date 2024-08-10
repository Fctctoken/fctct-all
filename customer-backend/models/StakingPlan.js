const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const StakingPlan = sequelize.define('StakingPlan', {
  days: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bonusPercentage: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = StakingPlan;
