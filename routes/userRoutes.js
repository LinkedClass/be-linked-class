const router = require('express').Router()
const { 
  userController 
} = require('../controllers')


router.get('/', userController.getUserByUserName)
// router.post('/', userController.postUser)

module.exports = router