import { prisma } from "../../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pagesId = req.query.id;

  if (req.method === "Delete") {
    const pages = await prisma.pages.delete({
      where: { id: String(pagesId) },
    });
    res.json(pages);
  } else {
    console.log("Error while deleting Page");
  }
}
