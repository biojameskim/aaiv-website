import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NSO from './pages/NSO';
import LargeGroup from './pages/LargeGroup'
import SmallGroup from './pages/SmallGroup';
import Contact from './pages/Contact';
import Church from './pages/Church';
import Fellowship from './pages/Fellowship';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/nso' element={<NSO/>} />
        <Route path='/large-group' element={<LargeGroup/>} />
        <Route path='/small-group' element={<SmallGroup/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/church' element={<Church/>} />
        <Route path='/fellowship' element={<Fellowship/>} />
      </Routes>
    </Router>
  );
}

export default App;
