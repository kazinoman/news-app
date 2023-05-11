import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getSearchNews } from "@/service/SearchNewService";
import { SearchNewsResponse, NewsArticle } from "@/models/newArticales";
import Head from "next/head";
import { NewsArticleGrid } from "@/components/newsArticles";

interface SearchComProps {
  articles: NewsArticle[];
}

const SearchCom: React.FC<SearchComProps> = ({ articles }: SearchComProps): JSX.Element => {
  const [inputValue, setInputValue] = React.useState("");
  const router = useRouter();

  // onChange
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Handle form submission with inputValue and push it into urlParams
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({ pathname: "search", query: { search: inputValue } });
  };

  return (
    <>
      <Head>
        <title>News search page</title>
      </Head>

      <div className="min-h-screen flex flex-col gap-6">
        <form onSubmit={handleSubmit} className="flex flex-row gap-3 mt-5  justify-center">
          <input type="text" className="p-3 rounded-md border border-sky-500 text-2xl" placeholder="e.g. politics, sports,..." onChange={handleInputChange} />
          <button className="p-2 rounded-md bg-sky-700 text-white w-[8rem] font-medium text-md">Search</button>
        </form>
        <NewsArticleGrid articles={articles} />
      </div>
      <div></div>
    </>
  );
};

export default SearchCom;

export const getServerSideProps: GetServerSideProps<any> = async ({ query }: any) => {
  const { search } = query;
  const res: SearchNewsResponse = await getSearchNews(search);

  if (res.data) {
    return {
      props: {
        articles: res.data.articles,
      },
    };
  } else {
    return {
      props: {
        articles: [],
      },
    };
  }
};
