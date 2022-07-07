import { NextPage } from "next";
import Link from "next/link";

const AlbumbList : NextPage = ( { albums } : any )=>{
    return <>
        <h1>List of Albums</h1>
        {
            albums.map(( album:any )=>{
                return (
                    <div key={ album.id }>
                        <Link href={`albums/${ album.id }`} passHref>
                        <h2>{ album.id } { album.title }</h2>
                        </Link>
                        <hr />
                    </div>
                )
            })
        }
    </>
}

export default AlbumbList;

export async function getStaticProps() {

    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();
    return {
        props:{
            albums:data
        }
    }
    
  }