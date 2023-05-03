import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ChakraProvider } from '@chakra-ui/react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="title" content="Innovation Hub" />
        <meta
          name="description"
          content="Supporting innovators and entrepreneurs in transforming world changing ideas into technologically feasible entities/solutions of economic growth through production of goods and Service. CUT Innovation Hub is more than just buildings – It is a centre for innovation and entrepreneurship The CUT Innovation Hub serves as a vehicle for ensuring the university supports the innovation and industrialization agenda of the nation by producing and supporting business ventures/ideas into viable commercializable entities (spin-off and start-up companies).We will work together to create a unique and tailored personal support plan for each individual, that outlines the type of support they receive, how much and how often."
        />
        <meta
          name="keywords"
          content="Innovation, Hub, Chinhoyi, CUT, University"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="5 days" />
        <meta name="author" content="Tatenda Bako" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <title>Innovation Hub</title>
        <link rel="shortcut icon" href={'/icon.png'} type="image/x-icon" />
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
