const { Class } = require('../models')

module.exports = {
  postClass: async (req, res) => {
    try {
      const data = req.body
      const insertClass = await Class.createClass(data)
      return res.json(insertClass)
    } catch (error) {
      return res.json(error.message)
    }
  }
}