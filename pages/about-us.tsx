import { NextPage } from "next";

const AboutUs : NextPage = ({ aboutUs }:any)=>{
    return (
        <>
            <h2>About Us Page</h2>
            <br/>
            <p> { aboutUs.description }</p>
        </>
    )
}

export default AboutUs;

export async function getServerSideProps(ctx:any) {

    const { resolvedUrl } = ctx;
    const response = await fetch(`http://localhost:4000${resolvedUrl}`);
    const aboutUs = await response.json();
    return {
        props:{
            aboutUs
        }
    }
}