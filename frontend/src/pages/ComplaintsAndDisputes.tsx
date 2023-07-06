import React from 'react';
import '../css/complaintsAndDisputes.css'

const ComplaintsAndDisputes = () => {
  return (
    <div className='ml-7 mt-9'>
      <h1 className=' comptitles'>Complaints &amp; Disputes</h1>
      <p>If you have any complaints or disputes regarding our services, please follow the procedure outlined below:</p>
      <ol>
        <li>Contact our customer support team via email or phone.</li>
        <li>Provide detailed information about the issue and any supporting evidence.</li>
        <li>We will investigate the matter and aim to provide a resolution within 7 business days.</li>
        <li>If the issue remains unresolved, you may escalate it to the appropriate regulatory authority.</li>
      </ol>
      {/* Add more information about complaints and disputes handling */}
    </div>
  );
};

export default ComplaintsAndDisputes;
