import React from 'react'
import '../css/products.css'
export default function Products() {
  return (
    <div className='products flex flex-col items-center  '>
      <div className='flex'>
        <div className='products-title'>Our
        </div>
        <div className='products-title products-big'>Products</div>
      </div>
      <div className=' flex flex-col items-start  product hover:scale-105 transition-transform duration-300'>
        <div className=' h-2/3 w-11/12'>
          <img className='image' src="product.png" alt="product" />
        </div>
        <div className='ml-12 mb-2 lg:ml-16 product-name '>Accident Detection System</div>
        <div className="prod-desc lg:ml-6 text-center">This small device uses AI and Machine Learning to detect when you are in an 
          accident and sets a timer and then alerts the Emergency services about the 
          accident so, critical lives can be saved</div>

      </div>
    </div>
  )
}
