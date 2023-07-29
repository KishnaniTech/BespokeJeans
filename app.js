import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Order from './Order';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Order />
      <Contact />
    </div>
  );
}

export default App;
