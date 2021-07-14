import "tailwindcss/tailwind.css";
// import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import "@material-tailwind/react/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
