import type { NextApiRequest, NextApiResponse } from "next";
import { getFavoriteNotes } from "@/shared/repositories/notes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { userId },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const favorites = await getFavoriteNotes(userId);
        res.status(200).json({ success: true, favorites });
      } catch (err) {
        res.status(400).json({ success: false });
      }
    default:
      res.status(400).json({ success: false });
      break;
  }
}
