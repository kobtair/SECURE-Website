import React, { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet';
import '../css/about.css';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

interface Career {
  title: string;
  description: string;
  requirements: string[];
  link: string;
}

const CareersList: React.FC = () => {
  const [careers, setCareers] = useState<Career[]>([]);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await fetch('https://cheerful-hat-deer.cyclic.app/careers');
        const data = await response.json();
        setCareers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCareers();
  }, []);

  return (
    <div className="animate__animated animate__fadeIn page">
      <Helmet>
        <title>Careers</title>
        <meta name="description" content="Explore career opportunities at our startup. Join us in making a difference with our accident detection system devices." />
      </Helmet>
      <h1 className="text-center about-title">Careers</h1>
      <p className="career-para">Join us in making lives secure. We are always looking for talented individuals who are passionate about our mission.</p>
      <div className="job-listings">
        {careers.length!==0? careers.map((career) => (
          <div className="job" key={career.title}>
            <h2>{career.title}</h2>
            <p className="career-para">
              {career.description} <br /> Requirements <br />
              <ul>
                {career.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </p>
            <a href={career.link} className="btn">
              Apply Now
            </a>
          </div>
        )) : <div className=' mt-24 flex justify-center'> <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="success" />
      </Stack></div> }
      </div>
    </div>
  );
};

export default CareersList;
