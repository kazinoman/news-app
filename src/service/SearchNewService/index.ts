import Http from "../server";
import { SearchNewsResponse } from "@/models/newArticales";

export const getSearchNews = async (search: string) => {
  const res: SearchNewsResponse = await Http.get(`/everything?q=${search}&apiKey=${process.env.NEWS_API_KEY}`);
  return res;
};
