import { getServerSession } from "next-auth";
import { connectDB } from "/util/database";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답){
    let session = await getServerSession(요청, 응답, authOptions)
    
    if (session){
        요청.body.author = session.user.email
    }

    if (요청.method == "POST"){
        if (요청.body.title == ''){
            return 응답.status(500).json('제목 적어라.');
        } else if (요청.body.content == ''){
            return 응답.status(500).json('내용 적어라');
        }
        const db = (await connectDB).db('forum');
        let result = await db.collection('post').insertOne(요청.body);
        return 응답.status(200).redirect('/list');
    }
}