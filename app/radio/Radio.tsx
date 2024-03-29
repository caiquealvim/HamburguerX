import React from 'react'
import Image from 'next/image'
import RadioAdsp from '@/public/images/radio.png'
import Link from 'next/link'
import { IoIosRadio } from "react-icons/io";
import { BsPlayBtn } from 'react-icons/bs';
import youtube from'@/public/images/youtube.png'
import face from'@/public/images/face.png'
import insta from'@/public/images/insta.jpg'


const Radio = () => {
  return (
    
 <div className='bg-white px-[5rem] py-[1rem] '>
<div className='md:flex md:flex-row grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6  items-start  justify-between md:items-center '>
    <div className='md:flex flex-col items-center justify-center md:flex-row gap-3  text-zinc-600 '>
    <IoIosRadio className='text-red-600 text-3xl'/>
    <h1 className='font-bold text-black'>Radio ADSP</h1>
    </div>

    <div>
 <Link className=' cursor-pointer' href="https://radiowebsemeandoapalavra.com/" target='_blank'><Image src={RadioAdsp} width={400} height={400} alt='Radio-adsp' className=' h-[rem] cursor-pointer'/></Link>
 </div>

 <div className='flex gap-3 items-center justify-center bg-red-700 w-[10rem] py-3 px-3 text-white rounded-lg hover:bg-slate-800'> 
 <a href="https://radiowebsemeandoapalavra.com/" target='_blank'><BsPlayBtn/></a> 
 <a href="https://radiowebsemeandoapalavra.com/" target='_blank'><p>Assista Agora</p></a>
 </div>
</div>

</div> 

  )
}

export default Radio
