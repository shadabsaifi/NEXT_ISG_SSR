import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Home: NextPage = (response:any) => {
  
  const route = useRouter();

  // const clickHandler = ()=>{
  //   alert("Order confirmd");
  //   route.replace('/product');
  // }

  // return (
  //   <div>
  //     <h1>Home Page</h1>
  //     <Link href='/albums'>
  //     <a>
  //       Static Generatoion(fallback: false) - Click Here To See Albums List
  //     </a>
  //     </Link>
  //     <hr />
  //     <Link href='/posts'>
  //     <a>
  //       Static Generatoion(fallback: true/'blocking') - Click Here to See Post List
  //     </a>
  //     </Link>
  //     <hr />
  //     <Link href='/users'>
  //     <a>
  //       Server Side Rendering - Click Here to See User List
  //     </a>
  //     </Link>
  //     <hr />
  //     {/* <button onClick={clickHandler}>
  //         Form Submit
  //     </button> */}
  //   </div>
  // )
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