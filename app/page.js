import { connectDB } from "/util/database"
import { MongoClient } from 'mongodb'

export default async function Home(){

  const db = (await connectDB).db('forum')
  let result = await db.collection('jung_info').find().toArray()

  return(
    <div className="list-bg">
      {
        result.map((a, i)=>
          <div className="list-item" key={i}>
            <h4>{result[i].title}</h4>
            <h4>{result[i].content}</h4>
          </div>
        )
      }
    </div>
  )
}