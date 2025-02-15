import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'

export default function Checkout() {
  
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
  
  return (
    <div>
      <Navbar/>
      <div className='container pt-5 pb-5 mt-5'>
        <div className='row'>
          <div className='col-md-8'>
            <div class="card mt-4 mb-5">
              <div class="card-header h4 py-3">
                Billing address
              </div>
              <div class="card-body">
                <form>
                  <div className='row g-3'>
                    <div className="col">
                      <div class="mb-3">
                        <label for="exampleFirstName" class="form-label">First Name</label>
                        <input type="name" class="form-control" id="exampleFirstName" required/>
                      </div>
                    </div>
                    <div className="col">
                      <div class="mb-3">
                        <label for="exampleLastName" class="form-label">Last Name</label>
                        <input type="name" class="form-control" id="exampleLastName" required/>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div class="mb-3">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required/>
                  </div>
                  <div class="mb-3">
                    <label for="inputAddress2" class="form-label">Address 2 <span className='text-muted'>(Optional)</span></label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment or suite"/>
                  </div>
                  <div className="row g-3">
                    <div class="mb-3 col-sm-5">
                      <label for="inputCity" class="form-label">Country</label>
                      <input type="text" class="form-control" id="inputCity" required/>
                    </div>
                    <div class="mb-3 col-6 col-sm-4">
                      <label for="inputState" class="form-label">State</label>
                      <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="mb-3 col-6 col-sm-3">
                      <label for="inputZip" class="form-label">Zip</label>
                      <input type="text" class="form-control" id="inputZip" required/>
                    </div>
                  </div>
                  <hr />
                  <div class="h4 py-3">
                    Payment
                  </div>
                  <div className='row g-3'>
                    <div className="col-sm-6">
                      <div class="mb-3">
                        <label for="exampleCardName" class="form-label">Name on card</label>
                        <input type="name" class="form-control" id="exampleCardName" aria-describedby="cardNameHelp" required/>
                        <div id="cardNameHelp" class="form-text">Full name as displayed on card</div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div class="mb-3">
                        <label for="exampleCardNumber" class="form-label">Credit card number</label>
                        <input type="number" class="form-control" id="exampleCardNumber" required/>
                      </div>
                    </div>
                  </div>
                  <div className='row g-3'>
                    <div className="col-6 col-sm-3">
                      <div class="mb-3">
                        <label for="exampleExpiration" class="form-label">Expiration</label>
                        <input type="number" class="form-control" id="exampleExpiration" required/>
                      </div>
                    </div>
                    <div className="col-6 col-sm-3">
                      <div class="mb-3">
                        <label for="exampleCVV" class="form-label">CVV</label>
                        <input type="number" class="form-control" id="exampleCVV" required/>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-grid">
                    <button type="submit" class="btn btn-primary mt-3 mb-1">Continue to checkout</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card mt-4 mb-5">
              <div class="card-header h5 py-3">
                Order Summary
              </div>
              <div class="card-body">
                <p class="card-text d-flex justify-content-between">Products ({n}) <span className=''>{nPrice.toFixed(2)}$</span></p>
                <p class="card-text d-flex justify-content-between">Shipping <span className=''>{shipping}$</span></p>
                <p class="card-text fw-bold d-flex justify-content-between">Total amount <span className=''>{totalPrice.toFixed(2)}$</span></p>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
