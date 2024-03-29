'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from'@/public/images/logoigreja.png'
import Adsp from'@/public/images/adsp.png'
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";


const Navbar = () => {
    const [nav, setNav] = useState(false);

  return (

    <div className="fixed h-[7rem] w-[100%] z-[1000] text-black bg-gradient-to-r  from-lime-800 to-slate-950 opacity-90 ">
    <div>
      <div className=" flex flex-row items-center justify-around pt-4">
           <Image src={Logo} alt="igreja" width={100} height={100} className="-mt-3"/>
    
      <ul className="hidden md:flex space-x-4 font-semibold text-[20px]">
        <Link  href='#home' className="text-white hover:text-green-400  border-green-300 hover:border-b-2">Início</Link>
        <Link href='#home' className="text-white hover:text-green-400  border-green-300 hover:border-b-2">Sermons</Link>
        <Link href='#home' className="text-white hover:text-green-400  border-green-300 hover:border-b-2" >Eventos</Link>
        <Link href='#home' className="text-white hover:text-green-400  border-green-300 hover:border-b-2">Pastor</Link>
        <Link href='#home' className="text-white hover:text-green-400  border-green-300 hover:border-b-2">Sobre Nós</Link>
        <Link href='#home' className="text-white hover:text-green-400  border-green-300 hover:border-b-2">Contato</Link>
      </ul>

      <div className="flex flex-row items-center gap-6">
      <button className="hidden md:flex bg border-green-600  border-2 hover:bg-green-600 hover:text-white px-7 py-2 rounded-3xl text-black font-semibold">
        Doação
      </button>
      <a href=""><BsFacebook className="w-[30px] h-10 text-green-600 "/></a>
      <a href=""><BsInstagram  className="w-[30px] h-10 text-green-600 "/></a>
      <a href=""><BsYoutube className="w-[30px] h-10 text-green-600 "/></a>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-green-600 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center gap-4 text-[15px] font-semibold
         cursor-pointer items-center text-center  absolute top-0 left-0 w-[100%]  h-[13rem] bg-green-900  text-green-200 ">
         <li className=" hover:text-white  border-b-2 border-green-200 w-[30%]"><a href="#home">Inicio</a></li>
         <li className=" hover:text-white   border-b-2 border-green-200 w-[30%]"><a href="#home">Sobre Nós</a></li>
         <li className=" hover:text-white  border-b-2 border-green-200 w-[30%] "><a href="#home">Pastor</a></li>
         <li className=" hover:text-white  border-b-2 border-green-200 w-[30%]"><a href="#home">Oferte</a></li>
         <li className=" hover:text-white  border-b-2 border-green-200 w-[30%]"><a href="#home">Contato</a></li>
         <div>
         <Image src={Logo} alt="igreja" width={100} height={100} className="-mt-[13.4rem] mr-[18rem]"/>
         </div>
        
        
         
        
        </ul>
        
      )}
      </div>
      
    </div>
    </div>    

  );
};

export default Navbar;



{/* <div className='bg-white px-[5rem] py-[1rem] '>
<div className='flex flex-row  justify-between items-center '>
    <div className='hidden md:flex flex-col items-center justify-center md:flex-row gap-3 mt-[7rem] text-zinc-600 '>
        <p>João Pessoa</p>
        <p>Segunda Feira</p>
        <p>28ºC</p>
 

    </div>
    <div className='mt-[5rem] flex gap-5 flex-row md:gap-5 cursor-pointer '>
      <Link href="https://www.youtube.com/@assembleiadedeussemeandoap7249" target='_blank'><Image src={youtube} width={500} height={500} alt='youtube' className='w-[30px] h-[30px]  mt-[1.4rem] ml-8 cursor-pointer'/></Link> 
       <Link href="https://www.facebook.com/adsp.mrv?mibextid=PtKPJ9" target='_blank'> <Image src={face} width={500} height={500} alt='facebook' className='w-[20px] h-[20px]  mt-[1.6rem] cursor-pointer'/></Link>
        <Link href="https://www.instagram.com/adspmrv/?img_index=1" target='_blank'><Image src={insta} width={500} height={500} alt='instagram' className='w-[20px] h-[20px]  mt-[1.6rem] cursor-pointer'/></Link>
    </div>
</div>

</div> */}