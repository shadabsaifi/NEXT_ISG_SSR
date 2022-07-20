import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const AboutUs : NextPage = ({ aboutUs }:any)=>{
    return (
        <div>
          <Head>
            <title>About - TitleMetaNextjs</title>
          </Head>
          <div>
            <h1>This is About Us page</h1>
            <br/>
            <p> { aboutUs.title }</p>
          </div>
        </div>
    );
}

export default AboutUs;

export async function getServerSideProps(ctx:any) {

    const { resolvedUrl } = ctx;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/3`);
    const aboutUs = await response.json();
    return {
        props:{
            aboutUs
        }
    }
}