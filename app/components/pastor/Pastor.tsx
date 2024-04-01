import React from 'react'
import Image from 'next/image'
import pastor from '@/public/images/pastor001.png'
import { DiSenchatouch } from "react-icons/di";

const Pastor = () => {
  return (
    <div  className='pt-[3rem] pb-[3rem]  bg-zinc-200' id='pastor' >
    <div className='w-[60%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 '>
        <div data-aos="zoom-out-down"  data-aos-duration="1000">
            <Image className=' rounded-lg' src={pastor} alt="delivery" width={400} height={300} />
        </div>
        <div data-aos="zoom-out-left"  data-aos-duration="1000">
            <h1 className='text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]'>
             <span className='text-green-600'> Pastor</span>  Almeida
            </h1> 
            <p className='text-[17px] mt-4 text-black opacity-60'>
            <i>
            E ele designou alguns para apóstolos, outros para profetas, outros para evangelistas, e outros para pastores e mestres, com o fim de preparar os santos para a obra do ministério, para que o corpo de Cristo seja edificado,
            Efésios 4:11-12
            </i>
            </p>
            <div className='flex items-center space-x-3 mt-[2rem]'>
            <DiSenchatouch className='text-green-600 text-[50px]' />
                <h1 className='text-[18px] text-black font-medium'>
                   Pastor Presidente da ADSP
                </h1>
            </div>
            <div className='flex items-center space-x-3 mt-[2rem]'>
            <DiSenchatouch className='text-green-600 text-[50px]' />
                <h1 className='text-[18px] text-black font-medium'>
                    Homem de Deus
                </h1>
            </div>
            <div className='flex items-center space-x-3 mt-[2rem]'>
            <DiSenchatouch className='text-green-600 text-[50px]' />
                <h1 className='text-[18px] text-black font-medium'>
                    Proclamador de Louvor
                </h1>
            </div>
        </div>
    </div>
  
</div>
  )
}

export default Pastor



     