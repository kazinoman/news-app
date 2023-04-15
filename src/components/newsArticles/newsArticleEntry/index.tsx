import { NewsArticle } from "@/models/newArticales";
import React from "react";

interface NewsArticleEntryProps {
  article: NewsArticle;
}

export const NewsArticleEnties: React.FC<NewsArticleEntryProps> = ({ article: { author, content, description, publishAt, title, url, urlToImage } }: NewsArticleEntryProps): JSX.Element => {
  return (
    <>
      <h1>News component.</h1>
    </>
  );
};

export default NewsArticleEnties;
