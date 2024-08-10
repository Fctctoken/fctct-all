const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');
const authMiddleware = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const { check } = require('express-validator');

// Route for deposit
router.post(
  '/deposit',
  [
    authMiddleware,
    check('userId').isInt().withMessage('User ID must be an integer'),
    check('amount').isFloat({ gt: 0 }).withMessage('Amount must be a positive number'),
    validationMiddleware,
  ],
  walletController.deposit
);

// Route for withdrawal with conditions
router.post(
  '/withdraw',
  [
    authMiddleware,
    check('userId').isInt().withMessage('User ID must be an integer'),
    check('amount').isFloat({ gt: 2000 }).withMessage('Amount must be at least 2000 FCTC'),
    validationMiddleware,
  ],
  walletController.withdraw
);

// Routes for admin to approve or reject withdrawal requests
router.post(
  '/admin/approve-withdrawal',
  [
    adminMiddleware,
    check('requestId').isInt().withMessage('Request ID must be an integer'),
    validationMiddleware,
  ],
  walletController.approveWithdrawal
);

router.post(
  '/admin/reject-withdrawal',
  [
    adminMiddleware,
    check('requestId').isInt().withMessage('Request ID must be an integer'),
    validationMiddleware,
  ],
  walletController.rejectWithdrawal
);

module.exports = router;
