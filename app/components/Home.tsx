'use client'
import React, { useEffect } from 'react'
import Hero from './hero/Hero'
import Options from './pastor/Pastor'
import BestBurguer from './BestFood/bestBurguer'
import Delivery from './MissionariaJaq/Delivery'
import Team from './team/Team'
import Email from './senEmail/Email'
import Footer from './footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Missionaria from './Missionaria/Missionaria'
import Radio from '../radio/Radio'
import Visite from './visite/Visite'
import RadioPhone from './RadioAdsp/RadioPhone'



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
      <Radio/>  
      <Options/>
      <Missionaria/>
      <BestBurguer/>
      <Visite/>
      <Delivery/>
      <RadioPhone/>
      <Team/>
      <Email/>
      <Footer/>
    </div>
  )
}

export default Home