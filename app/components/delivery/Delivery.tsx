import React from 'react'
import Image from 'next/image'
import DeliveryImg from "@/public/images/delivery.png"
import { RiEBike2Fill } from 'react-icons/ri'
import { IoFastFood } from 'react-icons/io5'
import { BsDoorOpen } from 'react-icons/bs'

const Delivery = () => {
  return (
    <div className='pt-[8rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-4'>
            <div data-aos="zoom-out-down"  data-aos-duration="1000">
                <Image src={DeliveryImg} alt="delivery"/>
            </div>
            <div data-aos="zoom-out-left"  data-aos-duration="1000">
                <h1 className='text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]'>
                    Your <span className='text-red-600'> Favorite Food</span> On the Way
                </h1> 
                <p className='text-[17px] mt-4 text-black opacity-60'>
                <i>
                lorem ipsum dolor, sit amet consectetur adipisicing elit. A laboriosam natus animi! 
                Voluptatum porro eaque illo magnam iusto. Quam corrupti ipsa dignissimos sunt, consequatur
                 omnis odio eaque molestias incidunt quod!
                </i>
                </p>
                <div className='flex items-center space-x-3 mt-[2rem]'>
                    <RiEBike2Fill className='w-[2rem] h-[2rem] text-red-600'/>
                    <h1 className='text-[18px] text-black font-medium'>
                        The most fast Delivery in 20 minutes
                    </h1>
                </div>
                <div className='flex items-center space-x-3 mt-[2rem]'>
                    <IoFastFood className='w-[2rem] h-[2rem] text-red-600'/>
                    <h1 className='text-[18px] text-black font-medium'>
                        The most fast Delivery in 20 minutes
                    </h1>
                </div>
                <div className='flex items-center space-x-3 mt-[2rem]'>
                    <BsDoorOpen className='w-[2rem] h-[2rem] text-red-600'/>
                    <h1 className='text-[18px] text-black font-medium'>
                        The most fast Delivery in 20 minutes
                    </h1>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Delivery
