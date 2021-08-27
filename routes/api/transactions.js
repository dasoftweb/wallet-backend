const express = require('express');
const { transactions: ctrl } = require('../../controllers');
const { authenticate } = require('../../middlewares');

const router = express.Router();

router.get('/', authenticate, ctrl.listTransactions);

router.get('/:transactionId', authenticate, ctrl.getTransactionById);

router.post('/', express.json(), authenticate, ctrl.addTransaction);

router.delete('/:transactionId', authenticate, ctrl.removeTransaction);

router.patch('/:transactionId', authenticate, ctrl.updateTransaction);

module.exports = router;
