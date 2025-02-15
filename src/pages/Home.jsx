import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../components/Main'
import ProductsApi from '../components/ProductsApi'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='pt-5'>
        <Main/>
      </div>

      <div className='container'>
        <h1 className="display-4 text-center my-5 pt-4">Latest Products</h1>
        <hr />
        <ProductsApi/>
      </div>

      <Footer/>
    </div>
  )
}
