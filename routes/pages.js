const express = require('express');

const router = express.Router();

const { sendNotFound } = require('../controllers/pages');

router.all('*', sendNotFound);

module.exports = router;
