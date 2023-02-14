import React, {useState} from 'react';
import './css/Dropdown.css';
import {  Link } from "react-router-dom";

export default function Dropdown({items, links=[], hidden=true}) {
  const [isHidden, setIsHidden] = useState(hidden);
  return <div className="Dropdown" onMouseEnter={() => setIsHidden(false)} onMouseLeave={() => setIsHidden(true)}>
      <ul className="items" style={(isHidden) ? {display: 'none'} : {display: 'flex'}}>
          {items.map((item, index) => (
            <li className="item" key={item}>
            <Link to={links[index]} style={{ color: 'inherit', textDecoration: 'inherit'}}>{item}</Link>
        </li>
          ))}
      </ul>
  </div>
}