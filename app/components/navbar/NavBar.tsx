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
        <Link  href='#inicio' className="text-white hover:text-green-400  border-green-300 hover:border-b-2">Início</Link>
        <Link href='#igreja' className="text-white hover:text-green-400  border-green-300 hover:border-b-2">Igreja</Link>
        <Link href='#pastor' className="text-white hover:text-green-400  border-green-300 hover:border-b-2" >Pastor</Link>
        <Link href='#horario' className="text-white hover:text-green-400  border-green-300 hover:border-b-2">Horário</Link>
        <Link href='#missionaria' className="text-white hover:text-green-400  border-green-300 hover:border-b-2">Missionaria</Link>
        <Link href='#radio' className="text-white hover:text-green-400  border-green-300 hover:border-b-2">Radio</Link>
      </ul>

      <div className="flex flex-row items-center gap-6">
      <button className="hidden md:flex bg border-green-600 text-white  border-2 hover:bg-green-600 hover:text-white px-7 py-2 rounded-3xl text-black font-semibold">
       <a href="#pix"> Doação</a>
      </button>
      <a  href="https://www.facebook.com/adsp.mrv?mibextid=PtKPJ9" target='_blank'><BsFacebook className="w-[30px] h-10 text-green-600 "/></a>
      <a href="https://www.instagram.com/adspmrv/?img_index=1" target='_blank'><BsInstagram  className="w-[30px] h-10 text-green-600 "/></a>
      <a  href="https://www.youtube.com/@assembleiadedeussemeandoap7249" target='_blank'><BsYoutube className="w-[30px] h-10 text-green-600 "/></a>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-green-600 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center gap-4 text-[15px] font-semibold
         cursor-pointer items-center text-center  absolute top-0 left-0 w-[100%]  h-auto bg-green-900  text-green-200 ">
         <li className=" hover:text-white  border-b-2 border-green-200 w-[30%]"><a href="#inicio">Inicio</a></li>
         <li className=" hover:text-white   border-b-2 border-green-200 w-[30%]"><a href="#igreja">Igreja</a></li>
         <li className=" hover:text-white  border-b-2 border-green-200 w-[30%] "><a href="#pastor">Pastor</a></li>
         <li className=" hover:text-white  border-b-2 border-green-200 w-[30%]"><a href="#horario">Horário</a></li>
         <li className=" hover:text-white  border-b-2 border-green-200 w-[30%]"><a href="#missionaria">Missionaria</a></li>
         <li className=" hover:text-white  border-b-2 border-green-200 w-[30%]"><a href="#radio">Radio</a></li>
         <li className=" hover:text-white  border-b-2 border-green-200 w-[30%]"><a href="#pix">Oferte</a></li>
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


