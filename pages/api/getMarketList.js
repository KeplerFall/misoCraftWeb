//const url = process.env.DATABASE_URL
const url = "mongodb+srv://misoCraftAdmin:xMkIpGr6ilDXKJr7@misocraft.ni084.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
import {MongoClient} from "mongodb" 

export default async function handler(req, res){
    const client = new MongoClient(url)

    await client.connect()

    const db = client.db('misoCraft')
    const collection = db.collection("marketData")
    
    let rtn = await collection.find().toArray()

    res.status(200).json({return: rtn})
}