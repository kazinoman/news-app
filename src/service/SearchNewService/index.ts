import Http from "../server";
import { SearchNewsResponse } from "@/models/newArticales";

export const getSearchNews = async (search: string, page: number) => {
  const res: SearchNewsResponse = await Http.get(`/everything?q=${search}&pageSize=9&page=${page}&apiKey=${process.env.NEWS_API_KEY}`);
  return res;
};
