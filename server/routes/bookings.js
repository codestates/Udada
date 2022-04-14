const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/petuser', controller.reservation.petuser.get),

    router.post('/petuser', controller.reservation.petuser.post),
    router.get('/petsitter', controller.reservation.petsitter.get),
    router.post('/petsitter', controller.reservation.petsitter.post),
    router.get('/list/petuser', controller.bookinglist.petuser.get),
    router.post('/list/petuser', controller.bookinglist.petuser.post),
    router.get('/list/petsitter', controller.bookinglist.petsitter.get)
router.post('/list/petsitter', controller.bookinglist.petsitter.post)

module.exports = router;