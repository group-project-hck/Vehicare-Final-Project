import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGO_DB_URL as string
const dbName = process.env.DB_NAME

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export const db = client.db(dbName)