import React, { useEffect, useState, useRef } from 'react';
import './css/Home.css';
import home_image from '../assets/home/home-img.png';
import vision_image from '../assets/home/vision.svg';
import Footer from '../components/Footer';

export default function Home({ isMobile = false }) {
    const [isVisible1, setVisible1] = useState(false);
    const [isVisible2, setVisible2] = useState(false);

    const visionRef = useRef();
    const campusRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisible1(entry.isIntersecting);
                    }
                }
            });
        });
        observer.observe(visionRef.current);

        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisible2(entry.isIntersecting);
                    }
                }
            });
        });
        observer2.observe(campusRef.current);
    }, []);

    return <div className="main-container">
        {!isMobile ?
            <div className="home-title-container">
                <div className="text-container">
                    <h1>Asian American Intervarsity</h1>
                    <p style={{ padding: 0, margin: 0, }}>@Cornell University</p>
                </div>
                <img className="home-image" src={home_image} alt="home"></img>
            </div> :
            <div className={`home-title-container home-title-container-mobile`}>
                <img className="home-image" src={home_image} alt="home"></img>
                <div className="text-container">
                    <h1>Asian American Intervarsity</h1>
                    <p style={{ padding: 0, margin: 0, }}>@Cornell University</p>
                </div>
            </div>
        }
        <div className={`campus-container fade-in-section ${isMobile ? 'campus-container-mobile' : ''} ${isVisible2 ? 'is-visible' : ''}`} ref={campusRef}>
            <div className="text-container">
                <h1>Who We Are</h1>
                <p>Asian American InterVarsity (AAIV) is a Christian Fellowship at Cornell University. We seek to share the incredible life that is found in God with those who identify with an Asian American background as well as serve the overall community at Cornell. However, you don’t have to be Asian American or Christian to be a part of AAIV or to come to any of our events! We’d love to meet you no matter what your background!</p>
            </div>
        </div>
        <div className={`vision-container fade-in-section ${isMobile ? 'vision-container-mobile' : ''} ${isVisible1 ? 'is-visible' : ''}`} ref={visionRef}>
            <div className="text-container">
                <h1>Our Vision</h1>
                <p>
                    Our vision at AAIV is to establish a witnessing, Christ-centered community at Cornell.
                </p>
            </div>
            <img className="vision-image" src={vision_image} alt="vision"></img>
        </div>
        <Footer />
    </div>

}

