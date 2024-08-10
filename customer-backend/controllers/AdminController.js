const { Deposit, WithdrawHistory, Wallet } = require('../models');

// Approve a deposit
exports.approveDeposit = async (req, res) => {
  try {
    const { depositId } = req.body;
    const deposit = await Deposit.findByPk(depositId);

    if (!deposit) {
      return res.status(404).json({ message: 'Deposit not found' });
    }

    if (deposit.status !== 'Pending') {
      return res.status(400).json({ message: 'Deposit has already been processed' });
    }

    const wallet = await Wallet.findOne({ where: { userId: deposit.userId } });
    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }

    wallet.balance += deposit.amount;
    await wallet.save();

    deposit.status = 'Approved';
    await deposit.save();

    res.status(200).json({ message: 'Deposit approved', deposit, wallet });
  } catch (error) {
    res.status(500).json({ message: 'Error approving deposit', error });
  }
};

// Reject a deposit
exports.rejectDeposit = async (req, res) => {
  try {
    const { depositId } = req.body;
    const deposit = await Deposit.findByPk(depositId);

    if (!deposit) {
      return res.status(404).json({ message: 'Deposit not found' });
    }

    if (deposit.status !== 'Pending') {
      return res.status(400).json({ message: 'Deposit has already been processed' });
    }

    deposit.status = 'Rejected';
    await deposit.save();

    res.status(200).json({ message: 'Deposit rejected', deposit });
  } catch (error) {
    res.status(500).json({ message: 'Error rejecting deposit', error });
  }
};

// Approve a withdrawal
exports.approveWithdrawal = async (req, res) => {
  try {
    const { withdrawId } = req.body;
    const withdrawal = await WithdrawHistory.findByPk(withdrawId);

    if (!withdrawal) {
      return res.status(404).json({ message: 'Withdrawal request not found' });
    }

    if (withdrawal.status !== 'Pending') {
      return res.status(400).json({ message: 'Withdrawal request has already been processed' });
    }

    const wallet = await Wallet.findOne({ where: { userId: withdrawal.userId } });
    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }

    if (wallet.balance < withdrawal.amount) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    wallet.balance -= withdrawal.amount;
    await wallet.save();

    withdrawal.status = 'Approved';
    await withdrawal.save();

    res.status(200).json({ message: 'Withdrawal approved', withdrawal, wallet });
  } catch (error) {
    res.status(500).json({ message: 'Error approving withdrawal', error });
  }
};

// Reject a withdrawal
exports.rejectWithdrawal = async (req, res) => {
  try {
    const { withdrawId } = req.body;
    const withdrawal = await WithdrawHistory.findByPk(withdrawId);

    if (!withdrawal) {
      return res.status(404).json({ message: 'Withdrawal request not found' });
    }

    if (withdrawal.status !== 'Pending') {
      return res.status(400).json({ message: 'Withdrawal request has already been processed' });
    }

    withdrawal.status = 'Rejected';
    await withdrawal.save();

    res.status(200).json({ message: 'Withdrawal rejected', withdrawal });
  } catch (error) {
    res.status(500).json({ message: 'Error rejecting withdrawal', error });
  }
};
