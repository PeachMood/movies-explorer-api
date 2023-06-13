const express = require('express');

const router = express.Router();

const { validateUpdateCurrentUser } = require('../middlewares/validators/userValidator');
const { getCurrentUser, updateCurrentUser } = require('../controllers/users');

router.get('/me', getCurrentUser);
router.patch('/me', validateUpdateCurrentUser, updateCurrentUser);

module.exports = router;
