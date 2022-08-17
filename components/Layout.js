import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({children, title}) {
  return (
    <>
     <Head>
        <title>{title ? title + ' - Enon':'Enon'}</title>
        <meta name="description" content="Enon app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <Header />
            <main className='container m-auto mt-4 px-4'>
                {children}
            </main>
        <Footer />
      </div>
   
   
    </>
  )
}
