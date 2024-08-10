const { Team } = require('../models/Team');

// Function to get referral data for a team member
const getReferral = async (req, res) => {
  try {
    const { userId } = req.params;
    const referralData = await Team.findAll({ where: { referrerId: userId } }); // Assuming `referrerId` field exists
    if (referralData) {
      res.json(referralData);
    } else {
      res.status(404).json({ message: 'No referral data found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving referral data', error });
  }
};

// Function to get level data for a team member
const getLevel = async (req, res) => {
  try {
    const { userId } = req.params;
    const levelData = await Team.findAll({ where: { userId } }); // Assuming `userId` field exists
    if (levelData) {
      res.json(levelData);
    } else {
      res.status(404).json({ message: 'No level data found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving level data', error });
  }
};

module.exports = { getReferral, getLevel };
