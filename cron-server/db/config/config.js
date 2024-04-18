const  { MongoClient, ServerApiVersion } = require("mongodb")
const uri = process.env.URI

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let database = client.db("Vehi-care");
module.exports = database