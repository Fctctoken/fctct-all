const { Kyc } = require('../models/kyc');
const { User } = require('../models/User');

// Function to submit KYC data
exports.submitKyc = async (req, res) => {
  try {
    const {
      userId, country, aadharNumber, passportNumber, addressProofType, idProofNumber,
      aadharFrontImage, aadharBackImage, passportImage, selfieImage, addressProofImage
    } = req.body;

    // Check if the user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create new KYC record
    const newKyc = await Kyc.create({
      userId, country, aadharNumber, passportNumber, addressProofType, idProofNumber,
      aadharFrontImage, aadharBackImage, passportImage, selfieImage, addressProofImage
    });

    res.status(201).json({ message: 'KYC submitted successfully', newKyc });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting KYC', error });
  }
};

// Function to approve KYC data
exports.approveKyc = async (req, res) => {
  try {
    const { kycId } = req.body;
    const kyc = await Kyc.findByPk(kycId);

    if (!kyc) {
      return res.status(404).json({ message: 'KYC record not found' });
    }

    kyc.status = 'Approved';
    await kyc.save();

    res.status(200).json({ message: 'KYC approved' });
  } catch (error) {
    res.status(500).json({ message: 'Error approving KYC', error });
  }
};
