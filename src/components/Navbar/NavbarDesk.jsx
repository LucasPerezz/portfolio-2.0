import React from 'react'

const NavbarDesk = () => {
  return (
    <div className='fixed top-0 hidden md:block lg:h-24 z-20 w-full bg-[#08070b] shadow-xl'>
        <div className='flex h-24 my-auto justify-end w-11/12 '>
            <ul className='flex gap-8 lg:h-24 my-auto items-center justify-end'>
                <li className='text-white'>Home</li>
                <li className='text-white'>Skills</li>
                <li className='text-white'>Portfolio</li>
                <li className='text-white'>Download CV</li>
                <li className='text-white'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavbarDesk