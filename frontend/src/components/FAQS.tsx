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
          <Typography className='typography answer'>We craft smart devices that spot accidents quick, aiming to boost response times and safety standards. Our ultimate goal? Save lives by dialing down accident impacts with our fast, accurate alert systems.</Typography>
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
          <Typography className='typography answer'>Our aim is to spot real accidents with precision, reducing false alarms. That's why our devices use advanced tech to keep false alarms low and accuracy high. Through rigorous testing and smart data analysis, we ensure our systems deliver consistently. </Typography>
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
          <Typography className='typography answer'>The cost of our detection devices varies depending on your needs and extras. For exact pricing, we recommend contacting our sales team or check our products section. We're all about clear, fair pricing and top-notch service.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='typography'><strong>How to deploy Secure device?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='typography answer'>Install our user-friendly Secure app and attach the device to your bike's handle. Connect the device to the app with a simple, intuitive process. Now, you're all set for a confident ride with Secure. </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='typography'><strong>Is the Secure App free?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='typography answer'>Our Secure app is a free service available on the Play Store. It's handy at recognizing incidents promptly and alerts your predetermined emergency contacts accordingly. We highly recommend the incorporation of our Secure device for an elevated level of protection.</Typography>
        </AccordionDetails>
      </Accordion>
      
      </div>
      </ScrollAnimation>
      </div>
  );
}
export default FAQS;