import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const UserList : NextPage = ( { users } : any )=>{

    return (
        <div>
          <Head>
            <title>Users - TitleMetaNextjs</title>
            <meta name="description" content="Meta description for the users page"/>
          </Head>
          <div>
            <h1>This is users page</h1>
            {
                users.map(( user:any )=>{
                    return (
                        <div key={ user.id }>
                            <Link href={`users/${ user.id }`} passHref>
                            <h2>{ user.id }.) { user.username }</h2>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
          </div>
        </div>
    );
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