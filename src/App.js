
import './App.css';
import React from 'react';
import blood from './img/blood.png';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Ayuudhara</h1>
        <p>Your one-stop solution for all your needs.</p>
        <img src={blood} alt="Blood Donation" className='blood' width={400} height={380}></img>
        <button className="Next">Next</button>
       
       

        
      </header>
      <main>
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </main>
      <footer>
        <p>&copy; 2025 Ayuudhara. All rights reserved.</p>
      </footer>

         
    </div>
  );
}

export default App;
