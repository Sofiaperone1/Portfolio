import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import ResumeVideo from './views/ResumeVideo/ResumeVideo'; 

function App() {


  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<ResumeVideo />} />
    </Routes>
    </div>
    
  );
}

export default App;