import Head from "next/head";
import Header from "/components/Header";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}

// flex flex-col items-center justify-center min-h-screen py-2
