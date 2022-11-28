import React from 'react'
import Layout from '../components/Layout';
import CheckoutWizard from '../components/CheckoutWizard';

export default function ShippingScreen() {
  return (
    <Layout title="Shipping Addrees">
        <CheckoutWizard  activeStep={1} />
    </Layout>
  )
}
