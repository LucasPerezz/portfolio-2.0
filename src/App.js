import './App.css';
import Navbar from './components/Navbar/Navbar';
import Presentation from './components/Presentation/Presentation';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <>
    {/* <NavbarDesk /> */}
    <Navbar />
      <Presentation />
      <Skills />
      <Portfolio />
    </>
  );
}

export default App;
