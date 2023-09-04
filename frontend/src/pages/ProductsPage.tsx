import {useState} from 'react';
import '../css/productsPage.css'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Helmet } from 'react-helmet';


const Products = () => {

  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch('https://cheerful-hat-deer.cyclic.app/emails', {
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
      <Helmet>
        <title>Accident Detection System</title>
        <meta name="description" content="Explore the accident detection system device designed to provide real-time monitoring and immediate alerts for enhanced road safety." />
      </Helmet>
        
      <h1 className='heading1 mt-5 '>Products</h1>
      <div className="productpage flex flex-wrap justify-center ">
        <div className='w-80' >
        <img src="product.png" alt="Product" className="product-image" />
        </div>
        <div className=' flex flex-col pl-5 items-center w-full lg:w-96  '>
        <h2 className='heading2'>Accident Detection System</h2>
        <p className="  w-96 lg:w-auto pl-1 product-description">Introducing our Advanced Accident Detection System Device - your partner for a safer driving experience.
The design of this device is compact and lightweight, ensuring that it integrates effortlessly into your vehicle. 
 Equipped with smart sensors, it promptly detects accidents and alerts emergency services. Plus, it offers regular safety reminders for bikers too – an all-round road safety champion.
Drive with increased confidence, knowing that lives can be saved.

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
