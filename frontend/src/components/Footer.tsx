import '../css/footer.css'
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
              <p>Contact us</p>
              <p>FAQ</p>
              <p>Privacy</p>
              <p className=' whitespace-nowrap'>Schedule of Charges</p>
              <p className=' whitespace-nowrap'>Term & conditions</p>
              <p className=' whitespace-nowrap'>Complaints & Disputes</p>
            </div>
            <div className="follow-us"><h3>Follow Us</h3><br /><div className='flex gap-3'><a href="www.instagram.com"><Instagram /></a><a href="www.facebook.com"><Facebook /></a><a href="www.linkedin.com"><LinkedIn /></a><a href="www.twitter.com"><Twitter /></a></div>
              <br /><br />
              <div  ><img className='store' src="store1.png" alt="store 1" />
                <img className='store mt-2' src="store2.png" alt="store 2" />
              </div>
            </div>
          </div>
        </div>



      </div>
      <div className="gradient"></div>
    </div>

  )
}
