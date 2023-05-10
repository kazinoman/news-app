import Http from "../server";
import { NewsResponse } from "@/models/newArticales";

const getSearchNews = () => {
  const res = Http.get("");
  return res;
};
