import '../css/heroSection.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (<div className=' animate__animated animate__fadeIn   flex gap-x-20 items-center gap-16 lg:justify-center lg:flex-row hero pt-4 flex-wrap'>
    
    <div className=" hero-left pt-8 flex flex-col ml-3   ">
      <div>
        <div className=' hero-title pt-20'>MAKING LIVES
        </div>
        <div className='hero-title typing mt-2 '><Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
  onInit={(typewriter) => {
    typewriter.typeString('SAFE')
      .pauseFor(1300)
      .deleteAll()
      .start();
      typewriter.typeString('SECURE')
      .pauseFor(1300)
      .deleteAll()
      .start();
      typewriter.typeString('CONFIDENT')
      .pauseFor(1300)
      .deleteAll()
      .start();
  }}
/></div></div>
      <h1 className=' mt-5 para  '>Revolutionizing Bike Safety <br /> with Accident Detection System</h1>
      <div className=' buttons'>
      <Link to={'/products'}><button className='main'>
          Buy Now
        </button ></Link>
        <Link to={'/about'}><button className='ghost'>
          Learn More
        </button>
        </Link>
        </div>
    </div>
      <img className='hero-img' src="hero1.png" alt="hero" loading='lazy' />

  </div>

  )
}
