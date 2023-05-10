import Http from "../server";
import { NewsResponse } from "@/models/newArticales";

export const getNewsData = async () => {
  const res: NewsResponse = await Http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWS_API_KEY);
  return res;
};