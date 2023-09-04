import '../css/howItWorks.css'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Mission() {
  return (
    <div className='mission flex flex-col items-center '>
      <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
      <div className="flex">
        <div className='flex justify-center title'>How It </div>
        <div className='flex justify-center title works'> Works?</div>
      </div>
      </ScrollAnimation>
     <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
       <div className='steps mt-20 flex flex-col lg:flex-row justify-around'>
       <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} duration={0.7} delay={0.2}> 
        <div className='mt-8 relative bottom-8 left-4 lg:top-10'>
          <img  className=' lg:relative  lg:left-8 lg:bottom-3' src='/step1.png' alt='step 1' style={{ height: '90px', width: '90px', marginTop: '60px', marginLeft: '70px' }} />
          <div className='steps-text ml-7 mt-5 lg:mt-6'>Buy The Product</div>
          
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInRight' animateOnce={true} duration={0.7} delay={0.1}> 
        <div className='  flex flex-col lg:flex-col-reverse items-center justify-center mb-20 mr-20 relative left-10 top-5 lg:-top-1 lg:left-4 '>
        <img className='mb-5' src='/step2.png' alt='step 2' style={{ height: '150px', width: '175px', }} />
        <div className='steps-text ml-7 whitespace-nowrap '>Download The App</div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInLeft' duration={0.7} animateOnce={true}> 
        <div className=' relative bottom-11 left-8 lg:bottom-0 lg:top-2 lg:left-0'>
        <img className='relative top-11 right-5'  src='/step3.png' alt='step 3' style={{ height: '130px', width: '210px' }} />
          
          <div className='steps-text ml-7 lg:mr-24 mt-20'>Ride Safe</div>
        </div>
        </ScrollAnimation>
      </div>
      </ScrollAnimation>
    </div>
  )
}
