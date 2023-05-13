import { NewsArticle } from "@/models/newArticales";
import React from "react";
import dayjs from "dayjs";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import Link from "next/link";

// const { Meta } = Card;

interface NewsArticleEntryProps {
  article: NewsArticle;
}

export const NewsArticleEnties: React.FC<NewsArticleEntryProps> = ({ article: { author, content, description, publishedAt, title, url, urlToImage } }: NewsArticleEntryProps): JSX.Element => {
  const validImgUrl = urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://") ? urlToImage : undefined;
  const date = dayjs(publishedAt).format("DD MMMM, YYYY");

  console.log();

  return (
    <>
      <div className="font-[ubuntu] flex flex-col xs:w-[240px] md:w-[300px] bg-white h-[360px] rounded-md hover:scale-105 hover:rounded-lg transition duration-500">
        <Image src={`${validImgUrl}`} height={180} alt="Norway" className="rounded-t-lg overflow-hidden" />

        <div className="flex flex-col justify-between p-2 h-full">
          <h1 className="font-semibold text-sm line-clamp-2">{title}</h1>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row-reverse justify-between">
              <h2 className="font-semibold text-[0.8rem] text-black">{date}</h2>
              {author && (
                <div className="px-1 bg-[#e85d26] border-3 border-orange-200 rounded-lg flex w-[max-content]">
                  <h2 className="font-semibold text-[0.8rem] text-white">{author.slice(0, 20)}</h2>
                </div>
              )}
            </div>

            <div className="py-0 line-clamp-4">
              <h2 className="font-normal text-sm font-[ubuntu]">{description}</h2>
            </div>
          </div>

          <Link href={`${url}`} target="_blank">
            <button className="bg-[#13174C] text-white p-1 uppercase rounded-md w-full text-[0.8rem] font-medium">details</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsArticleEnties;
