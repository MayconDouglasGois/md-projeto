import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Home from './components/Header'
import Footer from './components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Home/>
  <Component {...pageProps} />
  <Footer/>
  </>)
}

export default MyApp
