import React from "react";
import { useRouter } from "next/router";
import { getCategoryNewsData } from "@/service/categoryService";
import { GetStaticProps, GetStaticPaths } from "next";
import { NewsArticle, NewsResponse } from "@/models/newArticales";
import { NewsArticleGrid } from "@/components/newsArticles";

interface CategoryProps {
  articles: NewsArticle[];
}

const CategoryNewsPage: React.FC<CategoryProps> = ({ articles }: CategoryProps) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="font-semibold text-3xl mt-4">{slug}</h1>
      <NewsArticleGrid articles={articles} />
    </div>
  );
};

export default CategoryNewsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const category = ["business", "entertainment", "general", "health", " science", "sports", "technology"];
  const paths = category.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params;

  const res: NewsResponse = await getCategoryNewsData(slug);
  return {
    props: {
      articles: res.data.articles,
    },
    revalidate: 5 * 60,
  };
};
