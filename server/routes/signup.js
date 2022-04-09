const express = require('express');
const router = express.Router()
const controller = require('../controllers');


router.post('/signup/petuser', controller.signup.petuser)
router.post('/signup/petsitter', controller.signup.petsitter)

module.exports = router;
