const express = require('express')

//const {index, getPostById, createPost, updatePost, deletePost} = require('../controllers/postController')
const {index, getAPIById, createPostAPI} = require('../controllers/apiController')
const router = express.Router()

router.get('/', index)
router.get('/:id', getAPIById)
router.post('/', createPostAPI)

module.exports = router