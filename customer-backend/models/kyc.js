const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Kyc = sequelize.define('Kyc', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  aadharNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  passportNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  addressProofType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idProofNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  aadharFrontImage: {
    type: DataTypes.STRING,
    allowNull: true
  },
  aadharBackImage: {
    type: DataTypes.STRING,
    allowNull: true
  },
  passportImage: {
    type: DataTypes.STRING,
    allowNull: true
  },
  selfieImage: {
    type: DataTypes.STRING,
    allowNull: false
  },
  addressProofImage: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Pending'
  }
});

module.exports = Kyc;
