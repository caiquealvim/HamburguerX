'use client'
import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'
import Mapa from "@/public/images/map.png"
import QrCode from "@/public/images/qrcode.png"
import Image from 'next/image'
import { FaMapMarked, FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=' pt-[5rem] pb-[3rem]  bg-green-900 opacity-90' id='footer' >
        <div className='w-[80%] pb-[2rem]  border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center justify-center'>
            <div>
            <div className='w-[80%] text-center flex flex-col gap-2 text-white'>
            <h2 className='text-[30px]'>Localização</h2>
            <a target='_blank' href="https://www.google.com/maps/place/R.+Abel+da+Silva,+69+-+Cruz+das+Armas,+Jo%C3%A3o+Pessoa+-+PB,+58085-370/@-7.1400735,-34.8886908,18.75z/data=!4m6!3m5!1s0x7ace841dbe5e79f:0x1e98289b1121e805!8m2!3d-7.1397732!4d-34.8882255!16s%2Fg%2F11fy23n9t7?entry=ttu">
                <Image src={Mapa} alt="mapa" width={400} height={300} />
            </a>
            <div className='flex'>
            <FaMapMarkerAlt/> 
            <p> Rua Abel da silva,69-Cruz das Armas</p>
            </div>
        </div>
            </div>

            <div className='mx-auto'>
                <h1 className='text-center text-[23px] font-semibold mb-[2rem] text-white '>Doação</h1>
                <Image src={QrCode} alt="Qr-code" width={300} height={300} className='w-[200px] h-[300px]'/>
            </div>


            <div className='flex items-center'>
                <div className='flex item-center text-white space-x-2'>
                 <h1 className='text-[20px] sm:text-[30px] font-semibold'>Dias Abertos</h1>
                </div>
                <p className='text-white text-opacity-60 mt-[0.6rem]'>
                    Quarta-Feira <span className='text-yellow-300'>19:30</span> 
                </p>
                <p className='text-white text-opacity-60 mt-[0.6rem]'>
                   Quinta-Feira <span className='text-yellow-300'>19:30</span> 
                </p>
                <p className='text-white text-opacity-60 mt-[0.6rem]'>
                  Sexta-Feira <span className='text-yellow-300'>19:30</span> 
                </p>
                <p className='text-white text-opacity-60 mt-[0.6rem]'>
                   Domingo <span className='text-yellow-300'>18:30</span> 
                </p>
                <div className='mt-3 flex flex-col gap-3'>
                <Link href="https://www.youtube.com/@assembleiadedeussemeandoap7249" target='_blank'> <BiLogoYoutube  className= ' bg-green-700  rounded-md  text-white cursor-pointer text-[40px]'/></Link> 
                 <Link href="https://www.facebook.com/adsp.mrv?mibextid=PtKPJ9" target='_blank'>  <BiLogoFacebook className= ' bg-green-700  rounded-md  text-white cursor-pointer text-[40px]'/></Link>
                <Link href="https://www.instagram.com/adspmrv/?img_index=1" target='_blank'><BiLogoInstagram  className= ' bg-green-700  rounded-md  text-white cursor-pointer text-[40px]'/>
                </Link>
                </div>
            </div>
        </div>
        <div>
            <p className='text-white text-center mt-1 text-opacity-50'>
               CopyRight@ <span className='text-yellow-300 font-semibold text-opacity-55'>Caique Alvim Desenvolvedor Front-end</span> All rights reserved 
            </p>
        </div>

    </div>
  )
}

export default Footer