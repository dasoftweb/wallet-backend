const express = require('express');
const { transactions: ctrl } = require('../../controllers');
const { authenticate } = require('../../middlewares');

const router = express.Router();

router.get('/', authenticate, ctrl.getStatistics);

module.exports = router;
