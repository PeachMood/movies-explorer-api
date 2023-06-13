const express = require('express');

const router = express.Router();

const controller = require('../controllers/auth');

router.post('/signin', controller.login);
router.post('/signup', controller.register);
router.post('/signout', controller.logout);

module.exports = router;
