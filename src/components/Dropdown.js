import React, {useState} from 'react';
import './css/Dropdown.css';
import {  Link } from "react-router-dom";

export default function Dropdown({items, links=[], light=false}) {
  const [isHidden, setIsHidden] = useState(true);
  return <div className="Dropdown" onMouseEnter={() => setIsHidden(false)} onMouseLeave={() => setIsHidden(true)}>
      <ul className={`items ${isHidden ? 'hidden' : 'show'} ${light ? 'items-light' : ''}`}>
          {items.map((item, index) => (
            <li className={`item ${isHidden ? 'hidden' : 'show'}`} key={item}>
            <Link to={links[index]} style={{ color: 'inherit', textDecoration: 'inherit'}}>{item}</Link>
        </li>
          ))}
      </ul>
  </div>
}