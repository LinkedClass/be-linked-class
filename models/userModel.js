const { getDataBase } = require('../config')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  findAll: async () => {
    const result = await getDataBase().collection('User').find({ username: { $ne: 'admin' }}).toArray()
    return result
  },
  findOne: async (username) => {
    const result = await getDataBase().collection('User').findOne({ username })
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