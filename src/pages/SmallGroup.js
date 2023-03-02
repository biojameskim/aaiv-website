import React, { useRef, useState, useEffect } from 'react';
import './css/SmallGroup.css';
import sg_img from '../assets/small_group/sg-img.svg';
import monday_img from '../assets/small_group/elisabeth-melody.svg';
import tuesday_img from '../assets/small_group/grace-chen.svg';
import wed_img from '../assets/small_group/simon-jed.svg'
import thurs_img from '../assets/small_group/grace-li.svg';
import Footer from '../components/Footer';

export default function SmallGroup({ isMobile = false }) {
  const [isVisible1, setVisible1] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  const [isVisible3, setVisible3] = useState(false);
  const [isVisible4, setVisible4] = useState(false);
  const mondayRef = useRef();
  const tuesdayRef = useRef();
  const wednesdayRef = useRef();
  const thursdayRef = useRef();
  useEffect(() => {
    const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible1(entry.isIntersecting));
    });
    observer1.observe(mondayRef.current);

    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible2(entry.isIntersecting));
    });
    observer2.observe(tuesdayRef.current);

    const observer3 = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible3(entry.isIntersecting));
    });
    observer3.observe(wednesdayRef.current);

    const observer4 = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible4(entry.isIntersecting));
    });
    observer4.observe(thursdayRef.current);
  }, []);
  return <div className="main-container">
    <div className={`sg-title-container ${isMobile ? 'sg-title-container-mobile' : ''}`}>
      <img className="sg-title-image" src={sg_img} alt="sg-title"></img>
      <div className="text-container">
        <h1>Join a Small Group!</h1>
        <p>This is the best way to get connected in a small and close, tight-knit community of fellow AAIVers. Our God is a personal God, and Small Group is one of the spaces in AAIV where you can experience God’s closeness, goodness, and unfailing love for yourself. </p>
      </div>
    </div>
    <div className="sg-leaders-section">
      <div className="text-container">
        <h1>Meet our Spring 2023 Small Group Leaders</h1>
        <p>Guided by one or two of our amazing and friendly small group leaders, you can share life and explore God together in weekly meetings centered around a Bible study, which are often preceded by a small group dinner. Whether you’ve grown up in church your whole life or are just starting to question if there could be a God who has created all things, you are invited to come check out a small group as we cover the book of Hebrews! Learn more about the specific small groups listed below. </p>
      </div>
      <div className='leaders'>
        <div className={`leader fade-in-section ${isVisible1 ? 'is-visible' : ''}`} ref={mondayRef}>
          <p>Monday</p>
          <hr></hr>
          <img src={monday_img} alt="monday"></img>
          <h3 style={{ margin: '10px -2px 5px -2px' }}>Elisabeth & Melody (ep438, myx2)</h3>
          <p>6pm @ URIS HALL 398</p>
        </div>
        <div className={`leader fade-in-section ${isVisible2 ? 'is-visible' : ''}`} ref={tuesdayRef}>
          <p>Tuesday</p>
          <hr></hr>
          <img src={tuesday_img} alt="tuesday"></img>
          <h3>Grace Chen (glc84)</h3>
          <p>7pm @ URIS HALL 204</p>
        </div>
        <div className={`leader fade-in-section ${isVisible3 ? 'is-visible' : ''}`} ref={wednesdayRef}>
          <p>Wednesday</p>
          <hr></hr>
          <img src={wed_img} alt="wednesday"></img>
          <h3>Simon & Jed (sc2925, jyt8)</h3>
          <p>6pm @ HOLLISTER HALL</p>
        </div>
        <div className={`leader fade-in-section ${isVisible4 ? 'is-visible' : ''}`} ref={thursdayRef}>
          <p>Thursday</p>
          <hr></hr>
          <img src={thurs_img} alt="thursday"></img>
          <h3>Grace Li (gl443)</h3>
          <p>7pm @ HIGHLANDS</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>;
}