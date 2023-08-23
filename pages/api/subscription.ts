import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    try {
      const subscription = await prisma.subscription.create({
        data: {
          name: name.value,
          email: email.value,
        },
      });
      return res.status(200).json({ subscription });
    } catch (error) {
      return res.status(500).json({ error: "Subscription Error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
