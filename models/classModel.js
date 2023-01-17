const { getDataBase } = require('../config')

module.exports = {
  createClass: async (data) => {
    const result = getDataBase().collection('Class').insertOne(data)
    return result
  }
}


