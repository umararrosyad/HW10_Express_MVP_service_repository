const express = require('express')
const router = express.Router()
const MovieController = require('../controller/movie_controller')
const auth = require('../middleware/auth')
const multer = require('../middleware/multer')

router.get('/', MovieController.getAll)
router.get('/:id', MovieController.getOne)
router.post('/', auth , MovieController.create)
router.put('/:id',auth, MovieController.update)
router.delete('/:id',auth, MovieController.delete)
router.post('/upload/:id', multer.single('file'), MovieController.handleUpload);

module.exports = router