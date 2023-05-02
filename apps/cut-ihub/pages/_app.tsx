import { AppProps } from "next/app";
import Head from "next/head";
import "./styles.css";
import { ChakraProvider } from '@chakra-ui/react'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to cut-ihub!</title>
      </Head>
      <main className="app">
        <ChakraProvider>
        <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </>
  );
}

export default CustomApp;
