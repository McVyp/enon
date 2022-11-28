import React from 'react'
import Layout from '../components/Layout'
import { useRouter } from 'next/router';

export default function Unauthorized() {
    const router = useRouter();
    const {message} = router.query;
  return (
    <Layout title='Unauthorized page'>
        <div className='h-screen shadow-2xl rounded flex items-center justify-center flex-col bg-gradient-to-r from-[#dbf4ff] to-[#fff1f1] text-6xl font-bold tracking-widest'>
        <div className='flex p-4 w-auto text-center bg-gradient-to-r from-cyan-500 to-[#00DFD8] bg-clip-text text-transparent'>
            Access Denied
        </div>
        {message && <div className='w-auto p-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]'>
        {message}
        </div>}
    </div>
    </Layout>
  )
}
