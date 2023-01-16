const cors = require('cors')
const express = require('express')
const { connect } = require('./config')
const dotenv = require('dotenv')
const router = require('./routes')
const app = express()
const PORT = 3000

dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

connect().then(async (db) => {
  const getList = await db.listCollections().toArray()
  const listCollections = getList.map((x) => x.name)
  const dbInfo = {
    database: db.namespace,
    collections: listCollections
  }
  console.log('Connected to Mongo with :', dbInfo)
  
  app.listen(PORT, () => {
    console.log('Listening on PORT: ', PORT)
  })
})