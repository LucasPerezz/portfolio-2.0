import React from "react";
import NavbarDesk from "./Navbar/NavbarDesk";
import Presentation from "./Presentation/Presentation";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import { motion, useScroll } from "framer-motion"

const Home = () => {

  const { scrollYProgress } = useScroll();

  return (
    <>
    <motion.div style={{ scaleX: scrollYProgress }} className="progress-bar z-50"></motion.div>
      <NavbarDesk />
      <Presentation />
      <Skills />
      <Portfolio />
    </>
  );
};

export default Home;
