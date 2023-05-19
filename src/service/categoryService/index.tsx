import Http from "../server";
import { NewsResponse } from "@/models/newArticales";

export const getCategoryNewsData = async (category: string, page: number) => {
  const res: NewsResponse = await Http.get(`/top-headlines?country=us&category=${category}&pageSize=30&page=${page}&apiKey=` + process.env.NEWS_API_KEY);
  return res;
};
