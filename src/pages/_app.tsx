import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Layout } from "@/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-slate-700 z-0">
      <Head>
        <title>News app</title>
        <meta name="description" content="Created by next app. makign news apps." />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
