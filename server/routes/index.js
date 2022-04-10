const express = require('express')
const router = express.Router();

router.get('/', (req, res) =>{
    res.end('Congrats! You made https server now :)')
})
module.exports = router;