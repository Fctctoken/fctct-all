const crypto = require('crypto');
const twilio = require('twilio');
const User = require('../models/user.model');

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// OTP Generation and Storage
exports.generateOTP = async (req, res) => {
  const { mobile } = req.body;
  try {
    const otp = crypto.randomInt(100000, 999999).toString(); // Generate a 6-digit OTP
    const expiry = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

    // Store OTP and expiry in the user's record
    await User.update({ otp, otpExpiry: expiry }, { where: { mobile } });

    // Send OTP via SMS
    await twilioClient.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: mobile
    });

    res.json({ message: 'OTP sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error generating OTP', error });
  }
};

// OTP Verification
exports.verifyOTP = async (req, res) => {
  const { mobile, otp } = req.body;
  try {
    const user = await User.findOne({ where: { mobile } });

    if (!user) return res.status(404).json({ message: 'User not found' });

    if (user.otp !== otp) return res.status(400).json({ message: 'Invalid OTP' });

    if (Date.now() > user.otpExpiry) return res.status(400).json({ message: 'OTP expired' });

    // Clear OTP after successful verification
    await User.update({ otp: null, otpExpiry: null }, { where: { mobile } });

    res.json({ message: 'OTP verified successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error verifying OTP', error });
  }
};
