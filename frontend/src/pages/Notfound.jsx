import React from 'react'
import { Link } from 'react-router'

const Notfound = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
     <h1> Product not found 404 error</h1>
     <Link to="/">Home</Link>
    </div>
  )
}

export default Notfound
