import '../css/footer.css'
import {Link} from 'react-router-dom'
import { LinkedIn, Facebook, Twitter, Instagram } from '@mui/icons-material/';

export default function Footer() {
  return (
    <div className='foot-container '>
      <div className='flex flex-col footer'>
        <img alt='Logo' src='/SECURE Logo.png' className='logo mt-9' />
        <div className='flex gap-12  mt-10'>
        <div className='flex flex-wrap gap-12'>
          <div className="our-mission  w-72  "><h3 >Mission</h3><br /><p>At Secure, we have a passion for creating innovative devices that detect accidents with precision and efficiency. Our advanced accident detection systems are designed to provide early warning and instant reporting to authorities, enabling swift response and potentially saving lives. <br /><br />
            With a focus on safety and security, our dedicated team of experts combines expertise in sensor technology, data analysis, and real-time communication to develop state-of-the-art devices.</p></div>
          
            <div className="offices  whitespace-nowrap"><h3>Offices</h3><br /><p>Lalkurti, Rawalpindi, Punjab,</p><p>Pakistan</p></div>
            <div className="links"><h3>Links</h3><br />
             <Link to={'/contact'}> <p className='hover:underline'>Contact us</p></Link>
             <Link to={'/faqs'}><p className='hover:underline'>FAQS</p></Link>
             <Link to={'/privacy'}><p className='hover:underline'>Privacy</p></Link>
             <Link to={'/scheduleofcharges'}><p className=' whitespace-nowrap hover:underline'>Schedule of Charges</p></Link>
             <Link to={'/termsandconditions'}><p className=' whitespace-nowrap hover:underline'>Term & conditions</p></Link>
             <Link to={'/complaintsanddisputes'}><p className=' whitespace-nowrap hover:underline'>Complaints & Disputes</p></Link>
            </div>
            <div className="follow-us"><h3>Follow Us</h3><br /><div className='flex gap-3'><a href="https://www.instagram.com/secure_yourlives/"><Instagram /></a><a href="https://www.facebook.com/profile.php?id=100088155865163"><Facebook /></a><a href="https://www.linkedin.com/company/7secure-tech/"><LinkedIn /></a><a href="https://www.twitter.com"><Twitter /></a></div>
              <br /><br />
              <div  ><img className='store cursor-pointer' src="store1.png" alt="store 1" />
                <img className='store mt-2 cursor-pointer' src="store2.png" alt="store 2" />
              </div>
            </div>
          </div>
        </div>



      </div>
      <div className="gradient"></div>
    </div>

  )
}
