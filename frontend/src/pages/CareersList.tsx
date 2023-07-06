import React from 'react';
import '../css/about.css'
import { useState, useEffect } from 'react';

const CareersList = () => {

  const [careers, setCareers] = useState([]);
  useEffect(() => {
    // Fetch careers from the backend API
    const fetchCareers = async () => {
      try {
        const response = await fetch('http://localhost:3000/careers');
        const data = await response.json();
        setCareers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCareers();
  }, []);

  return (
    <div className=" animate__animated animate__fadeIn page">
      <h1 className='text-center about-title'>Careers</h1>
      <p className='career-para'>Join us in making lives secure. We are always looking for talented individuals who are passionate about our mission.</p>
      <div className="job-listings">
      {careers.map(career=>(
        <div className="job">
          <h2>{career.title}</h2>
          <p className='career-para'>{career.description} <br /> Requirements <br /><ul> {career.requirements.map(requirement=>(<li>{requirement}</li>))}</ul></p>

          <a href={career.link} className="btn">Apply Now</a>
        </div>
       ) )} 
      </div>
    </div>
  );
};

export default CareersList;
