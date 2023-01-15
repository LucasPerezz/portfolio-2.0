import React from 'react'
import Particle from '../Particle/Particle'
import LINKEDIN from '../../assets/linkedin-logo.png'
import GITHUB from '../../assets/gh-logo.png'


const Presentation = () => {
  return (
    <>
        <div className='absolute top-0 -z-50 '><Particle /></div>
        <div className='min-h-screen container w-10/12 lg:w-4/5 z-10 mx-auto relative'>
          <div className='flex flex-col gap-3 justify-center min-h-screen text-justify'>
            <p className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold'>Lucas Tomas Perez</p>
            <p className='text-gray-300 text-sm sm:text-lg lg:text-xl max-w-2xl text-justify'>I'm <span className='text-[#2675FF] animate-pulse'>FrontEnd Developer</span> specialized in creating modern websites and creative solutions for web.</p>
            <div className='flex gap-8'>
              <img src={GITHUB} alt="" className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14'/>
              <img src={LINKEDIN} alt="" className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14'/>
            </div>
            <div className='mt-10 flex justify-center md:block'>
              <button className='border border-[#2675FF] text-white px-4 py-2 shadow-md rounded-md shadow-[#2675FF]'>Download CV</button>
            </div>
          </div>
          <div className='w-full flex justify-center absolute bottom-14'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 animate-bounce z-40">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
          </div>
        </div>
        
    </>
  )
}

export default Presentation