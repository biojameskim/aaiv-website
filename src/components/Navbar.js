import './css/Navbar.css';
import logo from '../assets/navbar/Logo.svg';
import {  Link, useLocation } from "react-router-dom";
import Dropdown from './Dropdown';
import React from 'react';

export default function Navbar() {
  const location = useLocation();
  let light = getLightMode();
  let default_color = light ? 'white' : 'gray';
  let hover_color = light ? 'lightgray' : 'black';
  // updateLightMode();
  function updateLightMode() {
    light = getLightMode();
    default_color = light ? 'white' : 'gray';
    hover_color = light ? 'lightgray' : 'black';
  }

  function getLightMode() {
    switch (location.pathname) {
      case '/': 
      case '/nso':
      case '/small-group':
      case '/contact':
        return false;
      case '/about': 
      case '/large-group':
      case '/church':
      case '/fellowship':
        return true;
      default: return false;
    } 
  }
  function getTabColor(tab) {
    switch (location.pathname) {
      case '/': return tab==='Home' ? hover_color : default_color;
      case '/about': return tab==='About' ? hover_color : default_color;
      case '/nso':
      case '/small-group': return tab==='Events' ? hover_color : default_color;
      case '/large-group':
      case '/contact':
      case '/church':
      case '/fellowship': return tab==='Connect' ? hover_color : default_color;
      default: return 'gray';
    } 
  }
  return (
    <div className="Navbar">
        <a href="https://intervarsity.org/" target="_blank" rel="noopener noreferrer">
          <img className="logo" src={logo} alt="Logo"/>
        </a>
        <ul className={`tabs ${light ? 'tabs-light' : ''}`}>
            <li className="tab" style={{color: getTabColor('Home')}}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => updateLightMode()}>Home</Link>
            </li>
            <li className="tab" style={{color: getTabColor('About')}}>
                <Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => updateLightMode()}>About</Link>
            </li>
            <li className="tab" style={{color: getTabColor('Events')}}>
                <Link to="/large-group" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => updateLightMode()}>Events</Link>
                {/* <Dropdown items={['Outreach', 'Large Group', 'Small Group']} links={['/nso', '/large-group', '/small-group']} light={light}/> */}
                <Dropdown items={['Large Group', 'Small Group']} links={['/large-group', '/small-group']} light={light}/>

            </li>
            <li className="tab" style={{color: getTabColor('Connect')}}>
                <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => updateLightMode()}>Connect</Link>
                <Dropdown items={['Contact', 'Church', 'Fellowships']} links={['/contact', '/church', '/fellowship']} light={light}/>
            </li>
        </ul>
    </div>
  )
}