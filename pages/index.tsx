import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
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
     <Footer/>
     
    </>
    )
}

export default Home
