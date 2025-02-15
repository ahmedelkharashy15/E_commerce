import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div>
      <Navbar/>

      <div className="container pt-5">
        <h5 className="fs-1 text-center my-5 pt-4">Contact Us</h5>
        <hr />
      
        <form className='pt-4 pb-5 mb-5 mx-auto' style={{width:'350px'}}>
            <div class="mb-3">
              <label for="exampleInputName" class="form-label">Full Name</label>
              <input type="name" class="form-control" placeholder="Enter your name" id="exampleInputName"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" placeholder="Enter your email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Enter your message"></textarea>
            </div>
            <div className='mx-auto pt-2 d-flex justify-content-center'>
              <button type="submit" class="btn btn-secondary">Send</button>
            </div>
        </form>
      </div>

      <Footer/>
    </div>
  )
}
