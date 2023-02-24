import React, {useEffect} from 'react';
import './css/Home.css';
import home_image from '../assets/home/home-img.svg';
import vision_image from '../assets/home/vision.svg';
import Footer from '../components/Footer';

export default function Home() {
    const [isVisible1, setVisible1] = React.useState(false);
    const [isVisible2, setVisible2] = React.useState(false);

    const visionRef = React.useRef();
    const campusRef = React.useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible1(entry.isIntersecting));
        });
        observer.observe(visionRef.current);
    }, []);
    useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible2(entry.isIntersecting));
    });
    observer.observe(campusRef.current);
    }, []);

  return <div className="main-container">
      <div className="home-title-container">
          <div className="text-container">
              <h1>Asian American Intervarsity</h1>
              <p style={{padding: 0, margin: 0,}}>@Cornell University</p>
          </div>
          <img className="home-image" src={home_image} alt="home_image"></img>
      </div>
      <div className={`vision-container fade-in-section ${isVisible1 ? 'is-visible' : ''}`} ref={visionRef}>
          <div className="text-container">
              <h1>Our Vision</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <img className="vision-image" src={vision_image} alt="vision_image" style={{width: '25vw', height: 'auto', padding:'8%', marginTop: '10%',}}></img>
      </div>
      <div className={`campus-container fade-in-section ${isVisible2 ? 'is-visible' : ''}`} ref={campusRef}>
          <div className="text-container">
              <h1>Campus Fellowship @ Cornell</h1>
              <p>Asian American InterVarsity (AAIV) is a Christian Fellowship at Cornell University. We seek to share the incredible life that is found in God with those who identify with an Asian American background as well as serve the overall community at Cornell. However, you don’t have to be Asian American or Christian to be a part of AAIV or to come to any of our events! We’d love to meet you no matter what your background!</p>
          </div>
      </div>
      <Footer/>
  </div>
  
}

