import React from 'react'

const Proyect = ({data}) => {
  return (
    <div className='w-4/5 lg:w-full bg-gray-900 rounded-lg p-3 my-auto shadow-xl hover:scale-[1.03] hover:duration-500 hover:shadow-[#2675FF]' id='proyects'>
        <div className='flex flex-col'>
          <img src={data.image} alt="" className='w-full object-contain rounded-md' />
          <div>
            <h2 className='text-center text-xl text-white font-semibold my-5 lg:text-2xl hover:text-[#2675FF] hover:animate-pulse'>{data.proyect}</h2>
            <div className='flex justify-center w-full flex-wrap mx-auto gap-2 lg:gap-4 my-5 h-20 items-center'>
              {
                data.utilities.map((utilitie) => {
                  return (
                    <div className='border-[#2675FF] animate-pulse border px-3 rounded-md text-white text-sm md:text-base h-max'>{utilitie}</div>
                  )
                })
              }
            </div>
            <div className='grid grid-cols-2 w-10/12 md:w-3/4 mx-auto gap-2 lg:gap-8 my-5'>
            <a href={data.github}><button className='border-[#2675FF] border text-white bg-transparent p-2 w-full rounded-lg hover:bg-[#2675FF]'>Github</button></a>
            <a href={data.url}><button className='border-[#2675FF] border text-white bg-transparent p-2 w-full rounded-lg hover:bg-[#2675FF]'>WebSite</button></a>
            </div>
          </div>
        </div>

    </div>

  )
}

export default Proyect