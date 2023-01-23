import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

const RootLayout = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Metaversus - Talal</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="An animated website for a metaverse agency built using Framer Motion and Next13 - Talal"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default RootLayout;
