import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Navbar/>
      <div className='container pt-5'>
        <h1 className=" text-center my-5 pt-4">About Us</h1>
        <hr />
        <p className='text-center lead'>
        We are passionate about bringing you the best products at unbeatable prices. Founded in 2020, our mission is to provide a seamless shopping experience that caters to your unique needs. We carefully curate our selection from trusted brands, ensuring quality and value with every purchase. Our dedicated team is committed to exceptional customer service, helping you find exactly what you're looking for. Whether you’re shopping for the latest trends or timeless essentials, we strive to make your experience enjoyable and convenient. Thank you for choosing our website where your satisfaction is our top priority!
        </p>

        <h2 className='text-center my-5 pt-4'>Our Products</h2>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mb-5">
          <div class="col">
            <div class="card h-100">
              <img src="./assets/men.jpg" class="card-img-top h-100" alt="Men's Clothing"/>
              <div class="card-body">
                <h5 class="card-title text-center">Men's Clothing</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="./assets/women.jpg" class="card-img-top h-100" alt="Women's Clothing"/>
              <div class="card-body">
                <h5 class="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="./assets/jewelery.jpg" class="card-img-top h-100" alt="Jewelery"/>
              <div class="card-body">
                <h5 class="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="./assets/electronics.jpg" class="card-img-top h-100" alt="Electronics"/>
              <div class="card-body">
                <h5 class="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
