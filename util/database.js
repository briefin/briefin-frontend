import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://admin:qwer1234@jungheecluster.sqwplyl.mongodb.net/?retryWrites=true&w=majority&appName=JungHeeCluster'

const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }

// 'mongodb+srv://admin:qwer1234@backend.uuiszsy.mongodb.net/?retryWrites=true&w=majority&appName=Backend'