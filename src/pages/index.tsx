import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import Pagination from "@/components/pagination";
import { NewsArticleGrid } from "@/components/newsArticles";

import { NewsArticle, NewsResponse } from "@/models/newArticales";
import { getNewsData } from "@/service/NewService";

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[];
  totalCount: number;
}

export default function Home({ newsArticles, totalCount }: BreakingNewsPageProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    router.push({ pathname: "/", query: { pageNo: currentPage } });
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Head>
        <title key="title">Breaking news - Nextjs News App</title>
        <meta name="description" key="descrition" content="All the breking is here." />
      </Head>

      <main className="flex flex-col items-center gap-5">
        <p className="font-bold text-3xl mt-4" style={{ background: "linear-gradient(to right, #0D0DB3 22%, #C7366B 78%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Breaking News
        </p>
        <NewsArticleGrid articles={newsArticles} />
        <Pagination total={totalCount} onPageChange={handlePageChange} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async ({ query }: any) => {
  const { pageNo } = query;
  const newsData: NewsResponse = await getNewsData(pageNo);

  return {
    props: {
      newsArticles: newsData.data.articles,
      totalCount: newsData.data.totalResults,
    },
  };
};
