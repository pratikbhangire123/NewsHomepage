import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import FeaturedArticle from "../components/featuredArticle";
import NewArticles from "../components/newArticles";
import MoreArticles from "../components/moreArticles";

export default function Home() {
  return (
    <>
      <Head>
        <title>NewsHome</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="sm:grid sm:grid-cols-3 gap-5 m-4 sm:mx-24 sm:my-16">
        <Navbar />
        <FeaturedArticle />
        <NewArticles />
        <MoreArticles />
      </main>
    </>
  );
}
