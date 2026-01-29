import { MongoClient } from "mongodb";
import dotenv from "dotenv";


dotenv.config() // loads the env file
const uri = String(process.env.MONGODB_URI)

console.log(uri)
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

let connect;

try {
    connect = await client.connect()
    console.log('(╯°□°）╯︵ ┻━┻\n', "MongoDB Connected...")
} catch (error) {
    console.error(error)
    process.exit(1)
}


let db = connect.db("test_db")

export default db;
