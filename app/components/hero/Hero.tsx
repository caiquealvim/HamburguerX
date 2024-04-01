'use client'
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Ceia from "@/public/images/Ceia.jpeg"
import igreja from "@/public/images/igreja.jpeg"




const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 
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

const Hero = () => {
  return (
    <Carousel additionalTransfrom={0} arrows={true} autoPlaySpeed={6000} autoPlay={true}
    centerMode={false} infinite responsive={responsive} showDots={false} itemClass='item' className='w-[100%] h-[60vh]'>
      
          <div className='w-[100%] h-[74vh] flex items-center'>
            <video className=' w-[100%] h-auto mt-[1rem] flex   items-center object-cover ' 
             autoPlay muted loop>
               <source src="/video/culto.mp4" />
             </video>
          </div>

          <div className='w-[100%] h-[74vh] flex items-center'>
            <video className=' w-[100%] h-auto mt-[1rem] md:mt-[20rem] flex   items-center object-cover ' 
             autoPlay muted loop>
               <source src="/video/cultoigreja.mp4" />
             </video>
          </div>
  
          <div className=" w-[100%] h-[74vh]  flex  items-center">
            <div className='w-[100%] h-auto -mt-[13rem] mx-auto'>
                <Image src={Ceia}  alt='Ceia-do-senhor' className='object-cover w-full h-screen  mx-auto'/>
                <div className='relative flex flex-col -mt-[30rem] gap-7 text-white items-center justify-center'>
                  <p className='text-white text-[18px] md:text-[25px] lg:text=[30px] font-serif font-semibold -mt-[5rem]'>Seja bem vindo para</p>
                  <h1 className='text-white font-bold text-2xl text-center lg:text-5xl md:text-3xl'> <i>Assembleia de Deus semeando a palavra <br />
                  Ministério Resgatando Vidas</i></h1>
                </div>
            </div>
        </div>

        <div className=" w-[100%] h-[74vh] ] flex  items-center flex-col bg-black">
            <div className='w-[100%] h-auto -mt-[7rem] mx-auto'>
                <Image src={igreja}  alt='Ceia-do-senhor' className='w-full h-screen object-cover mx-auto opacity-40'/>
                <div className='relative flex flex-col -mt-[30rem] gap-7 text-white items-center justify-center'>
                  <p className='text-green-600 text-[28px] md:text-[35px] lg:text-[45px] font-serif font-semibold'>Culto de Adoração</p>
                  <h1 className='text-white font-semibold text-2xl text-center lg:text-5xl md:text-3xl'><i>Sexta feira às 19:30</i></h1>
                </div>
            </div>
        </div> 

   

    </Carousel>
  )
}

export default Hero