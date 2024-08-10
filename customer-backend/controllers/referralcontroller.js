const { Referral } = require('../models/Referral');
const { User } = require('../models/User');

exports.getReferralLink = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const referralLink = `https://example.com/register/${user.id}`;
    res.json({ referralLink });
  } catch (error) {
    res.status(500).json({ message: 'Error generating referral link', error });
  }
};

exports.getReferralData = async (req, res) => {
  try {
    const { userId } = req.params;
    const referrals = await Referral.findAll({
      where: { userId },
      include: [{ model: User, as: 'referredUser' }]
    });

    res.json(referrals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching referral data', error });
  }
};
