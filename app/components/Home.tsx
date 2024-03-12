'use client'
import React, { useEffect } from 'react'
import Hero from './hero/Hero'
import Options from './options/Options'
import BestBurguer from './BestFood/bestBurguer'
import Delivery from './delivery/Delivery'
import Team from './team/Team'
import Email from './senEmail/Email'
import Footer from './footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {

  useEffect(()=>{
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out-cubic',
        once: true,
        anchorPlacement: 'top-center'
      });
      }
      initAOS();
  },[])

  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Options/>
      <BestBurguer/>
      <Delivery/>
      <Team/>
      <Email/>
      <Footer/>
    </div>
  )
}

export default Home