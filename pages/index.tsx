import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SectionHome from './components/SectionHome'

const Home: NextPage = () => {
  return (
    <>
     <Head>
     <title>Maycon | Home</title>
     </Head>
     <SectionHome/>
    </>
    )
}

export default Home
