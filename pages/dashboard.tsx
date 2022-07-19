import { NextPage } from "next";
import { useEffect, useState } from "react";

// Client-side Data Fetching using useEffect

const Dashboard : NextPage = ()=>{

    const [isLoading, setLoading] = useState(true);
    const [dashboardData, setDashboardData]:any = useState(null);

    // Method : 1 

    useEffect(()=>{
        
        async function fecthDashboardData() {

            // Method : 1.1

            /*setLoading(true)
            fetch('http://localhost:4000/dashboard')
            .then((res) => res.json())
            .then((data) => {
                setDashboardData(data)
                setLoading(false)
            })*/

            // Method : 1.2

            const response = await fetch('http://localhost:4000/dashboard');
            const data = await response.json();
            setDashboardData(data);
            setLoading(false);
        }
        fecthDashboardData();
    }, []);
    
    if(isLoading){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Dashboard Data</h2>
            <br />
            <h2>Posts : { dashboardData.posts } </h2>
            <h2>Likes : { dashboardData.likes } </h2>
            <h2>Views : { dashboardData.views } </h2>
            <h2>Followers : { dashboardData.followers } </h2>
            <h2>Flollowing : { dashboardData.following } </h2>
        </div>
    )
}

export default Dashboard;