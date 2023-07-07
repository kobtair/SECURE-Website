import {useState} from 'react';
import '../css/productsPage.css'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Products = () => {

  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch('https://secure-website.onrender.com/emails', {
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
    <div className="  animate__animated animate__fadeIn productspage flex flex-col items-center">
        
      <h1 className='heading1 mt-5 '>Products</h1>
      <div className="productpage flex flex-wrap justify-center ">
        <div className='w-80' >
        <img src="product.png" alt="Product" className="product-image" />
        </div>
        <div className=' flex flex-col pl-5 items-center w-full lg:w-96  '>
        <h2 className='heading2'>Accident Detection System</h2>
        <p className="  w-80 lg:w-auto pl-1 product-description">Introducing our advanced Accident Detection System Device - your ultimate road safety companion. With cutting-edge sensors and AI algorithms, it swiftly identifies accidents, alerting emergency services instantly. Compact and stylish, it seamlessly integrates into your vehicle.
         Gain valuable insights into your driving habits and become a safer driver. Drive confidently with our reliable guardian by your side.
         </p>
         <form onSubmit={handleSubmit} className='waitlist-form lg:flex lg:flex-nowrap lg:items-center'>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        '& .MuiOutlinedInput-root': { // Customize the outline style
          '&:hover fieldset': {
            borderColor: 'rgba(11, 70, 45, 0.9);', // Set hover color
          },
          '&.Mui-focused fieldset': {
            borderColor: '#8CB561', // Set focused color
          },
        },
        '& .MuiFormLabel-root': { // Customize the label color
          color: 'rgba(11, 70, 45, 0.9);', // Set your desired color here
        },
        '& .Mui-focused': {
          '& .MuiFormLabel-root': {
            color: 'blue', // Set the focused label color here
          },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Email" variant="outlined"
      type="email"
      id="email"
      name="email"
      value={email}
      onChange={handleEmailChange}
      required
      />
    </Box>
      <button type="submit" className='waitlist-button  '>Join waitlist</button>
    </form>
      </div>
      <div className=" flex w-full flex-col items-center coming-soon">
      <h3 className="lg:hidden  mt-5 whitespace-nowrap">COMING SOON</h3>
        <h3 className="hidden lg:block news-bar mt-5 whitespace-nowrap">Accident Detection System will soon be in production  | COMING SOON</h3>
      </div>
    </div>
    </div>
  );
};
export default Products;
