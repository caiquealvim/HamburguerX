import Image from 'next/image'
import React from 'react'
import templo from '@/public/images/templo.jpg'
import templo2 from '@/public/images/templo2.jpg'
import QrCode from "@/public/images/qrcode.png"

const TemploAdsp = () => {
  return (
    <div data-aos="fade-up"  data-aos-duration="1000"  id='pix' className='pt-[5rem] pb-[5rem] bg-gradient-to-r from-lime-900 to-gray-800 text-white '>
        <div className='text-center' data-aos="zoom-out-right"  data-aos-duration="2000">
            <h1 className='text-[30px] sm:text-[28px] md:text-[35px] text-slate-300 md:w-[60%] mx-auto font-bold'>
                Ajude a Construir o Novo Templo da <span className='text-green-600'>ADSP </span> 
            </h1>
            <p className='opacity-70 w-[65%] md:[50%] mx-auto mt-6 text-white font-semibold'>
            Jesus olhou e viu os ricos colocando suas contribuições nas caixas de ofertas. Viu também uma viúva pobre colocar duas pequeninas moedas de cobre. E disse: "Afirmo que esta viúva pobre colocou mais do que todos os outros. Todos esses deram do que lhes sobrava; mas ela, da sua pobreza, deu tudo o que possuía para viver".
            Lucas 21:1-4
            </p>
            <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mx-auto pt-8 gap-8'>
                <div className='flex flex-col items-center gap-4'>
                    Coloque a camera no QR code e faça a sua contribuição
                    <Image src={QrCode} alt="Qr-code" width={300} height={300} className='w-[200px] h-[200px]'/>
                </div>
                <Image src={templo} alt='igreja' width={600} height={600} className=' rounded-xl'/>
                <Image src={templo2} alt='igreja' width={600} height={600} className='h-[33vh] rounded-xl'/>
            </div>
 

        </div>

    </div>
  )
}

export default TemploAdsp

