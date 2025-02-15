import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart , delFromCart } from '../redux/actions/actionTypes'

export default function Cart() {
  
  const shipping = 30
  const cartProducts = useSelector((state) => state)
  console.log(cartProducts)
  let n = 0
  let nPrice = 0
  cartProducts.map((item)=>{
    return n += item.count
  })
  cartProducts.map((item)=>{
    return (nPrice += item.count * item.price)
  })
  let totalPrice = nPrice + shipping
  const dispatch = useDispatch()
  
  return (
    <div>
      <Navbar/>
      <div className='container pt-5 pb-5 mt-5'>
        <div className='row'>
          <div className='col-12 col-xl-8'>
            <div class="card mt-4 mb-5">
              <div class="card-header h5 py-3">
                Item List
              </div>
              <ul class="list-group list-group-flush">
                {cartProducts.map((item)=>{
                  return(
                    <li class="list-group-item">
                      <div className='p-3 row justify-content-between align-items-center '>
                        <img className='col-4 col-sm-3 col-md-2' src={item.image} style={{height:"100px"}} />
                        <div className='row col-8 col-md-10 justify-content-around align-items-center'>
                          <h6 className='col-md-4 text-center'>{item.title}</h6>
                          <div className='col-md-4 text-center'>
                            <div>
                              <button onClick={()=>dispatch(delFromCart(item))} className='btn'>
                                <i class="far fa-minus-square"></i>
                              </button>
                              <span className='mx-3'>{item.count}</span>
                              <button onClick={()=>dispatch(addToCart(item))} className='btn'>
                                <i class="far fa-plus-square"></i>
                              </button>
                            </div>
                            <div className='mt-3'>{item.count} x ${item.price}</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div class="card mt-4 mb-5">
              <div class="card-header h5 py-3">
                Order Summary
              </div>
              <div class="card-body">
                <p class="card-text d-flex justify-content-between">Products ({n}) <span className=''>{nPrice.toFixed(2)}$</span></p>
                <p class="card-text d-flex justify-content-between">Shipping <span className=''>{shipping}$</span></p>
                <p class="card-text fw-bold d-flex justify-content-between">Total amount <span className=''>{totalPrice.toFixed(2)}$</span></p>
                <NavLink to="/checkout" className="btn btn-dark d-grid py-2 fs-5 mt-4">Go to checkout</NavLink>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
