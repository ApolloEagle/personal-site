import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "@/send-email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, message } = req.body;

    try {
      await sendEmail(email, message);
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: "Subscription Error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
