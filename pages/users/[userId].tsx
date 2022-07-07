import { NextPage } from "next";

const UserDetails : NextPage = ({ user }:any)=>{
    return (
    <>
        <h1>
            User Information
        </h1>
        <div key= { user.id }>
                <p>Username : { user.username }</p>
                <p>Name : { user.name }</p>
                <p>Email : { user.email }</p>
        </div>
    </>
    )
}

export default UserDetails;

export async function getServerSideProps(context:any) {

    const { params, req, res } = context;
    const { userId } = params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();
    return {
        props:{
            user:data
        }
    }
}