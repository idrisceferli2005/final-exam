import React from 'react'
import Hero from '../components/hero/Hero'
import Products from '../components/products/Products'
import Jacket from '../components/jacket/Jacket'
import Denim from '../components/denim/Denim'
import Bestseller from '../components/bestseller/Bestseller'

const Home = () => {
  return (
    <div>
      <Hero/>
     <Products/>
     <Jacket/>
     <Bestseller/>
     <Denim/>
    </div>
  )
}

export default Home
