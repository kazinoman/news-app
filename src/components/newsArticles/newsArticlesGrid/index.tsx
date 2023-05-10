import { NewsArticle } from "@/models/newArticales";
import React from "react";
import NewsArticleEnties from "../newsArticleEntry";

interface NewsArticlesGridProps {
  articles: NewsArticle[];
}

const NewsArticleGrid = ({ articles }: NewsArticlesGridProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-[100%]">
      <p className="font-semibold text-3xl">Breaking News</p>
      <div className="flex flex-row gap-5 flex-wrap justify-center items-start">
        {articles.map((data) => {
          return (
            <>
              <NewsArticleEnties article={data} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default NewsArticleGrid;
