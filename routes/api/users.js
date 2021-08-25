const express = require('express');
const { users: ctrl } = require('../../controllers');
const { authenticate } = require('../../middlewares');

const router = express.Router();

router.post('/signup', express.json(), ctrl.signup);

router.post('/login', express.json(), ctrl.login);

router.post('/logout', authenticate, ctrl.logout);

router.get('/current', express.json(), authenticate, ctrl.getCurrentUser);

router.patch('/', express.json(), authenticate, ctrl.updateUser);

router.get('/verify/:verificationToken', ctrl.verify);

router.post('/verify/', ctrl.repeatVerify);

module.exports = router;
