import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './components/App.css'

import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
// import Home from './components/home'
import Characters from './components/characters';
import Home from "./components/routes"
import DetailedInfoAboutCharacters from './components/detailedInfoAboutCharacters'
import About from './components/About'

function App() {

  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route  path="characters/" element={<Characters />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/characters/:id" element={<DetailedInfoAboutCharacters />} />
      </Routes>
      </div>
  )

}

export default App

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);