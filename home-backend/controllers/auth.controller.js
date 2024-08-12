const crypto = require('crypto');
const twilio = require('twilio');
const db = require('../models');
const HomeUser = db.HomeUser;

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Register User
exports.register = async (req, res) => {
  try {
    const { full_name, email, phone_number, password } = req.body;
    const newUser = await HomeUser.create({ full_name, email, phone_number, password });
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error });
  }
};

// OTP Generation and Storage
exports.generateOTP = async (req, res) => {
  const { phone_number } = req.body;
  try {
    const otp = crypto.randomInt(100000, 999999).toString();
    const expiry = Date.now() + 10 * 60 * 1000;

    await HomeUser.update({ otp, otpExpiry: expiry }, { where: { phone_number } });

    await twilioClient.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone_number
    });

    res.json({ message: 'OTP sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error generating OTP', error });
  }
};

// OTP Verification
exports.verifyOTP = async (req, res) => {
  const { phone_number, otp } = req.body;
  try {
    const user = await HomeUser.findOne({ where: { phone_number } });

    if (!user) return res.status(404).json({ message: 'User not found' });

    if (user.otp !== otp) return res.status(400).json({ message: 'Invalid OTP' });

    if (Date.now() > user.otpExpiry) return res.status(400).json({ message: 'OTP expired' });

    await HomeUser.update({ otp: null, otpExpiry: null }, { where: { phone_number } });

    res.json({ message: 'OTP verified successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error verifying OTP', error });
  }
};
