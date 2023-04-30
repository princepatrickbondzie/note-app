import type { NextApiRequest, NextApiResponse } from "next";
import {
  getSingleNote,
  updateNote,
  deleteNote,
} from "@/shared/repositories/notes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const note = await getSingleNote(id);
        if (!note) throw new Error("Note does not exist");
        res.status(200).json({ success: true, data: note });
      } catch (err) {
        throw err;
      }
      break;
    case "UPDATE":
      try {
        const note = await updateNote(id, req.body);
        res.status(200).json({ success: true, data: note });
      } catch (err) {
        throw err;
      }
      break;
    case "DELETE":
      try {
        await deleteNote(id);
        res.status(200).json({ success: true, message: "Note deleted" });
      } catch (err) {
        throw err;
      }

    // default:
    //   res.status(400).json({ success: false });
    //   break;
  }
}
