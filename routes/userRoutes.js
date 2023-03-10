const router = require('express').Router()
const { userController } = require('../controllers')

router.get('/', userController.getAllUser)
router.post('/register', userController.postUser)
router.get('/:username', userController.getUserByUserName)

module.exports = router