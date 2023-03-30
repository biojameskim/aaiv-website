import React, { useRef, useState, useEffect } from 'react';
import './css/SmallGroup.css';
import sg_img from '../assets/small_group/sg-img.png';
import monday_img from '../assets/small_group/elisabeth-melody.svg';
import tuesday_img from '../assets/small_group/grace-chen.svg';
import wed_img from '../assets/small_group/simon-jed.svg'
import thurs_img from '../assets/small_group/grace-li.svg';
import Footer from '../components/Footer';
import mon_prof from '../assets/small_group/mon-profile.svg';
import tues_prof from '../assets/small_group/tues-profile.svg';
import wed_prof from '../assets/small_group/wed-profile.svg';
import thurs_prof from '../assets/small_group/thurs-profile.svg';
import Modal from 'react-modal';
import Profile from '../components/Profile';
import Question from '../components/Question';

export default function SmallGroup({ isMobile = false }) {
  const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '65%',
        overflow: 'scroll',
        maxHeight: '80vh',
    },
    overlay: { zIndex: 2 }
};

  const [isVisible1, setVisible1] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  const [isVisible3, setVisible3] = useState(false);
  const [isVisible4, setVisible4] = useState(false);
  const [monIsOpen, setMonIsOpen] = useState(false);
  const [tuesIsOpen, setTuesIsOpen] = useState(false);
  const [wedIsOpen, setWedIsOpen] = useState(false);
  const [thursIsOpen, setThursIsOpen] = useState(false);

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
        <div className={`leader fade-in-section ${isVisible1 ? 'is-visible' : ''}`} ref={mondayRef} onClick={() => { setMonIsOpen(true) }}>
          <p>Monday</p>
          <hr></hr>
          <img src={monday_img} alt="monday"></img>
          <h3 style={{ margin: '10px -2px 5px -2px' }}>Elisabeth & Melody (ep438, myx2)</h3>
          <p>6pm @ URIS HALL 398</p>
        </div>
        <div className={`leader fade-in-section ${isVisible2 ? 'is-visible' : ''}`} ref={tuesdayRef} onClick={() => { setTuesIsOpen(true) }}>
          <p>Tuesday</p>
          <hr></hr>
          <img src={tuesday_img} alt="tuesday"></img>
          <h3>Grace Chen (glc84)</h3>
          <p>7pm @ URIS HALL 204</p>
        </div>
        <div className={`leader fade-in-section ${isVisible3 ? 'is-visible' : ''}`} ref={wednesdayRef} onClick={() => { setWedIsOpen(true) }}>
          <p>Wednesday</p>
          <hr></hr>
          <img src={wed_img} alt="wednesday"></img>
          <h3>Simon & Jed (sc2925, jyt8)</h3>
          <p>6pm @ HOLLISTER HALL</p>
        </div>
        <div className={`leader fade-in-section ${isVisible4 ? 'is-visible' : ''}`} ref={thursdayRef} onClick={() => { setThursIsOpen(true) }}>
          <p>Thursday</p>
          <hr></hr>
          <img src={thurs_img} alt="thursday"></img>
          <h3>Grace Li (gl443)</h3>
          <p>7pm @ HIGHLANDS</p>
        </div>
      </div>
      <div className="sg-modals">
        <Modal
            isOpen={monIsOpen}
            onRequestClose={() => { setMonIsOpen(false) }}
            style={customStyles}
        >
            <div>
                <Profile image={mon_prof} title={'Elisabeth (ep438) & Melody (myx2)'} text={'Mondays 6pm @ URIS HALL 398'} email={'ep438@cornell.edu'} />
                <Question isMobile={isMobile} image={mon_prof} question={'Tell us a bit about yourself.'} answer={''} />
                <Question isMobile={isMobile} image={mon_prof} question={'Favorite AAIV memory?'} answer={''} />
                <Question isMobile={isMobile} image={mon_prof} question={'Describe AAIV with three emojis.'} answer={''} />
            </div>
        </Modal>
        <Modal
            isOpen={tuesIsOpen}
            onRequestClose={() => { setTuesIsOpen(false) }}
            style={customStyles}
        >
            <div>
            <Profile image={tues_prof} title={'Grace Chen (glc84)'} text={'Tuesdays 7pm @ URIS HALL 204'} email={'glc84@cornell.edu'} />
                <Question isMobile={isMobile} image={tues_prof} question={'Tell us a bit about yourself.'} answer={''} />
                <Question isMobile={isMobile} image={tues_prof} question={'Favorite AAIV memory?'} answer={''} />
                <Question isMobile={isMobile} image={tues_prof} question={'Describe AAIV with three emojis.'} answer={''} />
            </div>
        </Modal>
        <Modal
            isOpen={wedIsOpen}
            onRequestClose={() => { setWedIsOpen(false) }}
            style={customStyles}
        >
            <div>
            <Profile image={wed_prof} title={'Simon (sc2925) & Jed (jyt8)'} text={'Wednesdays 7pm @ HOLLISTER HALL'} email={'sc2925@cornell.edu'} />
                <Question isMobile={isMobile} image={wed_prof} question={'Tell us a bit about yourself.'} answer={''} />
                <Question isMobile={isMobile} image={wed_prof} question={'Favorite AAIV memory?'} answer={''} />
                <Question isMobile={isMobile} image={wed_prof} question={'Describe AAIV with three emojis.'} answer={''} />
            </div>
        </Modal>
        <Modal
            isOpen={thursIsOpen}
            onRequestClose={() => { setThursIsOpen(false) }}
            style={customStyles}
        >
            <div>
            <Profile image={thurs_prof} title={'Grace Li (gl443)'} text={'Thursdays 7pm @ HIGHLANDS'} email={'gl443@cornell.edu'} />
                <Question isMobile={isMobile} image={thurs_prof} question={'Tell us a bit about yourself.'} answer={''} />
                <Question isMobile={isMobile} image={thurs_prof} question={'Favorite AAIV memory?'} answer={''} />
                <Question isMobile={isMobile} image={thurs_prof} question={'Describe AAIV with three emojis.'} answer={''} />
            </div>
        </Modal>
      </div>
    </div>
    <Footer />
  </div>;
}