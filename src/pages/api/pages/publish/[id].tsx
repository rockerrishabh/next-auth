import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pagesId = req.query.id;
  const post = await prisma.pages.update({
    where: { id: String(pagesId) },
    data: { published: true },
  });
  res.json(post);
}
