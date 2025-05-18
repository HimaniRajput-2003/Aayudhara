
import './App.css';
import React from 'react';

import { Routes,Route} from 'react-router-dom';  
import Home from './components/home/home.js';
import Second from './components/home/Second.js';
<<<<<<< HEAD
import Register from './components/Register.js';
=======
import DonorSearch from './components/home/DonorSearch.js';
>>>>>>> 6c536a9bfa0f14e50c048fca74658be489a118e5



function App() {
  
  return (
    <div className="App">
       <Routes>
  <Route path="/"  element={<Home/>} />
  <Route path="/Second" element={<Second/>} />
<<<<<<< HEAD
  <Route path="/Register" element={<Register/>} />
=======
  <Route path="/DonorSearch" element={<DonorSearch/>} />
>>>>>>> 6c536a9bfa0f14e50c048fca74658be489a118e5
       </Routes>
    </div>

  );
    
}

export default App;
