import './css/Footer.css';
import React from 'react';
import instagram from '../assets/footer/instagram.svg';
import facebook from '../assets/footer/facebook.svg';
import email from '../assets/footer/email.svg';

export default function Footer() {
  return <div className="footer-container">
    <div className="icons">
        <a href="https://www.instagram.com/cornellaaiv/" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={instagram} alt="insta-icon"></img>
        </a>
        <a href="https://www.facebook.com/cornellaaiv/" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={facebook} alt="fb-icon"></img>
        </a>
        <a href="mailto: cornellaaiv@gmail.com">
            <img className="icon" src={email} alt="email-icon"></img>
        </a>
    </div>
  </div>
}