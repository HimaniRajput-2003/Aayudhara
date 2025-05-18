
import './App.css';
import React from 'react';

import { Routes,Route} from 'react-router-dom';  
import Home from './components/home/home.js';
import Second from './components/home/Second.js';
import Register from './components/Register.js';



function App() {
  
  return (
    <div className="App">
       <Routes>
  <Route path="/"  element={<Home/>} />
  <Route path="/Second" element={<Second/>} />
  <Route path="/Register" element={<Register/>} />
       </Routes>
    </div>

  );
    
}

export default App;
