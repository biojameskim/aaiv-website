import React, {useState, useEffect, useRef} from 'react';
import './css/Contact.css';
import contact_img from '../assets/contact/contact-img.svg';
import instagram from '../assets/footer/instagram.svg';
import facebook from '../assets/footer/facebook.svg';
import email from '../assets/footer/email.svg';
import amy from '../assets/contact/amy.svg';
import ben from '../assets/contact/ben.svg';
import jonah from '../assets/contact/jonah.svg';
import Footer from '../components/Footer';

export default function Contact({isMobile=false}) {
  const [isVisibleAmy, setVisibleAmy] = useState(false);
  const [isVisibleBen, setVisibleBen] = useState(false);
  const [isVisibleJonah, setVisibleJonah] = useState(false);
  const amyRef = useRef();
  const benRef = useRef();
  const jonahRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisibleAmy(entry.isIntersecting));
    });
    observer.observe(amyRef.current);

    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisibleBen(entry.isIntersecting));
    });
    observer2.observe(benRef.current);

    const observer3 = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisibleJonah(entry.isIntersecting));
    });
    observer3.observe(jonahRef.current);
  }, []);

  return <div className="main-container">
      <div className="contact-title-container">
          <img className="contact-img" src={contact_img} alt="contact-img"></img>
          <div className="text-container">
              <h1>Contact Us</h1>
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
      </div>
      <div className="exec-container">
          <h1>Connect with an Exec Member</h1>
          <div className="exec-members">
              <div className={`exec fade-in-section ${isVisibleAmy ? 'is-visible' : ''}`} ref={amyRef}>
                  <img className="exec-image" src={amy} alt="amy"></img>
                  <div className="exec-title">
                      <h3>Amy Ge (aqg4)</h3>
                      <a href="mailto: aqg4@cornell.edu">
                          <img className="exec-icon" src={email} alt="email-icon"></img>
                      </a>
                  </div>
                  
                  <p>Small Group Coordinator</p>
              </div>
              <div className={`exec fade-in-section ${isVisibleBen ? 'is-visible' : ''}`} ref={benRef}>
                  <img className="exec-image" src={ben} alt="amy"></img>
                  <div className="exec-title">
                      <h3>Ben Loong (bjl99)</h3>
                      <a href="mailto: bjl99@cornell.edu">
                          <img className="exec-icon" src={email} alt="email-icon"></img>
                      </a>
                  </div>
                  <p>Outreach Coordinator</p>
              </div>
              <div className={`exec fade-in-section ${isVisibleJonah ? 'is-visible' : ''}`} ref={jonahRef}>
                  <img className="exec-image" src={jonah} alt="amy"></img>
                  <div className="exec-title">
                      <h3>Jonah Bernand (jb2528)</h3>
                      <a href="mailto: bjl99@cornell.edu">
                          <img className="exec-icon" src={email} alt="email-icon"></img>
                      </a>
                  </div>
                  <p>Large Group Coordinator</p>
              </div>
          </div>
      </div>
      <div className="email-container">

      </div>
      <Footer/>
  </div>;
}