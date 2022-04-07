const express = require('express');
const router = express.Router();
const loginRouter = require("./login");
const signUpRouter = require("./signup")
const myPageRouter = require('./mypage')
const signOutRouter = require("./signout")
const authRouter = require("./auth")

router.use('/auth', authRouter)
router.use('/login', loginRouter);
router.use('/signup', signUpRouter);
router.use('/mypage', myPageRouter);
router.use('/signout', signOutRouter);

module.exports = router;
