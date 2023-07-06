import '../css/faqs.css';
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ScrollAnimation from 'react-animate-on-scroll';

function FAQS() {
  return (
    <div className='faqs flex flex-col items-center '>
      <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
      <div className='flex'>
        <div className='products-title'>FAQ's</div>
      </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeInRight' animateOnce={true}>
      <div className="pt-16 ">
      <Accordion  >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='typography'><strong>Why are we doing this?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='typography answer'>At Secure, our mission is to enhance safety and provide peace of mind to individuals and communities. We believe in leveraging advanced technology to develop innovative solutions that can make a positive impact. By creating accident detection system devices, we aim to address the critical issue of timely response during accidents and improve overall safety standards. We strive to minimize the consequences of accidents and save lives by providing quick and accurate detection and notification capabilities.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='typography'><strong>Does it give false alarms?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='typography answer'>We understand the importance of reliable and accurate accident detection systems. Our devices are built using advanced algorithms and sensors to minimize false alarms while maintaining high detection accuracy. We continuously refine our technology through rigorous testing and analysis to ensure that our system delivers reliable results. By leveraging sophisticated machine learning algorithms and intelligent data analysis, we aim to achieve a high level of precision in detecting real accidents while reducing the occurrence of false alarms.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='typography'><strong>How much is the product going to cost?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='typography answer'>The pricing of our accident detection system devices can vary based on several factors, such as the specific product model, features, and additional services required. We offer a range of options to suit various needs and budgets. To get accurate pricing details, we encourage you to reach out to our sales team or check the products section. Our team will be happy to provide you with a tailored solution and discuss pricing options based on your specific requirements and the scale of deployment. We prioritize transparency and strive to offer competitive pricing while delivering exceptional value and reliability in our products and services.</Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      </ScrollAnimation>
      </div>
  );
}
export default FAQS;