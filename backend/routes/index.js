const express = require('express');
const router = express.Router();

const auth = require('./auth/index');
const todo = require('./todo/index');

router.use('/', auth);
router.use('/todos', todo);

module.exports = router;
