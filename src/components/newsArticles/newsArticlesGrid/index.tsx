import { NewsArticle } from "@/models/newArticales";
import React from "react";
import NewsArticleEnties from "../newsArticleEntry";

interface NewsArticlesGridProps {
  articles: NewsArticle[];
}

const NewsArticleGrid = ({ articles }: NewsArticlesGridProps): JSX.Element => {
  return (
    <div className="p-0">
      <div className="flex flex-row gap-5 flex-wrap justify-center ">
        {articles?.map((data: NewsArticle, index) => {
          return (
            <div key={index}>
              <NewsArticleEnties article={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsArticleGrid;
