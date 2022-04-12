const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/auth', controller.auth)
router.post('/login/petuser', controller.login.petuser);
router.post('/login/petsitter', controller.login.petsitter);
router.post('/signup/petsitter', controller.signup.petsitter);
router.post('/signup/petuser', controller.signup.petuser);
router.get('/mypage/petuser', controller.mypage.petuser.get);
router.post('/mypage/petuser', controller.mypage.petuser.post);
router.get('/mypage/petsitter', controller.mypage.petsitter.get);
router.post('/mypage/petsitter', controller.mypage.petsitter.post);
router.use('/signout', controller.signout);
router.use('/callback/github', controller.callback.oauth.github);

module.exports = router;
