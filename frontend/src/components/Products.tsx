import React from 'react'
import { NavLink } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css'
import '../css/products.css'

export default function Products() {
  return (
    <div className='products flex flex-col items-center  '>
      <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
      <div className='flex'>
        <div className='products-title'>Our
        </div>
        <div className='products-title products-big'>Products</div>
      </div>
      </ScrollAnimation>
      <div className='flex pt-5 lg:pt-16 flex-wrap xl:flex-nowrap justify-center'>
          <img className='image' src="product.png" alt="product" />
          <ScrollAnimation animateIn='fadeInRight' duration={0.7} animateOnce={true} >
          <div>
        <div className='product-name'>Accident Detection System</div>
          <div className="prod-desc mt-2 xl:mt-1">Introducing our advanced Accident Detection System Device - your ultimate road safety companion. With cutting-edge sensors and AI algorithms, it swiftly identifies accidents, alerting emergency services instantly. Compact and stylish, it seamlessly integrates into your vehicle, monitoring your surroundings discreetly.
         Gain valuable insights into your driving habits and become a safer driver. Our robust device ensures your safety without compromising on style. Drive confidently with our reliable guardian by your side.
          accident so, critical lives can be saved</div>
          <NavLink to={'/products'}>
                <button className='sign-prod mt-3 xl:mt-2'>
                    Buy Now
                </button>
                </NavLink>
          </div>
          </ScrollAnimation>
          </div>
    </div>
  )
}
