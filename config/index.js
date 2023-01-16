const { MongoClient, ServerApiVersion } = require('mongodb');
let database = null


async function connect() {
  
  try {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    
    await client.connect()
    const db = client.db('linkedClass')

    database = db

    return db
  } catch (error) {
    console.log(error)
  }
}

function getDataBase() {
  return database
}

module.exports = {connect, getDataBase}