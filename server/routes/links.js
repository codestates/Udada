const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/auth', controller.auth)
router.post('/login/petuser', controller.login.petuser);
router.post('/login/petsitter', controller.login.petsitter);
router.get('/logout', controller.logout);
router.post('/signup/petsitter', controller.signup.petsitter);
router.post('/signup/petuser', controller.signup.petuser);
router.get('/mypage/petuser', controller.mypage.petuser.get);
router.post('/mypage/petuser', controller.mypage.petuser.post);
router.get('/mypage/petsitter', controller.mypage.petsitter.get);
router.post('/mypage/petsitter', controller.mypage.petsitter.post);
router.get('/signout/petuser', controller.signout.petuser);
router.get('/signout/petsitter', controller.signout.petsitter);
<<<<<<< HEAD
// router.use('/signout', controller.signout);
=======
>>>>>>> 7d9575d93d22d87466f24b83f3a6b7629a6bac9e
router.use('/callback/github', controller.callback.oauth.github);
router.use('/reservation/persitter', controller.reservation.petsitter.get);


module.exports = router;
