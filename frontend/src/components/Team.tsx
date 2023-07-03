import React from 'react'
import '../css/team.css'
import ScrollAnimation from 'react-animate-on-scroll'
export default function Team() {
    return (
        <div className='team flex flex-col items-center'>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <div className='flex'>
                    <div className='products-title'>Our
                    </div>
                    <div className='products-title products-big'>Team</div>
                </div>
            </ScrollAnimation>
            <div >
                <div className="flex flex-wrap items-center gap-11">
                    <ScrollAnimation animateIn='fadeInLeft' duration={0.7} animateOnce={true}>
                        <div className='team-members flex flex-col items-center'>
                            <div className="w-11/12 h-64  mt-2">
                                <img src="member1.png" alt="member 1" className='clip' />
                            </div>
                            <div className="name">Shrek</div>
                            <div className="team-role">CEO</div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeInRight' duration={0.7} animateOnce={true}>
                        <div className='team-members flex flex-col items-center'>
                            <div className="w-11/12  h-64 mt-2">
                                <img src="member2.png" alt="member 2" className='clip' />
                            </div>
                            <div className="name">The Incredible Hulk</div>
                            <div className="team-role">Lead Designer</div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeInLeft' duration={0.7} animateOnce={true}>
                        <div className='team-members flex flex-col items-center'>
                            <div className="w-11/12 h-64 mt-2">
                                <img src="member3.png" alt="member 3" className='clip' />
                            </div>
                            <div className="name flex flex-col items-center ">Mike Wizowski
                                <div className="team-role">Lead Developer</div>

                            </div>

                        </div>
                    </ScrollAnimation>
                </div>  </div>
        </div>
    )
}
