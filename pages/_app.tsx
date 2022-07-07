import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="google-site-verification" content="iFh3v6qlT8yo54OeWECGp7zxaGuYhf0FT01Rgpsif78" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
