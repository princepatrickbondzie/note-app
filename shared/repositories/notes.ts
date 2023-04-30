import clientPromise from "@/lib/dbConnect";
import { Types } from "mongoose";

const db = "testdb";
const collectionName = "notes";

async function getNotes(): Promise<any> {
  const notes = (await getCollection()).find().toArray();
  return notes;
}

async function getSingleNote(id: any): Promise<any> {
  const note = (await getCollection()).findOne({
    _id: new Types.ObjectId(id),
  });
  return note;
}

async function getFavoriteNotes(userId: any) {
  const notes = (await getCollection())
    .find({
      user: new Types.ObjectId(userId),
      favorite: true,
    })
    .toArray();
}

async function createNote(payload: any): Promise<any> {
  const note = (await getCollection()).insertOne({ payload });
  return note;
}

async function updateNote(id: any, payload: any): Promise<any> {
  const note = (await getCollection()).updateOne(
    { _id: new Types.ObjectId(id) },
    payload
  );
  return note;
}

async function deleteNote(id: any): Promise<any> {
  (await getCollection()).deleteOne({
    _id: new Types.ObjectId(id),
  });
}

async function getCollection() {
  const client = await clientPromise;
  const collection = client.db(db).collection(collectionName);
  return collection;
}

type Note = {
  title: string;
  content: string;
  colorlabel: string;
  tags: string[];
  favorite: boolean;
};

export {
  getNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote,
  getFavoriteNotes,
};
