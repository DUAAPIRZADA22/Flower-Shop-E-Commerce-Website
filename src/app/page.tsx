import React from 'react'
import Hero from './components/Hero'
import Fresh from './components/Fresh'
import Products from './components/Products'
import Collections from './components/Collections'
import Clients from './components/Clients'

const page = () => {
  return (
    <div>
      <Hero />
      <Fresh />
      <Products />
      <Collections />
      <Clients />
    </div>
  )
}

export default page