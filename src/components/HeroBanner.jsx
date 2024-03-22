import React from 'react'
import { Link } from 'react-router-dom'

const HeroBanner = ({ product }) => {
  return (
    <div className='py-[100px] px-[40px] bg-gray-300 rounded-[15px] relative h-[500px] leading-[0.9] w-full'>
      <div>
        <p className='text-[20px]'>Beats solo</p>
        <h3 className='text-4xl'>Wireless</h3>
        <h1 className='text-[10em] text-[#fff] -ml-[20px] uppercase'>{product.name}</h1>
        <img src="/headphones_a_4.webp" alt="" className="absolute top-0 right-[20%] w-[450px] h-[450px]" />

        <Link to='product/id'>
          <button className='bg-[#ff2929] text-white py-[10px] px-[20px] rounded-[10px] mt-[20px]'>Shop wireless headphone</button>
        </Link>
        <div className='absolute right-[10%] bottom-[5%] w-[300px] leading-[1.3] flex flex-col text-[#324d67]'>
          <h5 className='mb-[12px] font-bold self-end'>Description</h5>
          {product.description}
        </div>
      </div>
    </div>
  )
}

export default HeroBanner