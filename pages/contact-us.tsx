import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const ContactUs : NextPage = ({ contactUs }:any)=>{

    return (
        <div>
          <Head>
            <title>Contact - TitleMetaNextjs</title>
            <meta name="description" content="Meta description for the contact page"/>
          </Head>
          <div>
            <h1>This is Contact Us page</h1>
            <br/>
            <p> { contactUs.description }</p>
          </div>
        </div>
      );
}

export default ContactUs;

export async function getServerSideProps(ctx:any) {
    
    const { resolvedUrl } = ctx;
    const response = await fetch(`http://localhost:4000${resolvedUrl}`);
    const contactUs = await response.json();
    return {
        props:{
            contactUs
        }
    }
}