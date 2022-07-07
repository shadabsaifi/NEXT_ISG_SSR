import { NextPage } from "next";

const ContactUs : NextPage = ({ contactUs }:any)=>{
    return (
        <>
            <h2>Contact Us Page</h2>
            <br/>
            <p> { contactUs.description }</p>
        </>
    )
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