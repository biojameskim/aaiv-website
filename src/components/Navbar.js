import React, {useState, useEffect} from 'react';
import './css/Navbar.css';
import logo from '../assets/navbar/Logo.svg';
import {  Link, useLocation } from "react-router-dom";
import Dropdown from './Dropdown';

export default function Navbar() {
  // const [tab, setTab] = useState('/');
  const location = useLocation();
  // useEffect(() => {
  //   setTab(location.pathname);
  // }, [location])

  function getTabColor(tab) {
    switch (location.pathname) {
      case '/': return tab==='Home' ? 'black' : 'gray';
      case '/about': return tab==='About' ? 'black' : 'gray';
      case '/nso':
      case '/large-group':
      case '/small-group': return tab==='Events' ? 'black' : 'gray';
      case '/contact':
      case '/church':
      case '/fellowship': return tab==='Connect' ? 'black' : 'gray';
      default: return 'gray';
    } 
  }
  return (
    <div className="Navbar">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo"/>
        </Link>
        <ul className="tabs">
            <li className="tab" style={{color: getTabColor('Home')}}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link>
            </li>
            <li className="tab" style={{color: getTabColor('About')}}>
                <Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit'}}>About</Link>
            </li>
            <li className="tab" style={{color: getTabColor('Events')}}>
                <Link to="/nso" style={{ color: 'inherit', textDecoration: 'inherit'}}>Events</Link>
                <Dropdown items={['NSO', 'Large Group', 'Small Group']} links={['/nso', '/large-group', '/small-group']}/>
            </li>
            <li className="tab" style={{color: getTabColor('Connect')}}>
                <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}}>Connect</Link>
                <Dropdown items={['Contact', 'Church', 'Fellowships']} links={['/contact', '/church', '/fellowship']}/>
            </li>
        </ul>
    </div>
  )
}