import '../css/faqs.css';
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function FAQS() {
  return (
    <div className='faqs flex flex-col items-center '>
      <div className='flex'>
        <div className='products-title'>FAQ's</div>
      </div>
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
          <Typography className='typography answer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quod rem adipisci eius cupiditate aut veritatis possimus repudiandae totam debitis esse, saepe nostrum reprehenderit iure, officia nam libero quasi. Sit.</Typography>
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
          <Typography className='typography answer'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam illo libero et corporis ipsam nisi voluptas voluptatum doloribus tenetur ullam consequuntur provident, doloremque, ratione dolores adipisci ab nesciunt neque laborum.</Typography>
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
          <Typography className='typography answer'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam illo libero et corporis ipsam nisi voluptas voluptatum doloribus tenetur ullam consequuntur provident, doloremque, ratione dolores adipisci ab nesciunt neque laborum.</Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      </div>
  );
}
export default FAQS;