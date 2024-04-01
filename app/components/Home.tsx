'use client'
import React, { useEffect } from 'react'
import Hero from './hero/Hero'
import Options from './pastor/Pastor'
import BestBurguer from './Conjuntos/ConjuntoAdsp'
import Delivery from './MissionariaJaq/Jaqueline'
import Team from './team/Team'
import Email from './Templo/TemploX'
import Footer from './footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Radio from './radio/Radio'
import Visite from './visite/Visite'
import RadioPhone from './RadioAdsp/RadioPhone'
import Pastor from './pastor/Pastor'
import ConjuntoAdsp from './Conjuntos/ConjuntoAdsp'
import TemploAdsp from './Templo/TemploX'




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
      <ConjuntoAdsp/>
      <Pastor/>
      <Visite/>
      <Delivery/>
      <RadioPhone/>
      <Team/>
      <TemploAdsp/>
      <Footer/>
    </div>
  )
}

export default Home