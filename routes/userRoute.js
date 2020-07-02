var express = require('express')
var router = express.Router()

//const {index, getUserById, createUser, updateUser, deleteUser} = require('../controllers/userController')
const {index, getUserById, createUser} = require('../controllers/userController')

router.get('/', index)
router.get('/:id', getUserById)
router.post('/', createUser)

module.exports = router