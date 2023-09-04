import React from 'react';
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import '../css/about.css'
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className=" animate__animated animate__fadeIn page">
      <Helmet>
      <title>About Us</title>
        <meta name="description" content="Discover more about our startup and our mission to develop innovative accident detection system devices for improved road safety." />
      </Helmet>
      <h1 className=' text-center about-title'>About Us</h1>
      <p>At SECURE, we are dedicated to making lives secure through our advanced accident detection system devices. Our motto is "Making Lives Secure" because we believe that everyone deserves to feel safe on the road.</p>
      <p>With our cutting-edge technology and commitment to innovation, we aim to provide the best possible safety solutions to our customers. Our team of experts works tirelessly to develop and improve our devices, ensuring the highest level of reliability and accuracy.</p>
      <p>We value integrity, collaboration, and customer satisfaction. By focusing on these core principles, we have built a strong reputation as a trusted provider of accident detection systems.</p>
      <h2>Why Choose SECURE?</h2>
      <Accordion  >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='typography'><strong>Advanced accident detection technology</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='typography answer'>At SECURE, we've harnessed the power of advanced accident detection technology to deliver unparalleled safety solutions. Our devices leverage cutting-edge sensors and state-of-the-art artificial intelligence algorithms to accurately identify collisions and near-miss incidents. By analyzing data in real-time, our devices can distinguish between regular driving maneuvers and potential accidents, enabling timely interventions. This advanced technology ensures a higher level of accuracy, minimizing false alarms and maximizing the effectiveness of accident detection. With our commitment to continuous innovation, we stay at the forefront of technology, providing you with the most advanced accident detection capabilities for optimal road safety.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='typography'><strong>Real-time monitoring and response</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='typography answer'>Our accident detection system devices excel in real-time monitoring and response, offering an added layer of security on the road. With continuous monitoring capabilities, our devices remain vigilant, analyzing various parameters such as sudden deceleration, changes in direction, and impact forces. In the event of a potential accident, the device springs into action, instantly alerting emergency services with precise location information. This swift response time can significantly reduce emergency response times, ensuring prompt assistance when every second counts. Rest assured knowing that our real-time monitoring and response feature provides you with the peace of mind you deserve while driving.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='typography'><strong>Data-driven insights for safer driving</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='typography answer'>In addition to accident detection, SECURE's devices provide valuable data on your driving patterns. From speed and acceleration to braking habits, you can gain insights into your driving behaviors and make informed decisions to become a safer driver. Our goal is not just to respond to accidents but also to prevent them through awareness and improved driving habits.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default About;
