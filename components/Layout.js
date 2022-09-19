import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Store } from '../utils/store';
import { useSession } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({children, title}) {

  const {status, data:session} = useSession();

  const {state} = useContext(Store);
  const {cart} = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a+ c.quantity, 0));
  }, [cart.cartItems])
  return (
    <>
     <Head>
        <title>{title ? title + ' - Enon':'Enon'}</title>
        <meta name="description" content="Enon app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position='bottom-center' limit={1} />
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
              <nav className='flex h-12 justify-between shadow-md items-center px-4'>
                  <Link href="/">
                  <a className='text-lg font-bold'>Enon</a>
                  </Link>
                  <div>
                      <Link href="/cart"><a className='p-2'>Cart
                        {cartItemsCount> 0 && (
                          <span className='mr-left rounded bg-red-500 py-1 px-2 text-xs font-bold text-white'>
                            {cartItemsCount}
                          </span>
                        )}
                      </a>
                      </Link>
                        {status === 'loading' ? ('Loading'):
                            session?.user ? session.user.name
                          :
                          (
                            <Link href="/login">
                              <a className='p-2'>
                                Login
                              </a>
                            </Link>
                          )
                        }
                       
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
