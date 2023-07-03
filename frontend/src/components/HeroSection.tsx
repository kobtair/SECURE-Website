import '../css/heroSection.css'
import Typewriter from 'typewriter-effect'
import ScrollAnimation from 'react-animate-on-scroll'


export default function HeroSection() {
  return (<div className=' animate__animated animate__fadeIn  flex flex-col items-center gap-16 lg:justify-center lg:flex-row hero pt-4 flex-wrap'>
    
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
  }}
/></div></div>
      <div className=' mt-5 para  '>Stay Protected with Secure<br />
        The Ultimate Accident Detection Device<br />
        for Bikers</div>
      <div className=' buttons'>
        <button className='main'>
          Buy Now
        </button >
        <button className='ghost'>
          Learn More
        </button></div>
    </div>
      <img className='hero-img' src="hero1.png" alt="hero" loading='lazy' />

  </div>

  )
}
