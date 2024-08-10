const { DepositHistory } = require('../models/DepositHistory');
const { WithdrawHistory } = require('../models/WithdrawHistory');
const { StakingRecord } = require('../models/StakingRecord');
const { LevelIncome } = require('../models/LevelIncome');
const { Referral } = require('../models/Referral');

exports.getDepositHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const deposits = await DepositHistory.findAll({ where: { userId } });
    res.json(deposits);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving deposit history', error });
  }
};

exports.getWithdrawHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const withdrawals = await WithdrawHistory.findAll({ where: { userId } });
    res.json(withdrawals);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving withdrawal history', error });
  }
};

exports.getStakingRecords = async (req, res) => {
  try {
    const { userId } = req.params;
    const stakingRecords = await StakingRecord.findAll({ where: { userId } });
    res.json(stakingRecords);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving staking records', error });
  }
};

exports.getLevelIncome = async (req, res) => {
  try {
    const { userId } = req.params;
    const levelIncome = await LevelIncome.findAll({ where: { userId } });
    res.json(levelIncome);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving level income', error });
  }
};

exports.getReferralIncome = async (req, res) => {
  try {
    const { userId } = req.params;
    const referrals = await Referral.findAll({ where: { userId } });
    res.json(referrals);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving referral income', error });
  }
};
