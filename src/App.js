import React, { useRef } from 'react';
import './App.css';
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Portfolio from "./components/Portfolio/Portfolio"
import Tools from "./components/Tools/Tools"
import Home from './views/Home';

function App() {


  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;