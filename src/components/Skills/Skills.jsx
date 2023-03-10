import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const languages = [
    {
      image: "https://i.ibb.co/pQZj33v/5847f40ecef1014c0b5e488a.png",
      language: "Firebase",
    },
    {
        image: "https://i.ibb.co/yBRbj9J/5847f5bdcef1014c0b5e489c.png",
        language: "HTML"
    },
    {
        image: "https://i.ibb.co/whTbmLq/kisspng-web-development-cascading-style-sheets-css3-html-5ae480845f38f3-0110241015249245483901.png",
        language: "CSS"
    },
    {
        image: "https://i.ibb.co/f8R6xWt/kisspng-javascript-scalable-vector-graphics-logo-encapsula-javascript-le-ekran-grnts-almak-alpere-5b.png",
        language: "JavaScript"
    },
    {
        image: "https://i.ibb.co/yskBYNz/5a36954d40bea2-0735336615135266052652.png",
        language: "C"
    },
    {
        image: "https://i.ibb.co/nDY0fqg/kisspng-responsive-web-design-bootstrap-sass-cascading-sty-framework-5acb894bc4c191-9841223815232883.png",
        language: "Bootstrap"
    },
    {
        image: "https://i.ibb.co/F7bDJJd/kisspng-logo-scalable-vector-graphics-computer-icons-porta-sass-logos-download-5c59c780d82aa0-017842.png",
        language: "SASS"
    },
    {
        image: "https://i.ibb.co/MhRPjrc/tailwind-css-icon.png",
        language: "Tailwind Css"
    },
    {
        image: "https://i.ibb.co/KXQLD1j/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457-3471941815281223426081.png",
        language: "React.js"
    },
    {
      image: "https://i.ibb.co/P1d7jSw/mongodb-original-wordmark-logo-icon-146425.png",
      language: "MongoDB"
    },
    {
      image: "https://i.ibb.co/YfDQNyq/Expressjs.png",
      languaje: "Express.Js"
    },
    {
      image: "https://i.ibb.co/xS7C56B/1200px-Node-js-logo-svg.png",
      language: "Node.Js"
    },
    {
      image: "https://i.ibb.co/zmkrMx7/typescript-original-logo-icon-146317.png",
      languaje: "TypeScript"
    }
  ];

  const {ref, inView} = useInView();





  return (
    <div className="min-h-screen relative" id="skills">
      <motion.div 
            initial={ inView ? { opacity: 0, scale: 0.5 } : {opacity: 0, scale: 0}}
            animate={ inView ? { opacity: 1, scale: 1 } : {opacity: 0, scale: 0}}
            transition={ inView ? { duration: 1} : {duration: 0}}
          >
        <div className="min-h-screen container mx-auto my-auto flex flex-col justify-center mb-20">
      <h2 className="text-center text- font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2675FF] animate-pulse mb-16 ">
        SKILLS
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-3/4 place-items-center mx-auto gap-12 mt-20 " ref={ref}>
        {languages.map((language) => {
          return (
            <div className="w-max h-max p-2 hover:shadow-md rounded-xl hover:scale-105 hover:duration-500">
              <img
                src={language.image}
                alt=""
                className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
              />
            </div>
          );
        })}
      </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
