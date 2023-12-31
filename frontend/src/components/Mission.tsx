import React from 'react'
import '../css/mission.css'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Mission() {
    return (
        <div className='real-mission flex flex-col items-center '>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}> 
            <div className="flex">
            <div className='flex justify-center mission-title'>Our</div>
            <div className='flex justify-center mission-title big'> Mission</div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} duration={0.5}> 
            <iframe className=' video mt-20 ' src="https://www.youtube.com/embed/ModeoERGKMo?start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
            </ScrollAnimation>
            </div>
          
    )
}
