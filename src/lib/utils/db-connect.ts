declare global {
    var mongoose: Cached;
  }
  
  import mongoose, { Schema, Mongoose } from "mongoose";
  
  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }
  
  const uri: string = process.env.MONGODB_URI;
  
  interface Cached {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  }
  
  let cached: Cached = global.mongoose || { conn: null, promise: null };
  
  if (!cached.conn && !cached.promise) {
    global.mongoose = cached;
  }
  
  async function connection(): Promise<Mongoose> {
  
    if (cached.conn) {
      console.log("Cached mongodb is called!");
      return cached.conn;
    }
  
    if (!cached.promise) {
      mongoose.set("strictQuery", true);
      cached.promise = mongoose.connect(uri);
      console.log("connected to mongoDB!");
    }
  
    cached.conn = await cached.promise;
    return cached.conn;
  }
  
  export default connection;
  