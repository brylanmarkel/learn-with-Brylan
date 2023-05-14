import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Learn with Brylan</title>

        <meta
          name="description"
          content="Notes on David Deutsch's groundbreaking book. All failures are due to lack of knowledge."
        />
        <meta
          name="og:description"
          content="Notes on David Deutsch's groundbreaking book. All failures are due to lack of knowledge."
        />
        <meta name="og:title" content="The Beginning of Infinity" />
        <meta name="og:url" content="https://thebeginningofinfinity.xyz" />
        <meta name="apple-mobile-web-app-title" content="The Beginning of Infinity" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://thebeginningofinfinity.xyz/twitter-summary-card.png"
        />
        <meta name="og:title" content="The Beginning of Infinity" />
        <meta
          name="og:image"
          content="https://thebeginningofinfinity.xyz/twitter-summary-card.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
