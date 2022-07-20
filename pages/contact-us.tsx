import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const ContactUs : NextPage = ({ contactUs }:any)=>{

    return (
        <div>
          <Head>
            <title>Contact - Title Meta NextJS</title>
          </Head>
          <div>
            <h1>This is Contact Us page</h1>
            <br/>
            <p> { contactUs.title }</p>
          </div>
        </div>
      );
}

export default ContactUs;

export async function getServerSideProps(ctx:any) {
    
    const { resolvedUrl } = ctx;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/9`);
    const contactUs = await response.json();
    return {
        props:{
            contactUs
        }
    }
}