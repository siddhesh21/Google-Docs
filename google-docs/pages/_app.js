import "tailwindcss/tailwind.css";
import "../styles.css";
import { ThemeProvider } from "next-themes";
import "@material-tailwind/react/tailwind.css";
import Head from "next/head";
import { Provider } from "next-auth/client";

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
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </>
    </ThemeProvider>
  );
}

export default MyApp;



