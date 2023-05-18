import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getSearchNews } from "@/service/SearchNewService";
import { SearchNewsResponse, NewsArticle } from "@/models/newArticales";
import Head from "next/head";
import { NewsArticleGrid } from "@/components/newsArticles";
import Pagination from "@/components/pagination";

interface SearchComProps {
  articles: NewsArticle[];
  totalCount: number;
}

const SearchCom: React.FC<SearchComProps> = ({ articles, totalCount }: SearchComProps): JSX.Element => {
  const [inputValue, setInputValue] = React.useState("everything");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
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

  React.useEffect(() => {
    router.push({ pathname: "search", query: { search: inputValue, page: currentPage } });
  }, [currentPage, inputValue]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    console.log(page);
    // router.push({ pathname: "search", query: { search: inputValue, page } });
  };

  return (
    <>
      <Head>
        <title>News search page</title>
      </Head>

      <div className="min-h-screen flex flex-col gap-6 items-center">
        <form onSubmit={handleSubmit} className="flex flex-row gap-3 mt-5 justify-center flex-1">
          <input type="text" className="p-2 rounded-lg border border-sky-500 text-xl w-full flex-1" placeholder="e.g. politics, sports,..." onChange={handleInputChange} />
          <button className="p-2 rounded-lg bg-sky-700 text-white w-[8rem] font-medium text-md disabled:opacity-30" disabled={inputValue.length === 0}>
            Search
          </button>
        </form>
        <NewsArticleGrid articles={articles} />
        <Pagination total={totalCount} onPageChange={handlePageChange} />
      </div>
      <div></div>
    </>
  );
};

export default SearchCom;

export const getServerSideProps: GetServerSideProps<any> = async ({ query }: any) => {
  const { search, page } = query;
  const res: SearchNewsResponse = await getSearchNews(search, page);
  console.log(page);

  if (res.data) {
    return {
      props: {
        articles: res.data.articles,
        totalCount: res.data.totalResults,
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
