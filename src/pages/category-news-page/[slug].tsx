import React from "react";
import { useRouter } from "next/router";
import { getCategoryNewsData } from "@/service/categoryService";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { NewsArticle, NewsResponse } from "@/models/newArticales";
import { NewsArticleGrid } from "@/components/newsArticles";
import Pagination from "@/components/pagination";
import Head from "next/head";
import { usePathname } from "next/navigation";

interface CategoryProps {
  articles: NewsArticle[];
  totalCount: number;
}

const CategoryNewsPage: React.FC<CategoryProps> = ({ articles, totalCount }: CategoryProps) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const router = useRouter();
  const { slug } = router.query;
  const p = usePathname();

  React.useEffect(() => {
    router.push({ pathname: p, query: { page: currentPage } });
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Head>
        <title />
        <title />
      </Head>
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-normal text-2xl mt-4" style={{ background: "linear-gradient(to right, #0E92B3 22%, #1A1AC7 78%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          News category : <span className="font-bold">{slug}</span>
        </h1>
        <NewsArticleGrid articles={articles} />
        <Pagination total={totalCount || 0} onPageChange={handlePageChange} />
      </div>
    </>
  );
};

export default CategoryNewsPage;

export const getServerSideProps: GetServerSideProps = async ({ params, query }: any) => {
  const { slug, page } = query;

  const res: NewsResponse = await getCategoryNewsData(slug, page);
  return {
    props: {
      articles: res.data.articles,
      totalCount: res.data.totalResults,
    },
  };
};
