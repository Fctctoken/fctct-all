const { Wallet, Staking, WithdrawHistory } = require('../models');
const { Op } = require('sequelize');

// Function to handle deposit
const deposit = async (req, res) => {
  try {
    const { userId, amount, stakingPlanId } = req.body;

    const wallet = await Wallet.findOne({ where: { userId } });

    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }

    wallet.balance += amount;
    await wallet.save();

    await Deposit.create({
      userId,
      amount,
      currency: 'FCTC',
      transactionHash: req.body.transactionHash,
      stakingPlanId,
      status: 'Pending',
    });

    res.json({ message: 'Deposit successful', balance: wallet.balance });
  } catch (error) {
    res.status(500).json({ message: 'Error during deposit', error });
  }
};

// Function to handle withdrawal requests with conditions
const withdraw = async (req, res) => {
  try {
    const { userId, amount } = req.body;

    // Check minimum withdrawal amount
    if (amount < 2000) {
      return res.status(400).json({ message: 'Minimum withdrawal amount is 2000 FCTC' });
    }

    // Get the user's wallet
    const wallet = await Wallet.findOne({ where: { userId } });

    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }

    // Get the total staked amount for the user
    const totalStaked = await Staking.sum('amount', { where: { userId } });

    // Check if the user has staked any coins
    if (!totalStaked) {
      return res.status(400).json({ message: 'No staked coins found for this user' });
    }

    // Calculate the maximum withdrawal limit
    const maxWithdrawalLimit = totalStaked * 5;

    // Check if the withdrawal amount exceeds the maximum limit
    const totalRequestedWithdrawals = await WithdrawHistory.sum('amount', {
      where: {
        userId,
        status: {
          [Op.ne]: 'Rejected'  // Ignore rejected withdrawals
        }
      }
    });

    const totalPossibleWithdrawal = totalRequestedWithdrawals + amount;

    if (totalPossibleWithdrawal > maxWithdrawalLimit) {
      return res.status(400).json({
        message: `You can withdraw a maximum of ${maxWithdrawalLimit} FCTC (5x of your staked coins). Your current withdrawal request would exceed this limit.`
      });
    }

    if (wallet.balance < amount) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    // Create a withdrawal request
    await WithdrawHistory.create({
      userId,
      amount,
      status: 'Pending',
      date: new Date(),
      method: 'FCTC' // This could vary depending on your needs
    });

    res.json({ message: 'Withdrawal request submitted for approval.' });
  } catch (error) {
    res.status(500).json({ message: 'Error during withdrawal request', error });
  }
};

// Function to approve withdrawal requests
const approveWithdrawal = async (req, res) => {
  try {
    const { requestId } = req.body;
    const request = await WithdrawHistory.findOne({ where: { id: requestId, status: 'Pending' } });

    if (!request) {
      return res.status(404).json({ message: 'Withdrawal request not found or already processed' });
    }

    const wallet = await Wallet.findOne({ where: { userId: request.userId } });

    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }

    if (wallet.balance < request.amount) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    wallet.balance -= request.amount;
    await wallet.save();

    request.status = 'Approved';
    await request.save();

    res.json({ message: 'Withdrawal request approved', balance: wallet.balance });
  } catch (error) {
    res.status(500).json({ message: 'Error during approval', error });
  }
};

// Function to reject withdrawal requests
const rejectWithdrawal = async (req, res) => {
  try {
    const { requestId } = req.body;
    const request = await WithdrawHistory.findOne({ where: { id: requestId, status: 'Pending' } });

    if (!request) {
      return res.status(404).json({ message: 'Withdrawal request not found or already processed' });
    }

    request.status = 'Rejected';
    await request.save();

    res.json({ message: 'Withdrawal request rejected' });
  } catch (error) {
    res.status(500).json({ message: 'Error during rejection', error });
  }
};

module.exports = { deposit, withdraw, approveWithdrawal, rejectWithdrawal };
