'use client'
import React from 'react'
import TeamCard from './TeamCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};


const Team = () => {


  useEffect(()=>{
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out-cubic',
        once: true,
        anchorPlacement: 'top-center'
      });
      }
      initAOS();
  },[])


  return (
    <div className=' pb-[3rem] bg-zinc-200' id='chefs'>

  
    <div className='pt-[5rem] pb-[3rem] bg-zinc-200' id='chefs'>
    <h1 data-aos="fade-up"  data-aos-duration="2000" className='heading'>
    Corpo<span className='text-green-600'>Oratório</span>
  </h1>
  </div>

<div data-aos="fade-up"  data-aos-duration="2000" className='w-[80%] mt-[4rem] mx-auto pb-10'>

<Carousel  additionalTransfrom={0} arrows={false} autoPlaySpeed={6000} autoPlay={true}
    centerMode={false} infinite responsive={responsive} showDots={true} itemClass='item'className='pb-10'>

        
              <TeamCard
            image ="/images/Pastor1.jpeg"
            name='Pastor Almeida'
            position ="Pastor Presidente"
            />
              <TeamCard
            image ="/images/missionaria1.jpeg"
            name='Miss. Jaqueline'
            position ="Executiver"
            />
              <TeamCard
            image ="/images/Antonio.jpeg"
            name='Diac. Antonio'
            position ="Manager Team"
            />

          <TeamCard
            image ="/images/Marcos.jpeg"
            name='Presb. Antonio'
            position ="Manager Team"
            />
        </Carousel>
</div>    



        </div>
   
  )
}

export default Team
