import { NewsArticle } from "@/models/newArticales";
import React from "react";
import { Avatar, Card } from "antd";

const { Meta } = Card;

interface NewsArticleEntryProps {
  article: NewsArticle;
}

export const NewsArticleEnties: React.FC<NewsArticleEntryProps> = ({ article: { author, content, description, publishAt, title, url, urlToImage } }: NewsArticleEntryProps): JSX.Element => {
  const validImgUrl = urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://") ? urlToImage : undefined;

  return (
    <>
      <Card style={{ width: 300 }} cover={<img alt={`${urlToImage}`} src={`${urlToImage}`} />}>
        <Meta avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />} title={`${title}`} description={`${description}`} />
      </Card>
    </>
  );
};

export default NewsArticleEnties;
