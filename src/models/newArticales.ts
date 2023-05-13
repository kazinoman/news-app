export interface NewsArticle {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

export interface NewsResponse {
  data: {
    articles: NewsArticle[];
    status: string;
    totalResults: number;
  };
}

export interface SearchNewsResponse {
  data: {
    articles: NewsArticle[];
    status: string;
    totalResults: number;
  };
}
