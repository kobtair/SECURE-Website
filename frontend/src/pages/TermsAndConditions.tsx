import React from 'react';
import '../css/termsAndConditions.css'

const TermsAndConditions = () => {
  return (
    <div className='mt-11 ml-7' >
      <h1 className='comptitles'>Terms &amp; Conditions</h1>
      <p>By using our services, you agree to the following terms and conditions:</p>
      <h2>Usage</h2>
      <p>Our accident detection system devices are intended for personal use only. You may not use our services for any illegal or unauthorized purpose.</p>
      <h2>Liability</h2>
      <p>We are not liable for any damages or losses incurred as a result of the use of our devices. It is your responsibility to ensure the proper installation and usage of the system.</p>
      {/* Add more terms and conditions */}
    </div>
  );
};

export default TermsAndConditions;
