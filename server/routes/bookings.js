const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.post('/petuser', controller.reservation.petuser),
router.post('/petsitter', controller.reservation.petsitter),
router.get('/list/petuser', controller.bookinglist.petuser),
router.get('/list/petsitter', controller.bookinglist.petsitter)

module.exports = router;