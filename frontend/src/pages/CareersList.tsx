import React, { useState, useEffect } from 'react';
import '../css/about.css';

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
        const response = await fetch('https://secure-website.onrender.com/careers');
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
      <h1 className="text-center about-title">Careers</h1>
      <p className="career-para">Join us in making lives secure. We are always looking for talented individuals who are passionate about our mission.</p>
      <div className="job-listings">
        {careers.map((career) => (
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
        ))}
      </div>
    </div>
  );
};

export default CareersList;
