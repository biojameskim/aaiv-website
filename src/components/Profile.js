import './css/Profile.css';
import React from 'react';

export default function Profile({isMobile=false, image=null, title='', text='', email=''}) {
  return <div className="profile-container">
    <a href={"mailto: " + email}>
        <img className={`${isMobile ? 'profile-img-mobile' : 'profile-img'}`} src={image} alt="amy"></img>
    </a>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>

}
