import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db/lib/prisma";
import { sendEmail } from "@/lib";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, song } = req.body;

    try {
      const subscription = await prisma.subscription.create({
        data: {
          name: name,
          email: email,
        },
      });

      await sendEmail(name, song);

      return res.status(200).json({ subscription });
    } catch (error) {
      return res.status(500).json({ error: "Subscription Error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
