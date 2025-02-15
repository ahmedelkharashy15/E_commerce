import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  
    const cartProducts = useSelector((state) => state)
    let n = 0
    cartProducts.map((item)=>{
        return n += item.count
    })

    return (
    <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light p-4">
            <div class="container">
                <NavLink className="navbar-brand" to="/">E-commerce</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className="nav-link mx-2" to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link mx-2" to="/about">About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link mx-2" to="/products">Products</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link mx-2" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                <form class="d-flex">
                    <NavLink className="btn btn-outline-dark mx-2" to="/login"><i class="fas fa-sign-in-alt"></i> Login</NavLink>
                    <NavLink className="btn btn-outline-dark mx-2" to="/register"><i class="fas fa-user-plus"></i> Register</NavLink>
                    <NavLink className="btn btn-outline-dark mx-2" to="/cart"><i class="fas fa-shopping-cart"></i> Cart({n})</NavLink>
                </form>
                </div>
            </div>
        </nav>
        
    </div>
  )
}
