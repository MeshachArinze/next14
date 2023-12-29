import { Db, MongoClient, MongoClientOptions, ServerApiVersion } from "mongodb";

let uri = process.env.MONGODB_URI as string;
let dbName = process.env.MONGODB_DB as string;
let cachedClient: Promise<MongoClient>;
let cachedDb: Db;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!dbName) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  try {
    await client.connect();
    const db = await client.db(dbName).command({ ping: 1 });

    return { client, db };
  } finally {
    await client.close();
  }

  // const client = (await MongoClient.connect(uri, option, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })) as Promise<MongoClient>;

  // const db = await (await client).db(dbName);

  // cachedClient = client;
  // cachedDb = db;

  // return { client, db };
}

connectToDatabase().catch(console.dir);