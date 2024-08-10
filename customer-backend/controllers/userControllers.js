const { User } = require('../models/User');

exports.getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error });
  }
};

exports.updateWalletAddress = async (req, res) => {
  try {
    const { userId, walletAddress } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.walletAddress = walletAddress;
    user.walletApproved = false; // Reset approval status
    await user.save();
    res.status(200).json({ message: 'Wallet address updated. Awaiting approval.' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating wallet address', error });
  }
};

exports.approveWalletAddress = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.walletApproved = true;
    await user.save();
    res.status(200).json({ message: 'Wallet address approved' });
  } catch (error) {
    res.status(500).json({ message: 'Error approving wallet address', error });
  }
};
