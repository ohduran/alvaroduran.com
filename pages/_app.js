import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='antialiased'>
      <Head>
        <title>Alvaro Duran</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
