import Head from "next/head";
import Header from "/components/Header";
import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section className="bg-[#000] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg ">Start a new document</h2>

            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// flex flex-col items-center justify-center min-h-screen py-2
