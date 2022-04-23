import { prisma } from "../../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;

  try {
    await prisma.contact.create({
      data: { name, email, message },
    });
    res.status(200).json({ message: "Contact Created" });
  } catch (error) {
    console.log(error);
  }
}
