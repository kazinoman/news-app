// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  clientName: string;
  description: string;
  status: string;
  commentCount: number;
  datetime: string;
  imageCount: number;
};
