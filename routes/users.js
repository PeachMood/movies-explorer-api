const express = require('express');

const router = express.Router();

const controller = require('../controllers/users');

router.get('/me', controller.getCurrentUser);
router.patch('/me', controller.updateCurrentUser);

module.exports = router;
