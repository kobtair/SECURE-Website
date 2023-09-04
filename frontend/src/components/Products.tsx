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
          <p className="prod-desc mt-2 xl:mt-1">Introducing our Advanced Accident Detection System Device - your partner for a safer driving experience.
The design of this device is compact and lightweight, ensuring that it integrates effortlessly into your vehicle. Its discreet monitoring adds an extra layer of protection without interfering with your driving comfort.
Our device doesn't just observe, it acts. Equipped with smart sensors, it promptly detects accidents and alerts emergency services. Plus, it offers regular safety reminders for bikers too – an all-round road safety champion.
Drive with increased confidence, knowing that lives can be saved.
</p>
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
