const express = require('express');
const router = express.Router()
const controller = require('../controllers');

router.post('/signout/:id', controller.signout)

module.exports = router;
