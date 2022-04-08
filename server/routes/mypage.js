const express = require('express');
const router = express.Router()
const controller = require('../controllers');

router.get('/mypage', controller.mypage.get)
router.post('/mypage', controller.mypage.post) // 유저의 정보수정

module.exports = router;
