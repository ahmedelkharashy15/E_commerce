import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Toaster , toast } from 'react-hot-toast';
import { addToCart } from '../redux/actions/actionTypes';
import { useDispatch } from 'react-redux';

const API_KEY = "https://fakestoreapi.com/products/";

const truncateText = (text, length) => {
  return text.length > length ? text.substring(0, length) + '...' : text;
};

export default function ProductsApi() {
  
    const[data,setData] = useState([])
    const[category,setCategory] = useState([])
    const[isLoading,setIsLoading] = useState(false)

    useEffect( ()=> {
      setIsLoading(true)  
      const fetchData = async ()=>{
            const response = await fetch(`${API_KEY}`);
            const results = await response.json();
            setData(results);
            setCategory(results)
        }

      fetchData();
      setIsLoading(false)

    } , [] );

    const categoryFilter = (e)=>{
      const buttonCategory = (e.target.textContent).toLowerCase()
      if(buttonCategory == "all"){
        setCategory(data)
      }else{
        const filteredCategory = data.filter((item)=>{
          return (item.category === buttonCategory)
        })
        setCategory(filteredCategory)
      }
    }

    const dispatch = useDispatch()
  
    return (
    <div>
      <div className="container">
        <div className='text-center'>
          <button onClick={categoryFilter} className='btn btn-outline-dark mt-4 mx-2'>All</button>
          <button onClick={categoryFilter} className='btn btn-outline-dark mt-4 mx-2'>Men's Clothing</button>
          <button onClick={categoryFilter} className='btn btn-outline-dark mt-4 mx-2'>Women's Clothing</button>
          <button onClick={categoryFilter} className='btn btn-outline-dark mt-4 mx-2'>Jewelery</button>
          <button onClick={categoryFilter} className='btn btn-outline-dark mt-4 mx-2'>Electronics</button>
        </div>
        {isLoading ? <p className='h1 text-center py-5'>
          Loading ...&nbsp;
          <div class="spinner-border" role="status"></div>
          </p> : 
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 pt-5">
        {category.map((product)=>{
        return(
          <div className="col mx-auto mb-4">
            <div class="card">
              <img src={product.image} class="card-img-top" style={{height:'400px'}} alt="..."/>
              <div class="card-body text-center">
                <h5 class="card-title pt-2" >{truncateText(product.title,20)}</h5>
                <p class="card-text py-2">{truncateText(product.description,60)}</p>
              </div>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item lead">$ {product.price}</li>
              </ul>
              <div class="card-body text-center">
                <NavLink to={`/products/${product.id}`} className="btn btn-dark mx-1">Buy Now</NavLink>
                <button id={`${product.id}`} onClick={()=>{toast.success("Added to cart") 
                  dispatch(addToCart(product))}} class="btn btn-dark mx-1">Add to Cart</button>
                <Toaster/>
              </div>
            </div>
          </div>
        )
        })}
        </div>}
      </div>
    </div>
  )
}