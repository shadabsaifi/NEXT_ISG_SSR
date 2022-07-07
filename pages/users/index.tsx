import { NextPage } from "next";
import Link from "next/link";

const UserList : NextPage = ( { users } : any )=>{
    return <>
        <h1>User List</h1>
        { users.map((user : any)=>{
            return (
                <div key= { user.id }>
                    <Link href={`/users/${user.id}`}>
                        <p>Username : { user.username }</p>
                        <hr/>
                    </Link> 
                    <hr />
                </div>
            )
        }) }
    </>
}

export default UserList;

export async function getServerSideProps() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return { 
        props:{
            users:data
        }
    }
}