const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/generate-otp', authController.generateOTP);
router.post('/verify-otp', authController.verifyOTP);

module.exports = router;
