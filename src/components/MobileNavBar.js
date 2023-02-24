import React, {useRef, useState} from 'react';
import './css/MobileNavBar.css';
import logo from '../assets/navbar/Logo.svg';
import {  Link, useLocation } from "react-router-dom";

export default function MobileNavBar() {
  const navRef = useRef();
  const [open, setOpen] = useState(false);
  return <div className="mob-navbar-container">
      <Link to="/">
          <img className="mob-logo" src={logo} alt="Logo"/>
      </Link>
        <input className="side-menu" type="checkbox" id="side-menu" checked={open} onClick={()=>setOpen(!open)}/>
        <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
        <nav className="nav">
            <ul className="menu">
                <li><Link to="/" onClick={()=>setOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={()=>setOpen(false)}>About</Link></li>
                <li className="subnav">
                    <p className="subnavbtn">Events</p>
                    <div className="subnav-content">
                        <Link to="/nso" onClick={()=>setOpen(false)}>NSO</Link>
                        <Link to="/large-group" onClick={()=>setOpen(false)}>Large Group</Link>
                        <Link to="/small-group" onClick={()=>setOpen(false)}>Small Group</Link>
                    </div>
                </li>
                <li className="subnav">
                    <p className="subnavbtn">Connect</p>
                    <div className="subnav-content">
                        <Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
                        <Link to="/church" onClick={()=>setOpen(false)}>Church</Link>
                        <Link to="/fellowship" onClick={()=>setOpen(false)}>Fellowships</Link>
                    </div>
                </li>                
            </ul>
        </nav>
  </div>
}