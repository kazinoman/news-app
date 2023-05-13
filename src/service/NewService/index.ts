import Http from "../server";
import { NewsResponse } from "@/models/newArticales";

export const getNewsData = async (pageNo: number) => {
  const res: NewsResponse = await Http.get(`/top-headlines?pageSize=9&page=${pageNo}&country=us&apiKey=${process.env.NEWS_API_KEY}`);
  return res;
};
