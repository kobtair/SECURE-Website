import React from 'react'
import '../css/featuresList.css'

export default function Features() {
  return (
    <div className='features flex flex-col items-center '>
      <div className='flex'>
        <div className='products-title'>Features</div>
      </div>
      <div className='   w-full h-2/3 pl-7 flex flex-wrap justify-around'>
          <div className='feature flex flex-col items-center'>
            <div className="w-11/12 h-52 mt-2">
              <img src="feature1.png" alt="feature 1" className='clip' />
            </div>
            <div className="name">Realtime Response</div>
          </div>

          <div className='feature flex flex-col items-center'>
            <div className="w-11/12  h-52 mt-2">
              <img src="feature2.png" alt="feature 2" className='clip' />
            </div>
            <div className="name ">Lightweight Design</div>
          </div>
          <div className='feature flex flex-col items-center'>
            <div className="w-11/12 h-52 mt-2">
              <img src="feature3.png" alt="feature 3" className='clip' />
            </div>
            <div className="name">GPS Tracking</div>

        </div>

          <div className='feature flex flex-col items-center'>
            <div className="w-11/12 h-52 mt-2">
              <img src="feature4.png" alt="feature 4" className='clip' />
            </div>
            <div className="name">Impact Sensors</div>
          </div>
          <div className='feature flex flex-col items-center'>
            <div className="w-11/12 h-52 mt-2">
              <img src="feature5.png" alt="feature 5" className='clip' />
            </div>
            <div className="name">Alert System</div>
          </div>
          <div className='feature flex flex-col items-center'>
            <div className="w-11/12 h-52 mt-2">
              <img src="feature6.png" alt="feature 6" className='clip' />
            </div>
            <div className="name">Fall Detection</div>
        </div>
      </div>
    </div>
  )
}
