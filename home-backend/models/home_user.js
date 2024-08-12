module.exports = (sequelize, DataTypes) => {
    const HomeUser = sequelize.define('HomeUser', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kyc_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      wallet_info: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date_of_joining: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      referral_info: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      plan_selected: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transaction_history: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      fctc_wallet_info: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      tokens_deposited: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      tokens_withdrawn: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      }
    }, {
      timestamps: false,
      tableName: 'home_users'
    });
  
    return HomeUser;
  };
  