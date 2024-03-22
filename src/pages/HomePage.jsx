import React from 'react'
import HeroBanner from '../components/HeroBanner'
import products from '../product'

const HomePage = () => {
  return (
    <>
      <HeroBanner product={products[0]} />
      <div className="text-center mx-[40px] text-[#324d67]">
        <h2 className='font-extrabold text-4xl'>Best Seller Products</h2>
        <p className='font-extralight'>speaker There are many variations passages</p>
      </div>
    </>
  )
}

export default HomePage