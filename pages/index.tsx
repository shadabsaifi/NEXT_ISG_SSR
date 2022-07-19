import { NextPage } from "next";
import Head from "next/head";

const Home : NextPage = ({ home }:any)=>{
    return (
        <div>
          <Head>
            <title>Home - TitleMetaNextjs</title>
            <meta name="description" content="Meta description for the home page"/>
          </Head>
          <div>
            <h1>This is Home page</h1>
            <br/>
            <p> { home.description }</p>
          </div>
        </div>
      );
}

export default Home;

export async function getServerSideProps(ctx:any) {

    const response = await fetch(`http://localhost:4000/home`);
    const home = await response.json();
    return {
        props:{
            home
        }
    }
}