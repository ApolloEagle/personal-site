import { NextApiRequest, NextApiResponse } from "next";
import { generateURL } from "@/lib";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const songs = await generateURL();
      return res.status(200).json({ songs });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "An error occurred while uploading the file" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
