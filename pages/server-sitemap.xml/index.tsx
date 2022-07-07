import { NextPage } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

const ServerSiteMap : NextPage = ()=>{
    return <></>
}

export default ServerSiteMap;

export async function getServerSideProps(ctx:any){

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const fields : ISitemapField[] = data.map((url:any)=>({
        loc:`https://jsonplaceholder.typicode.com/users/${url.id}`,
        lastmod:new Date().toISOString()
    }));
    return getServerSideSitemap(ctx, fields);
}