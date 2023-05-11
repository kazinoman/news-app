import { NewsArticle } from "@/models/newArticales";
import React from "react";
import { Avatar } from "antd";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

// const { Meta } = Card;

interface NewsArticleEntryProps {
  article: NewsArticle;
}

export const NewsArticleEnties: React.FC<NewsArticleEntryProps> = ({ article: { author, content, description, publishAt, title, url, urlToImage } }: NewsArticleEntryProps): JSX.Element => {
  const validImgUrl = urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://") ? urlToImage : undefined;

  return (
    <>
      {/* <Card style={{ width: 300 }} cover={<img alt={`${urlToImage}`} src={`${urlToImage}`} />}>
        <Meta avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />} title={`${title}`} description={`${description}`} />
      </Card> */}
      <Card shadow="sm" padding="lg" radius="md" withBorder sx={{ width: "300px", height: "500px" }}>
        <Card.Section>
          <Image src={`${urlToImage}`} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{title}</Text>
          {author && (
            <Badge color="pink" variant="light">
              {author}
            </Badge>
          )}
        </Group>

        <Text size="sm" color="dimmed">
          {description}
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Read details
        </Button>
      </Card>
    </>
  );
};

export default NewsArticleEnties;
