import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <>
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
    </>
  )
}

export default Header