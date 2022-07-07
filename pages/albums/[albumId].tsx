import { NextPage } from "next";
import { useRouter } from "next/router";

const AlbumDetails : NextPage = ( { album } : any )=>{

    const route = useRouter();
    if(route.isFallback){
        return <>
            <h2>Loading.....</h2>
        </>
    }

    return <>
        <h2> Title : { album.title }</h2>
    </>
}

export default AlbumDetails;

export async function getStaticPaths() {

    return {
        paths:[
            {
                params: { albumId:'1' }
            }
        ],
        fallback:false
    }
}

export async function getStaticProps(context : any) {

    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`);
    const data = await response.json();

    if(!data.id){
        return {
            notFound:true
        }
    }

    return {
        props:{
            album:data
        },
        revalidate:10
    }
}