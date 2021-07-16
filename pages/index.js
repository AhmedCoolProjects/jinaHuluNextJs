import Head from "next/head";
import Header from "../components/Header";
import MoviesGrid from "../components/MoviesGrid";
import TopNavBar from "../components/TopNavBar";
import tmdbRequests from "../utils/tmdbRequests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Jina Hulu</title>
        <meta
          name="description"
          content="A clone of Hulu web app by Ahmed Bargady using NextJs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TopNavBar />
      <MoviesGrid results={results} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const genre = ctx.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      tmdbRequests[genre]?.url || tmdbRequests.fetchTrending?.url
    }`
  ).then((response) => response.json());

  return {
    props: {
      results: request.results,
    },
  };
}
