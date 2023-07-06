import {useState} from 'react';
import '../css/productsPage.css'
import { useNavigate } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

const Products = () => {

  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Email sent successfully
        setEmail('');
        navigate('/emailsuccess');
      } else {
        // Handle error
        throw new Error('Failed to send email.');
      }
    } catch (error) {
      // Handle error
      console.error(error);
      alert('An error occurred while sending the email. Please try again later.');
    }
  };

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };
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
         <form onSubmit={handleSubmit} className='waitlist-form'>
      <input
        type="email"
        id="email"
        name="email"
        placeholder='example@example.com'
        value={email}
        onChange={handleEmailChange}
        required
        className='email-input'
      />
      <button type="submit" className='waitlist-button '>Join waitlist</button>
    </form>
      </div>
      <div className="coming-soon">
        <h3 className="news-bar">Accident Detection System will soon be in production  | COMING SOON</h3>
      </div>
    </div>
    </div>
  );
};
export default Products;
