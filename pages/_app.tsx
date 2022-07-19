import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import Head from 'next/head';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }: AppProps) {

  const route = useRouter();
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Shadab Saifi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Blogging platform for developers</title>
        <meta name="description" content="Start your developer blog, share ideas and connect with the dev community"/>
        <link rel='icon' href="/favicon.ico"></link>
        {/* Open Graph */}
        <meta property='og:url' content={ `http://43.204.226.153${route.asPath}` } />
        <meta property='og:type' content="website" />
        <meta property='og:site_name' content='Blog for dev' />
        <meta property='og:description' content="Start your developer blog, share ideas and connect with the dev community" />
        <meta property='og:title' content="The Blogging platform for developers" />
        {
          new Date() && (<meta property='article:published_time' content={ `${new Date()}` } />)
        }
        <meta name="google-site-verification" content="lP0oflGwPxxx_XQAz-baDqGnew3ZZ4zrU06gPiMuFHY" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
