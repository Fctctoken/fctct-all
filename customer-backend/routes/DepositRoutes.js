const express = require('express');
const router = express.Router();
const depositController = require('../controllers/depositController');
const authMiddleware = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const { check } = require('express-validator');

// Route to handle deposit creation
router.post(
  '/',
  [
    authMiddleware,
    check('userId').isInt().withMessage('User ID must be an integer'),
    check('amount').isFloat({ gt: 2000 }).withMessage('Amount must be at least 2000 FCTC'),
    check('currency').isString().withMessage('Currency must be a string'),
    check('transactionHash').isString().withMessage('Transaction Hash is required'),
    validationMiddleware
  ],
  depositController.createDeposit
);

// Route for admin to approve deposits
router.post(
  '/admin/approve',
  [
    adminMiddleware,
    check('depositId').isInt().withMessage('Deposit ID must be an integer'),
    validationMiddleware
  ],
  depositController.approveDeposit
);

// Route for admin to reject deposits
router.post(
  '/admin/reject',
  [
    adminMiddleware,
    check('depositId').isInt().withMessage('Deposit ID must be an integer'),
    validationMiddleware
  ],
  depositController.rejectDeposit
);

module.exports = router;
