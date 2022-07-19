import type { NextPage } from 'next'
import Link from 'next/link'


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
  
  const response = await fetch('http://localhost:4000/pages');
  const pages = await response.json();
  return {
    props:{
      pages
    }
  }



}