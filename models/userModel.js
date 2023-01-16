const { getDataBase } = require('../config')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  findOne: async (username) => {
    console.log(username, 'ini')
    const result = await getDataBase().collection('User').findOne({ username })
    console.log(result)
    return result
  },
  createUser: async (data) => {
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(data.password, salt)
    data.password = hash
    const result = await getDataBase().collection('User').insertOne(data)
    console.log(result)
    return result
  }
}