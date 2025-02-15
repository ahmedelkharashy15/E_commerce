import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='text-center mt-5'>
        <div className='fw-bold text-muted' style={{fontSize: '200px'}}>404</div>
        <p className='fs-3'>Sorry, we couldn't find this page.</p>
        <NavLink to="/" className='btn btn-primary mt-4'>Back to homepage</NavLink>
    </div>
  )
}
