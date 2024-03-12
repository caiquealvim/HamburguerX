import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-zinc-200'>
        <h1 data-aos="fade-up"  data-aos-duration="2000" className='heading'>
            Meet Our <span className='text-red-600'> Cooker Chefs</span>
        </h1>
        <div 
        data-aos="zoom-out-right"  data-aos-duration="3000"
        className='mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>
            <TeamCard
            image ="/images/chef1.png"
            name='Mike'
            position ="Kithen Meet"
            />
              <TeamCard
            image ="/images/chef2.png"
            name='Cristian'
            position ="Executiver"
            />
              <TeamCard
            image ="/images/chef3.png"
            name='Joseph'
            position ="Manager Team"
            />
        
        </div>
      
    </div>
  )
}

export default Team
