const express = require('express')

//const {index, getPostById, createPost, updatePost, deletePost} = require('../controllers/postController')
const {index, getAPIById, createPostAPI, getStaticAPI, getStaticJSONAPI, getEchoAPI, getPlusAPI,getPlusByJSONAPI, 
    getPlusSubAPI, addNumberAPI, delNumberAPI, getNumberAllAPI, updatelNumberAPI} = require('../controllers/apiController')
const router = express.Router()


router.get('/static', getStaticAPI)
router.get('/staticJSON', getStaticJSONAPI)
router.get('/echo', getEchoAPI)
router.get('/plus', getPlusAPI)
router.get('/plus/:num1/:num2', getPlusSubAPI)
router.get('/plusByJSON', getPlusByJSONAPI)

//

router.get('/number/all', getNumberAllAPI)
router.post('/number/:num1', addNumberAPI)
router.delete('/number/:num1', delNumberAPI)
router.put('/number/:numOld/:numNew', updatelNumberAPI)

router.get('/', index)
router.get('/:id', getAPIById)
router.post('/', createPostAPI)


module.exports = router