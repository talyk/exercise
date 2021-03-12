const express = require('express');
const secrets = require('./routes/secrets');
const router = express.Router();

router.use('/secrets', secrets);

module.exports = router;