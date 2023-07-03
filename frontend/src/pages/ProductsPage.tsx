import React from 'react';
import '../css/productsPage.css'
import ScrollAnimation from 'react-animate-on-scroll';

const Products = () => {
  return (
    <div className=" animate__animated animate__fadeIn productspage flex flex-col items-center">
        
      <h1 className='heading1'>Products</h1>
      <div className="productpage flex flex-wrap">
        <div >
        <img src="product.png" alt="Product" className="product-image" />
        </div>
        <div className='w-96  ml-4'>
        <h2 className='heading2'>Accident Detection System</h2>
        <p className="product-description">Introducing our advanced Accident Detection System Device - your ultimate road safety companion. With cutting-edge sensors and AI algorithms, it swiftly identifies accidents, alerting emergency services instantly. Compact and stylish, it seamlessly integrates into your vehicle.
         Gain valuable insights into your driving habits and become a safer driver. Drive confidently with our reliable guardian by your side.
         </p>
          <div className="waitlist-form">
          <input type="text" placeholder="Enter your email" className="email-input" />
          <button className="waitlist-button">Join Waitlist</button>
        </div>
        </div>
      </div>
      <div className="coming-soon">
        <h3 className="news-bar">Accident Detection System will soon be in production  | COMING SOON</h3>
      </div>
    </div>
  );
};

export default Products;
