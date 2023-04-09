import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Aboutme from './pages/Aboutme';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Workshops from './pages/Workshops';
import Contactme from './pages/Contactme';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>

    <Route path="Aboutme" element={<Aboutme/>}/>
    <Route path="Qualification" element={<Qualification/>}/>
    <Route path="Skills" element={<Skills/>}/>
    <Route path="Hobbies" element={<Hobbies/>}/>
    <Route path="Experience" element={<Experience/>}/>
    <Route path="Projects" element={<Projects/>}/>
    <Route path="Certifications" element={<Certifications/>}/>
    <Route path="Workshops" element={<Workshops/>}/>
    <Route path="Contactme" element={<Contactme/>}/>



      </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
