import React from 'react'
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function PlaceorderScreen() {
  return (
    <Layout title="Place Order">
        <CheckoutWizard activeStep ={3}/>
        <h1 className='mb-4 text-xl'>Place Order</h1>
        {cartItems.length === 0 ?(
            <div>
                Cart is Empty. <Link href='/'>Go Shopping</Link>
            </div>
        ):(
            <div className='grid md:grid-cols-4 md:gap-5'>
                <div className='overflow-x-auto md:col-span-3'>
                  <div className='card p-5'>
                      <h2 className='mb-2 text-lg'>Shipping Address</h2>
                  </div>
                </div>
            </div>
        )}
    </Layout>
  )
}
