import React from 'react'
import Image from 'next/image'
import Celular from "@/public/images/celular.png"
import { PiHandsPrayingBold } from "react-icons/pi";
import { HiBookOpen } from "react-icons/hi";
import { IoChatbox } from "react-icons/io5";
import { IoIosMusicalNotes } from "react-icons/io";
import Link from 'next/link';
import RadioAdsp from '@/public/images/radio.png'
import { BsPlayBtn } from 'react-icons/bs';


const RadioPhone = () => {
  return (
    <div className=' w-full text-white'>
      <div className='h-auto bg-gradient-to-r from-slate-950  to-lime-950'>
        <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto pt-20 md:pt-1'>

            <div>
            <div className=''>
            <h1 className='text-3xl mb-10'>Assista nossa live de segunda a sexta ás 18:30H</h1>
            </div> 
          
            <div className='grid grid-cols-1 md:grid-cols-2'>
             <div className='flex items-center gap-2 text-[30px]'>
             <PiHandsPrayingBold className='text-green-600'/>
             <p>Periodo de Oração</p>
            </div>   
            <div className='flex items-center gap-2 text-[30px]'>
            <HiBookOpen className='text-green-600' />
            <p>Periodo de palavra</p>
            </div>
            <div className='flex items-center gap-2 text-[30px]'>
            <IoIosMusicalNotes className='text-green-600' />
            <p>Periodo de Louvor</p>
            </div>
           <div className='flex items-center gap-2 text-[30px]'>
           <IoChatbox className='text-green-600' />
            <p>Chate Ao vivo</p>
           </div>
           <div>
            <Link className=' cursor-pointer' href="https://radiowebsemeandoapalavra.com/" target='_blank'><Image src={RadioAdsp} width={400} height={400} alt='Radio-adsp' className='w-auto mt-20 cursor-pointer'/></Link>
            </div>
            </div>
            <div className='flex gap-3 items-center justify-center bg-red-700 w-[10rem] py-3 px-3 text-white rounded-lg hover:bg-slate-800 mt-10'> 
            <a href="https://radiowebsemeandoapalavra.com/" target='_blank'><BsPlayBtn/></a> 
            <a href="https://radiowebsemeandoapalavra.com/" target='_blank'><p>Assista Agora</p></a>
            </div>
            </div>

            <div>
        
            <Link className=' cursor-pointer' href="https://radiowebsemeandoapalavra.com/" target='_blank'><Image src={Celular}  alt='Ceia-do-senhor' width={400} height={400} className='md:ml-[9rem]'/></Link>
            </div>
           
        </div>

      </div>
    </div>
  )
}

export default RadioPhone
