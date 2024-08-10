const { User } = require('../models/User');
const bcrypt = require('bcrypt');

// Get user profile information
exports.getProfileInfo = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId, {
      attributes: ['username', 'email', 'fullName', 'joinedDate', 'walletAddress', 'walletApproved']
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile information', error });
  }
};

// Change user password
exports.changePassword = async (req, res) => {
  try {
    const { userId } = req.params;
    const { currentPassword, newPassword } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare current password with the stored hash
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    
    // Save the new password in the database
    await user.save();

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error changing password', error });
  }
};
