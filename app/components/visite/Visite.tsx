import React from 'react'

const Visite = () => {
  return (
    <div className='w-[100%] h-auto bg-gradient-to-r from-slate-950  to-lime-950 pb-10 pt-10 text-white'>
        <h1 className='text-center text-4xl mb-10'>ADSP chama voce para receber uma palavra de Deus</h1>
         <div className='w-[50%] grid grid-cols-1 md:grid-cols-2  justify-center items-center mx-auto '>
            <div>
            <video src="/video/video.mp4" autoPlay loop muted width={300} height={300} className='w-[20rem] h-[30rem]' />
            </div>

            <div className='flex flex-col gap-3'>
              <ul>
              <i><p className='text-[15px] md:text-2xl pb-3'>Quarta Feira-Culto de Doutrina 19:30H</p></i>
              <div className=' border-b-2 w-[100%] bg-gradient-to-r from-lime-600  to-lime-950 px-1 py-1 border-none rounded-md mb-[3rem]'></div>
              <i><p className='text-[15px] md:text-2xl pb-3'>Sexta Feira-Culto de Louvor  19:30H</p></i>
              <div className=' border-b-2 w-[100%] bg-gradient-to-r from-lime-600  to-lime-950 px-1 py-1 border-none rounded-md mb-[3rem]'></div>
              <i><p className='text-[15px] md:text-2xl pb-3'>Domingo-Escola Biblibica Domin. 3:00H</p></i>
              <div className=' border-b-2 w-[100%] bg-gradient-to-r from-lime-600  to-lime-950 px-1 py-1 border-none rounded-md mb-[3rem]'></div>
              <i><p className='text-[15px] md:text-2xl pb-3'>Domingo-Culto de Adoração  18:30H</p></i>
              <div className=' border-b-2 w-[100%] bg-gradient-to-r from-lime-600  to-lime-950 px-1 py-1 border-none rounded-md mb-[3rem]'></div>
              </ul>
              
          
              
                   
            </div>


            
           
        </div>
</div>
  )
}

export default Visite