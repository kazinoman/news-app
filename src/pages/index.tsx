import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import Pagination from "@/components/pagination";
import { NewsArticleGrid } from "@/components/newsArticles";

import { NewsArticle, NewsResponse } from "@/models/newArticales";
import { getNewsData } from "@/service/NewService";

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[] | [];
  totalCount: number | 0;
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

      <main className="flex flex-col items-center gap-5 min-h-screen justify-between">
        <div className="flex flex-col items-center gap-5 min-h-screen justify-between">
          <p className="font-bold text-3xl mt-4 align-middle mx-auto" style={{ background: "linear-gradient(to right, #0D0DB3 22%, #C7366B 78%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Breaking News
          </p>
          {newsArticles.length ? <NewsArticleGrid articles={newsArticles || []} /> : <h1>Data not found.</h1>}
        </div>
        <Pagination total={totalCount || 0} onPageChange={handlePageChange} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async ({ query }: any) => {
  const { pageNo } = query;
  try {
    const newsData: NewsResponse = await getNewsData(pageNo);
    return {
      props: {
        newsArticles: newsData.data.articles,
        totalCount: newsData.data.totalResults,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        newsArticles: [],
        totalCount: 0,
      },
    };
  }
};
