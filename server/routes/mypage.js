const express = require('express');
const router = express.Router()
const controller = require('../controllers');

router.get('/:id/mypage', controller.mypage)
router.post('/:id/mypage', controller.mypage) // 리뷰작성할 때의 post

module.exports = router;
