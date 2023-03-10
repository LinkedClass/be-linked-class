const { User } = require('../models')


module.exports = {
  getAllUser: async (req, res) => {
    try {
      const allUser = await User.findAll()
      res.json(allUser)
    } catch (error) {
      res.json(error)
    }
  },
  getUserByUserName: async (req, res) => {
    try {
      const {username} = req.params
      const user = await User.findOne(username)
      res.json(user)
    } catch (error) {
      res.json(error)
    }
  },
  postUser: async (req, res) => {
    try {
      const data = req.body
      const insertUser = await User.createUser(data)
      res.json(insertUser)
    } catch (error) {
      if(error.message.includes('duplicate')) {
        res.json('Username has already registered!')
      } else {
        console.log(error)
        res.json(error)
      }
    }
  }
}