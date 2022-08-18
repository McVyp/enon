import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({children, title}) {
  return (
    <>
     <Head>
        <title>{title ? title + ' - Enon':'Enon'}</title>
        <meta name="description" content="Enon app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
              <nav className='flex h-12 justify-between shadow-md items-center px-4'>
                  <Link href="/">
                  <a className='text-lg font-bold'>Enon</a>
                  </Link>
                  <div>
                      <Link href="/cart"><a className='p-2'>Cart</a></Link>
                      <Link href="/login"><a className='p-2'>Login</a></Link>
                  </div>
              </nav>
          </header>
            <main className='container m-auto mt-4 px-4'>
                {children}
            </main>
          <div className='flex h-10 justify-center items-center shadow-inner'>
          <p>Copyright &copy; 2022 Team Rocket</p>
          </div>
      </div>
   
   
    </>
  )
}
