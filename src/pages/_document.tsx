import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
        <Main />
        <NextScript />
        <Header/>
      </body>
    </Html>
  )
}
