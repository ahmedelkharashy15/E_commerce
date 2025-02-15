import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductsApi from '../components/ProductsApi'


export default function Products() {
  return (
    <div>
      <Navbar/>
      <div className='container pt-5'>
        <h1 className="display-4 text-center my-5 pt-4">Latest Products</h1>
        <hr />
      </div>

      <ProductsApi />

      <Footer/>
    </div>
  )
}
