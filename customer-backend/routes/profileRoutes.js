const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const kycController = require('../controllers/kycController');
const authMiddleware = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');
const { check } = require('express-validator');

// User Info - Get user profile information
router.get('/:userId/info', authMiddleware, profileController.getProfileInfo);

// KYC - Submit KYC
router.post(
  '/:userId/kyc',
  [
    authMiddleware,
    check('kycData').isObject().withMessage('KYC data must be an object'),
    validationMiddleware
  ],
  kycController.submitKyc
);

// KYC - Approve KYC
router.post('/kyc/approve', authMiddleware, kycController.approveKyc);

// Change Password
router.put(
  '/:userId/change-password',
  [
    authMiddleware,
    check('currentPassword').isLength({ min: 6 }).withMessage('Current password must be at least 6 characters long'),
    check('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters long'),
    validationMiddleware
  ],
  profileController.changePassword
);

module.exports = router;
