import type { NextPage } from 'next'
import Head from 'next/head'
import MdCommmerce from './components/SectionHome'

const Home: NextPage = () => {
  return (
    <>
     <Head>
     <title>Maycon | Home</title>
     </Head>
     <main>
     <MdCommmerce/>
     </main>
 
     
    </>
    )
}

export default Home
