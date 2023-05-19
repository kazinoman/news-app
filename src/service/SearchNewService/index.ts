import Http from "../server";
import { SearchNewsResponse } from "@/models/newArticales";

export const getSearchNews = async (search: string = "phone", page: number) => {
  const res: SearchNewsResponse = await Http.get(`/everything?q=${search}&pageSize=52&page=${page}&apiKey=${process.env.NEWS_API_KEY}`, {});
  console.log(res);
  return res;
};

// params: {
//   q: search,
//   pageSize: 51,
//   page: page,
//   apiKey: process.env.NEWS_API_KEY,
// },
