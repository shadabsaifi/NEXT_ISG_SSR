import { NextPage } from "next";
import useSWR from "swr";

const fetcher = async ()=>{
    const response = await fetch('http://localhost:4000/dashboard');
    const data = await response.json();
    return data;
}

// Client-side Data Fetching using swr

const DashboardSWR : NextPage = ()=>{

    const { data, error } = useSWR('dashboard', fetcher);
    if(error) return <h2>An Error occur</h2>;
    if(!data) return <h2>Loading...</h2>;
    return (
        <div>
            <h2>Dashboard Data</h2>
            <br />
            <h2>Posts : { data.posts } </h2>
            <h2>Likes : { data.likes } </h2>
            <h2>Views : { data.views } </h2>
            <h2>Followers : { data.followers } </h2>
            <h2>Flollowing : { data.following } </h2>
        </div>
    )
}

export default DashboardSWR;