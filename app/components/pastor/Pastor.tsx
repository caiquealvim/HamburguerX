import React from 'react'
import Image from 'next/image'
import pastor from '@/public/images/pastor21.png'
import Logo from'@/public/images/logoigreja.png'

const Pastor = () => {
  return (
    <div className='pt-10 h-auto md:h-[40vh] pb-10 bg-gradient-to-r from-lime-800 to-slate-950 text-white'>
      
      <div className='w-[80%] h-auto mx-auto grid items-center grid-cols-1 md:grid-cols-2  gap-[2rem] '>
        <div className='flex items-center justify-center'>
        <Image src={pastor} alt='pastor' width={600} height={600} className='ml-20 lg:pt-[1.4rem] xl:-mt-[4.5rem]'/>
        <Image src={Logo} alt='pastor' width={200} height={200} className='hidden md:flex -mt-[9rem] opacity-40 md:-ml-[5rem]'/>
        </div>
        <div className=' md:w-[80%] text-center md:-mt-[8rem] flex flex-col justify-center items-center mx-auto'>
          <h1>Olá, seja bem vindo Sou o </h1>
          <span className='text-3xl font-semibold text-green-200'>Pastor Almeida</span>
          <div className='pt-5 flex items-center text-center justify-center '>
          <p>
          Pastoreiem o rebanho de Deus que está aos seus cuidados. 
          Olhem por ele, não por obrigação, mas de livre vontade, como Deus quer. 
          Não façam isso por ganância, mas com o desejo de servir. Não ajam como dominadores dos que 
          foram confiados a vocês, mas como exemplos para o rebanho. Quando se manifestar o Supremo Pastor, 
          vocês receberão a imperecível coroa da glória.
          1 Pedro 5:2-4

    

          </p>
          </div>
        
        </div>


      </div>

      </div>
  )
}

export default Pastor