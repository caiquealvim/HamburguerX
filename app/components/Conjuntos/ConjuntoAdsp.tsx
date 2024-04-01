'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NewBurguer from './NovoConjunto';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };


const ConjuntoAdsp = () => {
  return (
    <div id='igreja' className='pt-[3rem] pb-[3rem] bg-gradient-to-r from-lime-900 to-gray-800'>
        <h1 data-aos="fade-up"  data-aos-duration="1000" className='heading font-bold'>Conheça os Conjuntos da <span className='text-green-600'>ADSP</span></h1>
        <div data-aos="zoom-out-right"  data-aos-duration="1000" className='w-[80%] h-auto mt-[4rem] mx-auto'>
            
        <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass='item'
        showDots={false}
         >

        <NewBurguer
            title="UMM"
            image ="/images/conjuntoHomens.jpeg"
            reviews = "Proclamadores de Louvores conjunto compostos pelos Irmãos."
            price = "União Masculina Missionaria"
            />
             <NewBurguer
            title="AIEB"
            image ="/images/conjuntoIrmas.jpeg"
            reviews = "Conjunto das irmãs da igreja semeando a palavra, mulheres de fé"
            price = "Conjunto Cantico Novo"
            />
           
           <NewBurguer
            title="Brilho Celeste"
            image ="/images/adolescentes.jpeg"
            reviews = "Brilho Celeste composto pelos adolescentes para gloria de Deus"
            price = "Conjunto dos Adolescentes"
            />
           
           <NewBurguer
            title="Jardim de Deus"
            image ="/images/Crianças.jpeg"
            reviews = "As crianças fazem parte do Conjunto Jardim de Deus,uma benção para Honra e Glória do Senhor jesus cristo"
            price = "JARDIM DE DEUS"
            />
            <NewBurguer
            title="UMADSP"
            image ="/images/mocidade .jpeg"
            reviews = "União de Mocidade Semeando a palavra composta pelos Jovens."
            price = "Conjuntos dos Jovens"
            />
           
           
           

        </Carousel>

       
       

        </div>
    </div>
  )
}

export default ConjuntoAdsp