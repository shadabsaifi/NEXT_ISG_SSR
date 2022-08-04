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
        <meta name="author" content="Shadab Saifi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Blogging platform for developers</title>
        <meta name="Keywords" content="home, albums, posts, comments, users, about-us, contact-us"/>
        <meta name="description" content="Here you can find the home, albums, posts, comments, users, about-us and contact-us realeted information to easyly catch the information about all the pages which are linked in our website."/>
        <link rel='icon' href="/favicon.ico"></link>
        {/* Open Graph */}
        <meta property='og:url' content={ `http://52.66.210.90${route.asPath}` } />
        <meta property='og:type' content="website" />
        <meta property='og:site_name' content='Test the Next Server for google indexing' />
        <meta property='og:description' content="Start your developer blog, share ideas and connect with the dev community" />
        <meta property='og:title' content="The Blogging platform for developers" />
        <meta property='article:published_time' content={ `${new Date()}` } />
        {/* <meta name="google-site-verification" content="lP0oflGwPxxx_XQAz-baDqGnew3ZZ4zrU06gPiMuFHY" /> */}
        <meta name="google-site-verification" content="QfIAQ_FTefnHhIuSkeEf3tH9DmtEwuBnzh8JMqFereo" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
