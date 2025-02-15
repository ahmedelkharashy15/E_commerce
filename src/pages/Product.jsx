import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NavLink, useParams } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/actionTypes'
import { Toaster , toast } from 'react-hot-toast'

const truncateText = (text,length)=>{
  return text.length > length ? text.substring(0,length) + "..." : text
}

export default function Product() {

  const {productId} = useParams()
  const [selectedProduct,setSelectedProduct] = useState([])
  const [youMayAlsoLikeSection,setYouMayAlsoLikeSection] = useState([])

  useEffect ( ()=>{
    const fetchProduct = async ()=>{
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
      const selectedProduct = await response.json()
      setSelectedProduct(selectedProduct)
      const productCategory = selectedProduct.category
      const response2 = await fetch(`https://fakestoreapi.com/products/`)
      const rawData = await response2.json()
      const youMayAlsoLikeSection = rawData.filter((item)=>{
        return item.category === productCategory
      })
      setYouMayAlsoLikeSection(youMayAlsoLikeSection)
    }

    fetchProduct()
  } , [] )

  const dispatch = useDispatch()

  return (
    <div>
      <Navbar/>
      <div className='container pt-5 mt-5 '>
        <div className='row justify-content-between py-5 mt-5'>
          <img className='col-md-5 px-4' src={selectedProduct.image} alt="" style={{height:'550px'}} />
          <div className='col-md-6 px-4 px-md-0 mt-5 mt-md-0'>
            <h2 className='text-uppercase'>{selectedProduct.category}</h2>
            <p className='display-5'>{selectedProduct.title}</p>
            <p className='fs-6'>{selectedProduct.rating && selectedProduct.rating.rate} <i class="fas fa-star"></i></p>
            <p className='display-6 my-4'>${selectedProduct.price}</p>
            <p className='lead'>{selectedProduct.description}</p>
            <div>
              <button onClick={()=>{toast.success("Added to cart") 
                dispatch(addToCart(selectedProduct))}} className='mx-1 btn btn-outline-dark'>Add to Cart</button>
              <Toaster/>
              <NavLink className='mx-1 btn btn-dark' to="/cart">Go to Cart</NavLink>
            </div>
          </div>
        </div>
        <h2 className='py-5'>You may also Like</h2>
        <Marquee speed={60} pauseOnHover className='mb-5'>
          {youMayAlsoLikeSection.map((item)=>{
            return(
              <div class="card mx-4 text-center">
                <img src={item.image} style={{height:'400px' , width:'350px'}} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title py-3">{truncateText(item.title,20)}</h5>
                  <NavLink to={`/products/${item.id}`} className="btn btn-dark mx-1">Buy Now</NavLink>
                  <button onClick={()=>{toast.success("Added to cart") 
                    dispatch(addToCart(item))}} className="btn btn-dark mx-1">Add to Cart</button>
                </div>
              </div>
            )
          })}
        </Marquee>
      </div>
      <Footer/>
    </div>
  )
}