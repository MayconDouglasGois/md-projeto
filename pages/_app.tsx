import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Home from './components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Home/>
  <Component {...pageProps} />
  </>)
}

export default MyApp
