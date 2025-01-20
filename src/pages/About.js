import React, { useState, useEffect, useRef } from 'react';
import './css/About.css';
// import gallery1 from '../assets/about/about1.svg';
// import gallery2 from '../assets/about/about1(new).svg';
// import gallery3 from '../assets/about/about2(new).svg';
import about1 from '../assets/about/about12025.png';
import about2 from '../assets/about/about_22025.png';
import Footer from '../components/Footer';

export default function About({ isMobile = false }) {
  const [isVisible1, setVisible1] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  // const [isVisible3, setVisible3] = useState(false);
  const domRef1 = useRef();
  const domRef2 = useRef();
  // const domRef3 = useRef();
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
    observer.observe(domRef1.current);

    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.boundingClientRect.top > 0) {
          if (entry.isIntersecting) {
            setVisible2(entry.isIntersecting);
          }
        }
      });
    });
    observer2.observe(domRef2.current);

    // const observer3 = new IntersectionObserver(entries => {
    //   entries.forEach(entry => {
    //     if (entry.boundingClientRect.top > 0) {
    //         if (entry.isIntersecting) {
    //             setVisible3(entry.isIntersecting);
    //         }
    //       }
    //   });
    // });
    // observer3.observe(domRef3.current);
  }, []);

  return <div className="main-container">
    <div className="about-title-container">
      <h1>About</h1>
    </div>
    <div className={`${!isMobile ? 'about-section' : 'about-section-mobile'} fade-in-section ${isVisible1 ? 'is-visible' : ''}`} ref={domRef1} style={{ backgroundColor: '#e6f9ff' }}>
      <div className={`${!isMobile ? 'about-text' : 'about-text-mobile'} `}>
        <h1>What We Believe</h1>
        <p><b>We believe in:</b><br></br><br></br>
          The only true God, the almighty Creator of all things, <br></br>
          existing eternally in three persons <br></br>
          Father; Son; and Holy Spirit; full of love and glory. <br></br><br></br>

          The unique divine inspiration,<br></br>
          entire trustworthiness,<br></br>
          and authority of the Bible.<br></br><br></br>

          The value and dignity of all people:<br></br>
          created in God’s image to live in love and holiness,<br></br>
          but alienated from God and each other because of our sin and guilt,<br></br>
          and justly subject to God’s wrath.<br></br><br></br>

          Jesus Christ, fully human and fully divine,<br></br>
          who lived as a perfect example,<br></br>
          who assumed the judgment due sinners by dying in our place,<br></br>
          and who was bodily raised from the dead and ascended as Savior and Lord.<br></br><br></br>

          Justification by God’s grace to all who repent<br></br>
          and put their faith in Jesus Christ alone for salvation.<br></br><br></br>

          The indwelling presence and transforming power of the Holy Spirit,<br></br>
          who gives to all believers a new life and a new calling to obedient service.<br></br><br></br>

          The unity of all believers in Jesus Christ,<br></br>
          manifest in worshiping and witnessing churches<br></br>
          making disciples throughout the world.<br></br><br></br>

          The victorious reign and future personal return of Jesus Christ,<br></br>
          who will judge all people with justice and mercy,<br></br>
          giving over the unrepentant to eternal condemnation<br></br>
          but receiving the redeemed into eternal life.<br></br>
          To God be glory forever.<br></br><br></br>
          <b>- InterVarsity USA</b>
        </p>
      </div>
      <img className={`${!isMobile ? 'about-image' : 'about-image-mobile'} `} src={about1} alt="gallery1"></img>
    </div>
    <div className={`${!isMobile ? 'about-section' : 'about-section-mobile'} fade-in-section ${isVisible2 ? 'is-visible' : ''}`} ref={domRef2} style={{ backgroundColor: '#fff7ed' }}>
      <div className={`${!isMobile ? 'about-text' : 'about-text-mobile'} `}>
        <h1>Tied to Intervarsity</h1>
        <p>
          We are an affiliated chapter of InterVarsity, established in 1941 with approximately 700 campus chapters worldwide. <br></br><br></br>

          The vision of InterVarsity is to see students and faculty transformed, campuses renewed, and world changers developed. We seek to align this purpose and vision with the unique environment at Cornell. <br></br><br></br>

          In response to God’s love, grace, and truth:<br></br><br></br>
          The purpose of InterVarsity Christian Fellowship/USA<br></br>
          is to establish and advance
          at colleges and universities
          witnessing communities of students and faculty
          who follow Jesus as Savior and Lord:
          growing in love for God,
          God’s Word,
          God’s people of every ethnicity and culture,
          and God’s purposes in the world.<br></br><br></br>
          <b>- InterVarsity USA</b><br></br><br></br>

        </p>
      </div>
      <img className={`${!isMobile ? 'about-image' : 'about-image-mobile'} `} src={about2} alt="gallery2"></img>
    </div>
    {/* <div className={`${!isMobile ? 'about-section' : 'about-section-mobile'} fade-in-section ${isVisible3 ? 'is-visible' : ''}`} ref={domRef3}>
      <div className={`${!isMobile ? 'about-text' : 'about-text-mobile'} `}>
        <h1>History</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <img className={`${!isMobile ? 'about-image' : 'about-image-mobile'} `} src={gallery3} alt="gallery3"></img>
    </div> */}
    <Footer />
  </div>;
}