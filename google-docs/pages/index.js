import Head from "next/head";
import Header from "/components/Header";
import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";
import { getSession, useSession } from "next-auth/client";
import Login from "/components/Login";

export default function Home() {
  const [session] = useSession();

  if (!session) return <Login />;

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
            <h2 className="text-white text-lg ">Start a new document</h2>

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
          <div>
            <div
              className="relative h-52 w-40 border-4 cursor-pointer
            hover:border-purple-400"
            >
              <Image src="https://links.papareact.com/pju" layout="fill" />
            </div>
            <p className="ml-2 mt-2 font-semibold text-sm text-white">Blank</p>
          </div>
        </div>
      </section>

      <section className="bg-black px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-white">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="white" />
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return { props: { session } };
}

// flex flex-col items-center justify-center min-h-screen py-2
