import React from 'react'
import Image from 'next/image'
import Missionaria from "@/public/images/missionaria12.png"
import { FaHeart } from "react-icons/fa6";


const Delivery = () => {
  return (
    <div className='pt-[3rem] pb-[3rem] bg-white' id='delivery' >
        <div className='w-[60%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 '>
            <div data-aos="zoom-out-down"  data-aos-duration="1000">
                <Image className=' rounded-lg' src={Missionaria} alt="delivery" width={400} height={300} />
            </div>
            <div data-aos="zoom-out-left"  data-aos-duration="1000">
                <h1 className='text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]'>
                 <span className='text-green-600'> Missionaria</span> Jaqueline
                </h1> 
                <p className='text-[17px] mt-4 text-black opacity-60'>
                <i>
                Que por ele credes em Deus, que o ressuscitou dentre os mortos e lhe deu glória
                , de modo que a vossa fé e esperança estivessem em Deus.
                </i>
                </p>
                <div className='flex items-center space-x-3 mt-[2rem]'>
                    <FaHeart  className='w-[2rem] h-[2rem] text-green-600'/>
                    <h1 className='text-[18px] text-black font-medium'>
                        Esposa do Pastor Presidente
                    </h1>
                </div>
                <div className='flex items-center space-x-3 mt-[2rem]'>
                    <FaHeart  className='w-[2rem] h-[2rem] text-green-600'/>
                    <h1 className='text-[18px] text-black font-medium'>
                        Lider do Circulo de oração
                    </h1>
                </div>
                <div className='flex items-center space-x-3 mt-[2rem]'>
                    <FaHeart className='w-[2rem] h-[2rem] text-green-600'/>
                    <h1 className='text-[18px] text-black font-medium'>
                        Mulher de oração
                    </h1>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Delivery
