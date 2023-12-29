import { connectToDatabase } from "../../../util/mongodb";
import { Long, Timestamp } from "mongodb";

export default async function handler(req: any, res: any) {
  const { method, body } = req;

  const { db } = await connectToDatabase();

  if (method === "GET") {
    try {
      const posts = await db
        .collection("posts")
        .find()
        .sort({ timestamp: -1 })
        .toArray();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const post = await db
        .collection("posts")
        .insertOne({ ...body, timestamp: new Timestamp(new Long("99999999", true)) });
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
