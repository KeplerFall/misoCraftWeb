//const url = process.env.DATABASE_URL
const url = "mongodb+srv://misoCraftAdmin:xMkIpGr6ilDXKJr7@misocraft.ni084.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
import {MongoClient} from "mongodb" 

export default async function handler(req, res){
    const client = new MongoClient(url)

    await client.connect()

    const db = client.db('misoCraft')
    const collection = db.collection("playerData")

    const filter = {
        username: req.body.username,
        password: req.body.password
    }

    const response = await collection.countDocuments(filter)

    if(response == 0){res.status(200).json({message: false})}
    if(response == 1){res.status(200).json({message: true})}
}