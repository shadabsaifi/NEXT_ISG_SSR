import { NextPage } from "next";
import { useRouter } from "next/router";

const PostDetail : NextPage = ( { post } : any )=>{

    const route = useRouter();
    if(route.isFallback){
        return <>
            <h2>Loading.....</h2>
        </>
    }

    return <>
        <h2> { post.body }</h2>
    </>
}

export default PostDetail;

export async function getStaticPaths() {

    return {
        paths:[
            {
                params: { postId:'1' }
            },
            {
                params: { postId:'2' }
            },
            {
                params: { postId:'3' }
            }
        ],
        fallback:true // or true
    }
}

export async function getStaticProps(context : any) {

    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    if(!data.id){
        return {
            notFound:true
        }
    }

    return {
        props:{
            post:data
        },
        revalidate: 10 // in second
    }
}