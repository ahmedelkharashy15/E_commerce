import React from 'react'

export default function Main() {
  return (
    <div>
        <div className="px-4">
            <div class="card bg-light text-white my-5">
                <img src="./assets/mainImage.jpg" class="card-img " alt="..." height={550}/>
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 class="card-title fs-2">Welcome to our store</h5>
                        <p class="card-text fs-5">Discover a world of products at your doorstep.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
