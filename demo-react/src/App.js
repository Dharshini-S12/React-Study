import './App.css';
import { Routes , Route  } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Skill from './Components/Skill';
import Arrayelements from './Components/Arrayelements';

function App() {
  return (
    <>
    <Arrayelements/>
       <Navbar></Navbar>
       <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='skill' element={<Skill />} />
    </Routes>
    </>
    
  );
}

export default App;
