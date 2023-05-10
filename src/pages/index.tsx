import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { NewsArticle, NewsResponse } from "@/models/newArticales";
import { NewsArticleGrid } from "@/components/newsArticles";

import { getNewsData } from "@/service/NewService";

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[];
}

export default function Home({ newsArticles }: BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title key="title">Breaking news - Nextjs News App</title>
        <meta name="description" key="descrition" content="All the breking is here." />
      </Head>

      <main className="flex flex-col gap-5 items-start">
        <NewsArticleGrid articles={newsArticles} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
  // const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWS_API_KEY);
  // const newsResponse: NewsResponse = await res.json();
  const newsData: NewsResponse = await getNewsData();

  return {
    props: {
      newsArticles: newsData.data.articles,
    },
  };
};
