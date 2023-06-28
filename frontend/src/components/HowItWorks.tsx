import '../css/howItWorks.css'

export default function Mission() {
  return (
    <div className='mission flex flex-col items-center '>
      <div className="flex">
        <div className='flex justify-center title'>How It </div>
        <div className='flex justify-center title works'> Works?</div>
      </div>
      <div className='steps mt-20 flex flex-col'>
        <div className='flex flex-col  justify-around lg:flex-row'>
          <img  className='relative top-5' src='/step1.png' alt='step 1' style={{ height: '90px', width: '90px', marginTop: '60px', marginLeft: '70px' }} />
          <div className='steps-text ml-7 '>Download The App</div>
          <img className='relative top-10 right-5'  src='/step3.png' alt='step 3' style={{ height: '140px', width: '210px' }} />
        </div>
        <div className='flex flex-col mt-10 justify-between lg:flex-row '>
          <div className='steps-text ml-10 mt-7'>Buy The Product</div>
          <img className='step-2 relative right-9' src='/step2.png' alt='step 2' style={{ height: '150px', width: '175px' }} />
          <div className='steps-text mr-24 mt-7'>Ride Safe</div>
        </div>
      </div>
    </div>
  )
}
