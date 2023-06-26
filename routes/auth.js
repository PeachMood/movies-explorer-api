const express = require('express');

const router = express.Router();

const { validateLogin, validateRegister } = require('../middlewares/validators/userValidator');
const { login, register, logout } = require('../controllers/auth');

router.post('/signin', validateLogin, login);
router.post('/signup', validateRegister, register);
router.post('/signout', logout);

module.exports = router;
