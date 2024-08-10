const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Staking = sequelize.define('Staking', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  stakingPlanId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'StakingPlans',
      key: 'id',
    },
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Pending',
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  endDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
});

module.exports = Staking;
