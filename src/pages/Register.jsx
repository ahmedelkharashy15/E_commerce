import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'

export default function Register() {
  return (
    <div>
            <Navbar/>

            <div className="container pt-5">
                <h5 className="fs-1 text-center my-5 pt-4">Register</h5>
                <hr />

                <form className='pt-4 pb-5 mb-5 mx-auto' style={{width:'350px'}}>
                    <div class="mb-3 ">
                        <label for="exampleInputName" class="form-label">Full Name</label>
                        <input type="name" class="form-control" placeholder="Enter your name" id="exampleInputName"/>
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" placeholder="Enter your email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" placeholder="Enter your password" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        Already has an account? <NavLink to="/login">Login</NavLink>
                    </div>
                    <div className='mx-auto pt-2 d-flex justify-content-center'>
                        <button type="submit" class="btn btn-secondary">Register</button>
                    </div>
                </form>
            </div>

            <Footer/>
    </div>
  )
}
