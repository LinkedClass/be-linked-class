const router = require('express').Router()
const userRoutes = require('./userRoutes')
const classRoutes = require('./classRouters')

router.use('/user', userRoutes)
router.use('/class', classRoutes)

module.exports = router