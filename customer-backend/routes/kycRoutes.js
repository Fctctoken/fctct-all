const express = require('express');
const router = express.Router();
const kycController = require('../controllers/kycController');
const authMiddleware = require('../middlewares/authMiddleware');
const { check } = require('express-validator');

// Route to submit KYC
router.post('/submit', [
  authMiddleware,
  check('userId').isInt().withMessage('User ID must be an integer'),
  check('country').isString().withMessage('Country must be a string'),
  check('addressProofType').isString().withMessage('Address proof type must be a string'),
  check('idProofNumber').isString().withMessage('ID proof number must be a string'),
  check('selfieImage').isString().withMessage('Selfie image must be a string'),
  check('addressProofImage').isString().withMessage('Address proof image must be a string')
], kycController.submitKyc);

// Route to approve KYC
router.post('/approve', authMiddleware, kycController.approveKyc);

module.exports = router;
