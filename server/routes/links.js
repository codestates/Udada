const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/auth', controller.auth)
router.post('/login/petuser', controller.login.petuser);
router.post('/login/petsitter', controller.login.petsitter);
router.post('/signup/petsitter', controller.signup.petsitter);
router.post('/signup/petuser', controller.signup.petuser);
router.get('/mypage', controller.mypage.get);
router.post('/mypage', controller.mypage.post);
router.use('/signout', controller.signout);

module.exports = router;
