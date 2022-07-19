import type { NextPage } from 'next'
import Link from 'next/link'
// import { useRouter } from 'next/router';
// import { google } from 'googleapis';
// import getConfig from 'next/config';
// import key from './../google_service_account.json';


const Home: NextPage = (response:any) => {
  
  const { pages } = response;
  return <>
    <h1>List of pages</h1>
    {
      pages.map((page:any)=>{
        return (
          <div key={ page.id }>
            <Link href={`/${page.value}`}>
              <p>{ page.page }</p>
            </Link>
            <hr />
          </div>
        )
      })
    }
  </>
}

export default Home;

export async function getServerSideProps(ctx:any) {
  
  // const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
  // var token = '';
  // const jwtClient = new google.auth.JWT(
  //   key.client_email,
  //   "",
  //   key.private_key,
  //   ["https://www.googleapis.com/auth/indexing"],
  //   ""
  // );

  // jwtClient.authorize(async function(err, tokens) {
  //   console.log("er==============>>>>",err)
  //   console.log("tokens==============>>>>",tokens)
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   // token = tokens.access_token;
  //   const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       "url": "http://43.204.226.153/home",
  //       "type": "URL_UPDATED"
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'auth': `Bearer ${access_token}`,
  //     }
  //   })
  //   const auth = res.json();
  //   console.log("auth============>>>>",auth);
  // });
  
  const response = await fetch('http://localhost:4000/pages');
  const pages = await response.json();
  return {
    props:{
      pages
    }
  }



}