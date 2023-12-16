const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const movieRouter = require('./movies')
const path = require('path');


router.use('/user', userRouter)
router.use('/movie', movieRouter)
router.use('/static', express.static(path.join(__dirname, '..', 'uploads')));
module.exports = router