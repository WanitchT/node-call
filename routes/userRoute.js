const express = require('express')

//const {index, getPostById, createPost, updatePost, deletePost} = require('../controllers/postController')
const {addUserAPI, delUserAPI, getUserAllAPI, updatelUserAPI} = require('../controllers/userController')
const router = express.Router()

//

router.get('/User/all', getUserAllAPI)
router.post('/User/:num1', addUserAPI)
router.delete('/User/:num1', delUserAPI)
router.put('/User/:numOld/:numNew', updatelUserAPI)

module.exports = router