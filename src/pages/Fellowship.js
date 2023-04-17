import React from 'react';
// import urbana1 from '../assets/fellowship/urbana1.svg';
// import urbana2 from '../assets/fellowship/urbana2.svg';
import fellowship_img from '../assets/fellowship/fellowship_img.png';
import fellowship_img2 from '../assets/fellowship/fellowship_img2.png';
import './css/Fellowship.css';
import Footer from '../components/Footer';

export default function Fellowship({ isMobile = false }) {
    return <div className="main-container">
        <div className={`fellowship-container ${isMobile ? 'fellowship-container-mobile' : ''}`}>
            <div className="fellowship-left">
                <img className="fship1" src={fellowship_img} alt="fellowship1"></img>
                <img className="fship2" src={fellowship_img2} alt="fellowship2"></img>
            </div>
            <div className="fellowship-right">
                <div className="text-container">
                    <h1>Campus Fellowships</h1>
                    <p>There are many other Christian campus fellowships like AAIV at Cornell, and we work with them to advance the Gospel to reach every corner of campus and glorify God. Feel free to check them out!</p>
                </div>
            </div>
        </div>
        <div className="fellowship-section">
            <div className={`text-container ${isMobile ? 'text-container-mobile' : ''}`}>
                <h1>Find a Fellowship that's Right for You</h1><br></br>
                <a href='https://bethanycampuschurch.org/' target="_blank" rel="noopener noreferrer"><p>Bethany Christian Campus Church</p></a>
                <a href='https://www.christianunion.org/ministries/universities/cornell' target="_blank" rel="noopener noreferrer"><p>Christian Union</p></a>
                <a href='https://cbscornell.com/' target="_blank" rel="noopener noreferrer"><p>Chinese Bible Study</p></a>
                <a href='https://www.crucornell.com/' target="_blank" rel="noopener noreferrer"><p>CRU</p></a>
                <a href='https://cornellicf.weebly.com/' target="_blank" rel="noopener noreferrer"><p>Cornell International Christian Fellowship</p></a>
                <a href='https://www.emmausroadcornell.com/' target="_blank" rel="noopener noreferrer"><p>Emmaus Road</p></a>
                <a href='http://www.kccornell.org/' target="_blank" rel="noopener noreferrer"><p>Korean Church at Cornell</p></a>
                <a href='https://www.instagram.com/fca_cornell/' target="_blank" rel="noopener noreferrer"><p>Fellowship of Christian Athletes</p></a>
                <a href='https://graduatechristianfellowship.wordpress.com/' target="_blank" rel="noopener noreferrer"><p>Graduate Christian Fellowship</p></a>
            </div>
        </div>
        <Footer />
    </div>;
}