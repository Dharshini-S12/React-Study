import './App.css';
import { Routes , Route  } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';

import Arrayelements from './Components/Arrayelements';
import Conditional_Rendering from './Components/Conditional_Rendering';
import Hooks from './Components/Hooks';
import Usestate from './Components/Usestate';

function App() {
  return (
    <>
       <Navbar></Navbar>
       <Routes>
           <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='mapping' element={<Arrayelements />} />
          <Route path='conditionalrender' element={<Conditional_Rendering/>} />
          <Route path='hooks' element={<Hooks/>} />
          <Route path='usestate' element={<Usestate/>} />
       </Routes>
    </>
    
  );
}

export default App;
