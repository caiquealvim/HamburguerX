'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NewBurguer from './NewBurguer';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };


const BestBurguer = () => {
  return (
    <div className=' pt-[3rem] pb-[3rem] bg-zinc-200'>
        <h1 data-aos="fade-up"  data-aos-duration="1000" className='heading font-bold'>Our Best Food <span className='text-red-600'>Here</span></h1>
        <div data-aos="zoom-out-right"  data-aos-duration="1000" className='w-[80%] mt-[4rem] mx-auto'>
            
        <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass='item'
        showDots={false}
         >

        <NewBurguer
            title="MilkShake"
            image ="/images/milkshake.png"
            reviews = "6"
            price = "7.99$"
            />
             <NewBurguer
            title="
            main course"
            image ="/images/food3.png"
            reviews = "6"
            price = "9.99$"
            />
           
           <NewBurguer
            title="French fries"
            image ="/images/food1.png"
            reviews = "6"
            price = "7.99$"
            />
           
           <NewBurguer
            title="HamburguerX"
            image ="/images/hambuguer.webp"
            reviews = "6"
            price = "5.99$"
            />
           
           

        </Carousel>

       
       

        </div>
    </div>
  )
}

export default BestBurguer