import React from 'react'
import Proyect from './Proyect'
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer'

const Portfolio = () => {

    const works = [
        {
            proyect: "Alaska Indumentaria",
            github: "https://github.com/LucasPerezz/alaskaIndumentaria-perez",
            url: "https://alaskaindumentaria.vercel.app/",
            utilities: ["React.js", "Semantic UI", "Firebase"],
            image: "https://i.ibb.co/Qk0ppLH/Opera-Captura-de-pantalla-2022-07-29-113632-alaskaindumentaria-vercel-app.png"
        },
        {
            proyect: "Jsports",
            github: "https://github.com/LucasPerezz/jsports",
            url: "https://jsports.vercel.app/",
            utilities: ["React.Js", "Tailwind Css", "Firebase"],
            image: "https://i.ibb.co/MSP10Hw/Opera-Captura-de-pantalla-2022-07-25-012746-localhost.png"

        },
        {
            proyect: "Next Games",
            github: "https://github.com/LucasPerezz/nextgames",
            url: "https://lucasperezz.github.io/nextgames/public/",
            utilities: ["JavaScript", "Css", "Html", "Firebase"],
            image: "https://i.ibb.co/P5Qkzw8/Opera-Captura-de-pantalla-2022-07-08-184443-127-0-0-1.png"

        },
        {
            proyect: "Portfolio - Version 1.0",
            github: "https://github.com/LucasPerezz/portfolio-lucas-perez",
            url:"https://lucasperez.vercel.app/",
            utilities: ["React.js", "Tailwind Css", "Firebase"],
            image: "https://i.ibb.co/3BT8WQT/portfolio-image.png"
        },
        {
            proyect: "Player 1",
            github: "https://github.com/LucasPerezz/player1",
            url: "https://player1-ejkqlqjru-lucasperezz.vercel.app/",
            utilities: ["React.js", "Tailwind Css"],
            image: "https://i.ibb.co/xGCYnZD/Captura.jpg"
        }
    ]

    const {ref, inView} = useInView();

  return (
    <div className='min-h-screen relative max-h-max' ref={ref}>
        <motion.div 
            initial={ inView ? { opacity: 0, scale: 0.5 } : {opacity: 0, scale: 0}}
            animate={ inView ? { opacity: 1, scale: 1 } : {opacity: 0, scale: 0}}
            transition={ inView ? { duration: 1.4} : {duration: 0}}
          >
        <div className='min-h-screen container mx-auto my-auto flex flex-col justify-center mb-60'>
            <h2 className='text-center text- font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2675FF] animate-pulse mb-16'>Portfolio</h2>
            <div className='flex flex-col justify-center items-center gap-10 md:grid md:grid-cols-2 xl:grid-cols-3 container min-h-max'>
                {works.map((work) => {
                    return <Proyect data={work} />
                })}
            </div>
        </div>
    </motion.div>
    </div>
  )
}

export default Portfolio