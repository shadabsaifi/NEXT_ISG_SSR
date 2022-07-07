import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
      <meta name="google-site-verification" content="lP0oflGwPxxx_XQAz-baDqGnew3ZZ4zrU06gPiMuFHY" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
