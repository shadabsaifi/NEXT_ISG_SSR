import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Posts : NextPage = ( { posts } : any )=>{
    return <>
        <h1>Lis of Posts</h1>
        {
            posts.map(( post:any )=>{
                return (
                    <div key={ post.id }>
                        <Head>
                            <title>Posts - Title Meta NextJS</title>
                        </Head>
                        <Link href={`posts/${ post.id }`} passHref>
                        <h2>{ post.id } { post.title }</h2>
                        </Link>
                        <hr />
                    </div>
                )
            })
        }
    </>
}

export default Posts;

export async function getStaticProps() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        props:{
            posts:data
        },
        revalidate: 10 // in second
    }
    
  }