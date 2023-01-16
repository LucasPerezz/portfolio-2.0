import React from "react";
import NavbarDesk from "./Navbar/NavbarDesk";
import Presentation from "./Presentation/Presentation";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";

const Home = () => {
  return (
    <>
      <NavbarDesk />
      <Presentation />
      <Skills />
      <Portfolio />
    </>
  );
};

export default Home;
