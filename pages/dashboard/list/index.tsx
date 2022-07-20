import { NextPage } from "next";
import styles from "../../../styles/Navigation.module.css";
import Head from "next/head";
import Link from "next/link";

const List : NextPage = ({ home }:any)=>{
    return (
        <div>
          <Head>
            <title>List - Title Meta NextJS</title>
          </Head>
          <div>
            <h1>List of contents</h1>
            <p> { home.title }</p>
            <br/>
            <br/>
            <br/>
            <h2>Click on the below hyperlink to check the information</h2>
            <hr/>
            <Link href="/dashboard/list/users">
              <a>
                <strong><div className={styles.item}>Users</div></strong>
              </a>
            </Link>
            <hr/>
            <Link href="/dashboard/list/albums">
              <a>
                <strong><div className={styles.item}>Albums</div></strong>
              </a>
            </Link>
            <hr/>
            <Link href="/dashboard/list/posts">
              <a>
                <strong><div className={styles.item}>Posts</div></strong>
              </a>
            </Link>
            <hr/>
            <Link href="/dashboard/list/comments">
              <a>
                <strong><div className={styles.item}>Comments</div></strong>
              </a>
            </Link>
            <hr/>
          </div>
        </div>
      );
}

export default List;

export async function getServerSideProps(ctx:any) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    const home = await response.json();
    return {
        props:{
            home
        }
    }
}