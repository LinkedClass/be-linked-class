const router = require('express').Router()
const { classController } = require('../controllers')

router.post('/create-class', classController.postClass)

module.exports = router