import React from 'react';
import '../css/contactUs.css'
import { Helmet } from 'react-helmet';

const ContactUs = () => {
  return (
    <div className='mt-11 ml-7' >
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us to learn more about our accident detection system devices. We're here to answer your questions and provide support." />
      </Helmet>
      <h1 className='comptitles'>Contact Us</h1>
      <p>For any inquiries or assistance, please feel free to reach out to us:</p>
      <ul>
        <li>Email: electroversesecure23@gmail.com </li>
        <li>Phone: +92 333 5160474</li>
        <li>Address: National Incubation Center, Military College of Signals, Lalkurti, Rawalpindi, Punjab</li>
      </ul>
      <p>We look forward to hearing from you!</p>
    </div>
  );
};

export default ContactUs;
