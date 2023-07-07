import React from 'react'
import '../css/team.css'
import ScrollAnimation from 'react-animate-on-scroll'
export default function Team() {
    const people = [
      {
        name: 'Shahzaib Ali',
        role: 'CEO',
        imageUrl: 'member (3).jpg',
      },
      {
        name: 'Rao Abdul Sami',
        role: 'CTO',
        imageUrl: 'member (2).jpg',
      },
  {
    name: 'Muhammad Safiullah',
    role: 'COO',
    imageUrl: 'member (1).jpg',
  },
  {
    name: 'Muhammad Danial Nawaz',
    role: 'Data Analyst',
    imageUrl: 'member (4).png',
  },
  {
    name: 'Aaisha Bukhari ',
    role: 'ML Engineer',
    imageUrl: 'member (6).jpg',
  },
  {
    name: 'Muhammad Awais Ahmad',
    role: 'ML Engineer',
    imageUrl: 'member (7).png',
  },
  {
    name: 'Maryam Binte Shahid',
    role: 'Social Media / HR Manager',
    imageUrl: 'member (9).jpg',
  },
  {
    name: 'Zill-a-Tabia',
    role: 'Graphic Designer',
    imageUrl: 'member (5).jpg',
  },
  {
    name: 'Aaqib Imran',
    role: 'Web Developer',
    imageUrl: 'member (8).jpg',
  },

  // Add more team members as needed
];


    return (
        <div className='team flex flex-col items-center'>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <div className='flex'>
                    <div className='products-title'>Our
                    </div>
                    <div className='products-title products-big'>Team</div>
                </div>
            </ScrollAnimation>
           <div className="bg-white sm:py-24 ">
      <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
        <div className="max-w-2xl hidden xl:block">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          We're a dynamic group of individuals who are passionate about what we do.
          </p>
        </div>
        </ScrollAnimation>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person,i) => (
            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <li key={i}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt={person.name} />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight whitespace-nowrap text-gray-900">{person.name}</h3>
                  <p className="team-role text-sm font-semibold leading-6 ">{person.role}</p>
                </div>
              </div>
            </li>
            </ScrollAnimation>
          ))}
        </ul>
      </div>
    </div>
        </div>
    )
}
