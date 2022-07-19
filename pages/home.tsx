import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Home : NextPage = ({ home }:any)=>{
    return (
        <>
            <h2>
            <Link href={'/'}>
                <a> Click Here to go back dashboard</a>
            </Link>
            </h2>

            <h2>Home Page</h2>
            <br/>
            <p> { home.description }</p>
        </>
    )
}

export default Home;

export async function getServerSideProps(ctx:any) {

    const { resolvedUrl } = ctx;
    const response = await fetch(`http://localhost:4000${resolvedUrl}`);
    const home = await response.json();
    return {
        props:{
            home
        }
    }
}