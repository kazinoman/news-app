export interface NewsArticle {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishAt: string;
  content: string;
}

export interface NewsResponse {
  articles: NewsArticle[];
}
