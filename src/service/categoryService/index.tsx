import Http from "../server";
import { NewsResponse } from "@/models/newArticales";

export const getCategoryNewsData = async (category: string) => {
  const res: NewsResponse = await Http.get(`/top-headlines?country=us&category=${category}&apiKey=` + process.env.NEWS_API_KEY);
  return res;
};
