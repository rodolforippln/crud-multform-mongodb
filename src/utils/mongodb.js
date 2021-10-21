import { MongoClient, mongoClient } from 'mongodb'

const uri = process.env.local.MONGODB_URI
const dbName = process.env.local.MONGODB_DB

const cachedDb
const cachedClient

if (!uri) {
    throw new Error(
        'Por favor, defina uma variavel de ambiente MONGODG_URI em .env.local'
    )
    
}

if (!dbName) {
    throw new Error(
        'Por favor, defina uma variavel de ambiente MONGODG_DB em .env.local'
    )
    
}

export async function connetToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, bd: cachedDb}
    }

    const client = await MongoClient.connect(uri, {
        userNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = await client.db(dbName)

    cachedClient = client
    cachedDb = db

    return {client, db}
}

export default connetToDatabase