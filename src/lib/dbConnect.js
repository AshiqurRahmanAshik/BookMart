// src/lib/dbConnect.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Fix: Make this function properly async
export const dbConnect = async (collectionName) => {
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME || 'bookMartDB');
  return db.collection(collectionName);
};

export const collections = {
  USERS: 'users',
  PRODUCTS: 'products',
};