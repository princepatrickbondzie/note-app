import type { NextApiRequest, NextApiResponse } from "next";
import { createNote, getNotes } from "@/shared/repositories/notes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const notes = await getNotes();
        res.status(200).json({ success: true, notes });
      } catch (err) {
        throw err;
      }
      break;
    case "POST":
      try {
        const note = await createNote(req.body);
        res.status(201).json({ success: true, note });
      } catch (err) {
        throw err;
      }

    // default:
    //   res.status(400).json({ success: false });
    //   break;
  }
}
