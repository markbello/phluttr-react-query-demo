import { MongoClient, Db, MongoClientOptions } from 'mongodb';
import { URL } from 'url';

type Cached = {
  conn: Db | null;
  promise: Promise<Db> | null;
};

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
 let cached: Cached = (global as any).mongo;

 if (!cached) {
   (global as any).mongo = cached = { conn: null, promise: null };
 }

export const connectToDatabase = async (uri = process.env.MONGODB_CONNECTION_STRING!) => {
  // If there is a cached database connection, return it
  if (cached.conn) {
    return cached.conn;
  }

  // Cache the database through the connection using the database path of the connection string
  const dbName = new URL(uri).pathname.substr(1); // remove the starting `/`

  // We keep the promise in case we hot load before the last promise finishes
  if (!cached.promise) {
    cached.promise = MongoClient.connect(uri).then((client) => client.db(dbName));
  }
  cached.conn = await cached.promise;
  return cached.conn;
};
