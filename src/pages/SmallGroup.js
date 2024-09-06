import React, { useRef, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Modal from 'react-modal';
import Profile from '../components/Profile';
import Question from '../components/Question';
import email from '../assets/footer/email.svg';
import './css/SmallGroup.css';
import sg_img from '../assets/small_group/sg-background.png';

// These are the leader COVER photos for each small group leader.
import mon_img from '../assets/small_group/FA24_Leaders/melody_img.svg';
import wed_img from '../assets/small_group/FA24_Leaders/guillaume_img.svg'

// These are the group photos for each small group. 
// import mon_sg from '../assets/small_group/melisabeth_sg.jpeg'
// import tues_sg from '../assets/small_group/grace_chen_sg.jpeg'
// import wed_sg from '../assets/small_group/sed_sg.jpeg'
// import thurs_sg from '../assets/small_group/grace_li_sg.jpeg'

// These are the profile photos for each small group leader (The circular pfps within the modal).
import mon_prof from '../assets/small_group/FA24_Leaders/melody-prof.svg';
import wed_prof from '../assets/small_group/FA24_Leaders/guillaume-prof.svg';

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

  // Photo for each small group within the modals
  // const SgPhoto = ({ src, alt }) => <img className={`sg-photo ${isMobile ? 'sg-photo-mobile' : ''}`} src={src} alt={alt} />


  const [isVisible1, setVisible1] = useState(false);
  // const [isVisible2, setVisible2] = useState(false);
  const [isVisible3, setVisible3] = useState(false);
  // const [isVisible4, setVisible4] = useState(false);
  const [monIsOpen, setMonIsOpen] = useState(false);
  // const [tuesIsOpen, setTuesIsOpen] = useState(false);
  const [wedIsOpen, setWedIsOpen] = useState(false);
  // const [thursIsOpen, setThursIsOpen] = useState(false);

  const mondayRef = useRef();
  // const tuesdayRef = useRef();
  const wednesdayRef = useRef();
  // const thursdayRef = useRef();

  useEffect(() => {
    const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.boundingClientRect.top > 0) {
          if (entry.isIntersecting) {
            setVisible1(entry.isIntersecting);
          }
        }
      });
    });
    observer1.observe(mondayRef.current);

    // const observer2 = new IntersectionObserver(entries => {
    //   entries.forEach(entry => {
    //     if (entry.boundingClientRect.top > 0) {
    //       if (entry.isIntersecting) {
    //         setVisible2(entry.isIntersecting);
    //       }
    //     }
    //   });
    // });
    // observer2.observe(tuesdayRef.current);

    const observer3 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.boundingClientRect.top > 0) {
          if (entry.isIntersecting) {
            setVisible3(entry.isIntersecting);
          }
        }
      });
    });
    observer3.observe(wednesdayRef.current);

    // const observer4 = new IntersectionObserver(entries => {
    //   entries.forEach(entry => {
    //     if (entry.boundingClientRect.top > 0) {
    //       if (entry.isIntersecting) {
    //         setVisible4(entry.isIntersecting);
    //       }
    //     }
    //   });
    // });
    // observer4.observe(thursdayRef.current);
  }, []);

  return <div className="main-container">
    <div className={`sg-title-container ${isMobile ? 'sg-title-container-mobile' : ''}`}>
      <img className="sg-title-image" src={sg_img} alt="sg-title"></img>
      <div className="text-container">
        <h1>Join a Small Group!</h1>
        <p>This is the best way to get connected in a small and close, tight-knit community of fellow AAIVers. Our God is a personal God, and Small Group is one of the spaces in AAIV where you can experience God’s closeness, goodness, and unfailing love for yourself. </p>
      </div>
    </div>
    <div className={`sg-leaders-section ${isMobile ? 'sg-leaders-section-mobile' : ''}`}>
      <div className="text-container">
        <h1>Meet our Fall 2024 Small Group Leaders</h1>
        <p>Guided by one or two of our amazing and friendly small group leaders, you can share life and explore God together in weekly meetings centered around a Bible study, which are often preceded by a small group dinner. Whether you’ve grown up in church your whole life or are just starting to question if there could be a God who has created all things, you are invited to come check out a small group as we cover the book of Mark! Click on a small group leader to learn more!</p>
      </div>
      <div className='leaders'>
        <div className={`leader fade-in-section ${isVisible1 ? 'is-visible' : ''}`} ref={mondayRef} onClick={() => { setMonIsOpen(true) }}>
          <p>Monday</p>
          <hr></hr>
          <img src={mon_img} alt="monday"></img>
          <div className="sg-title">
            <h3>Cherrie Lan</h3>
            <a href="mailto: cql2@cornell.edu">
              <img className="sg-icon" src={email} alt="email-icon"></img>
            </a>
          </div>
          <p>6:30pm @ Uris 302</p>
        </div>
        {/* <div className={`leader fade-in-section ${isVisible2 ? 'is-visible' : ''}`} ref={tuesdayRef} onClick={() => { setTuesIsOpen(true) }}>
          <p>Tuesday</p>
          <hr></hr>
          <img src={tues_img} alt="tuesday"></img>
          <div className="sg-title">
            <h3>Ro-Ann Shen & Karina Song</h3>
            <a href="mailto: rs2545@cornell.edu">
              <img className="sg-icon" src={email} alt="email-icon"></img>
            </a>
          </div>
          <p>6:30pm @ Uris 204</p>
        </div> */}
        <div className={`leader fade-in-section ${isVisible3 ? 'is-visible' : ''}`} ref={wednesdayRef} onClick={() => { setWedIsOpen(true) }}>
          <p>Wednesday</p>
          <hr></hr>
          <img src={wed_img} alt="wednesday"></img>
          <div className="sg-title">
            <h3>Guillaume Ah-Hot</h3>
            <a href="mailto: gaa59@cornell.edu">
              <img className="sg-icon" src={email} alt="email-icon"></img>
            </a>
          </div>
          <p>7:30pm @ Stimson 206</p>
        </div>
        {/* <div className={`leader fade-in-section ${isVisible4 ? 'is-visible' : ''}`} ref={thursdayRef} onClick={() => { setThursIsOpen(true) }}>
          <p>Thursday</p>
          <hr></hr>
          <img src={thurs_img} alt="thursday"></img>
          <div className="sg-title">
            <h3>Jed Tan</h3>
            <a href="mailto: jyt8@cornell.edu">
              <img className="sg-icon" src={email} alt="email-icon"></img>
            </a>
          </div>
          <p>7:30pm @ Hollister Hall 401</p>
        </div> */}
      </div>
      <div className="sg-modals">
        <Modal
          isOpen={monIsOpen}
          onRequestClose={() => { setMonIsOpen(false) }}
          style={customStyles}
        >
          <div>
            <Profile image={mon_prof} title={'Melody Xu'} text={'Mondays 7:30pm @ Uris 302 (bring-your-own-dinner @ 7pm)'} email={'myx2@cornell.edu'} />
            <Question
              isMobile={isMobile}
              image={mon_prof}
              question={"Fast Facts"}
              answer={
                <div className="sg-answer">
                  <span><span style={{ fontWeight: 500 }}>Major:</span> HBHS '25</span>
                  <span><span style={{ fontWeight: 500 }}>Hometown:</span> Cincinnati, OH & Shanghai, China</span>
                  <span><span style={{ fontWeight: 500 }}>Fav lunch spot:</span> Goldies</span>
                  <span><span style={{ fontWeight: 500 }}>Best study spot:</span> Olin 7th floor stacks</span>
                </div>
              }
            />
            <Question
              isMobile={isMobile}
              image={mon_prof}
              question={"Favorite AAIV Memory?"}
              answer={"Playing Nertz at algae with alumni"}
            />
            <Question
              isMobile={isMobile}
              image={mon_prof}
              question={"Vision for small group?"}
              answer={"For me, AAIV small group is a safe place to be vulnerable, share our doubts, struggles, and joys. Through studying scripture, we aim to get to know Jesus better and find joy in our faith journey with one another"}
            />
            {/* <SgPhoto src={melisabeth_sg} alt="melisabeth small group" /> */}
          </div>
        </Modal>
        {/* <Modal
          isOpen={tuesIsOpen}
          onRequestClose={() => { setTuesIsOpen(false) }}
          style={customStyles}
        >
          <div>
            <Profile image={tues_prof} title={'Ro-Ann Shen & Karina Song'} text={'Tuesdays 6:30pm @ Uris 204'} email={'rs2545@cornell.edu'} />
            <Question
              isMobile={isMobile}
              image={karina_prof} //Kaitlyn will be for Karina
              question={"Fast Facts"}
              answer={
                <div className="sg-answer">
                  <span><span style={{ fontWeight: 500 }}>Major:</span> ILR, minoring in Business, Inequality Studies, Theatre '24</span>
                  <span><span style={{ fontWeight: 500 }}>Hometown:</span> Seoul, South Korea</span>
                  <span><span style={{ fontWeight: 500 }}>Fav lunch spot:</span> Bus Stop Bagels</span>
                  <span><span style={{ fontWeight: 500 }}>Best study spot:</span> Catherwood Library</span>
                </div>
              }
            />
            <Question
              isMobile={isMobile}
              image={roann_prof} //Angie will be for Ro-Ann
              question={"Fast Facts"}
              answer={
                <div className="sg-answer">
                  <span><span style={{ fontWeight: 500 }}>Major:</span> Information Science '24</span>
                  <span><span style={{ fontWeight: 500 }}>Hometown:</span> Geneva, NY</span>
                  <span><span style={{ fontWeight: 500 }}>Fav lunch spot:</span> Terrace </span>
                  <span><span style={{ fontWeight: 500 }}>Best study spot:</span> Libe Cafe by the windows :D </span>
                </div>
              }
            />
            <Question
              isMobile={isMobile}
              image={karina_prof}
              question={"Favorite AAIV Memory?"}
              answer={"Sunrising with Arvin, Agnes, and Sam"}
            />
            <Question
              isMobile={isMobile}
              image={roann_prof}
              question={"Vision for small group?"}
              answer={"Our vision is to have small group as a supportive, non-intimidating space for anyone regardless of spiritual standing to study scripture and build spiritual discipline. We hope to foster family energy through community activites and a space where people feel safe to be open and vulnerable."}
            />
          </div>
        </Modal> */}
        <Modal
          isOpen={wedIsOpen}
          onRequestClose={() => { setWedIsOpen(false) }}
          style={customStyles}
        >
          <div>
            <Profile image={wed_prof} title={'Guillaume Ah-Hot'} text={'Wednesdays 7:30pm @ Stimson 206 (Dinner 6:30pm @ Okenshields)'} netid={'gaa59'} email={'gaa59@cornell.edu'} />
            <Question
              isMobile={isMobile}
              image={wed_prof}
              question={"Fast Facts"}
              answer={
                <div className="sg-answer">
                  <span><span style={{ fontWeight: 500 }}>Major:</span> ECE '27</span>
                  <span><span style={{ fontWeight: 500 }}>Hometown:</span> Singapore</span>
                  <span><span style={{ fontWeight: 500 }}>Fav lunch spot:</span> Okies after 2PM</span>
                  <span><span style={{ fontWeight: 500 }}>Best study spot:</span> Kirby Reading Room</span>
                </div>
              }
            />
            <Question
              isMobile={isMobile}
              image={wed_prof}
              question={"Favorite AAIV memory?"}
              answer={"Selah (AAIV Fall Retreat)"}
            />
            <Question
              isMobile={isMobile}
              image={wed_prof}
              question={"Vision for small group?"}
              answer={"I want to create an intimate space where anyone is able to make friends while also learning about God and His Word."}
            />
            {/* <SgPhoto src={wed_sg} alt="Cassy small group" /> */}
          </div>
        </Modal>
        {/* <Modal
          isOpen={thursIsOpen}
          onRequestClose={() => { setThursIsOpen(false) }}
          style={customStyles}
        >
          <div>
            <Profile image={thurs_prof} title={'Jed Tan'} text={'Thursdays 7:30pm @ Hollister Hall'} netid={'jyt8'} email={'jyt8@cornell.edu'} />
            <Question
              isMobile={isMobile}
              image={thurs_prof}
              question={"Fast Facts"}
              answer={
                <div className="sg-answer">
                  <span><span style={{ fontWeight: 500 }}>Major:</span> Civil Engineering '25</span>
                  <span><span style={{ fontWeight: 500 }}>Hometown:</span> Stony Brook, NY</span>
                  <span><span style={{ fontWeight: 500 }}>Fav lunch spot:</span> Risley's Nashville Hot Chicken</span>
                  <span><span style={{ fontWeight: 500 }}>Best study spot:</span> Sage Atrium</span>
                </div>
              }
            />
            <Question
              isMobile={isMobile}
              image={thurs_prof}
              question={"Favorite AAIV memory?"}
              answer={"Early morning devos and 6 mile jog at Basileia"}
            />
            <Question
              isMobile={isMobile}
              image={thurs_prof}
              question={"Vision for small group?"}
              answer={"A place to learn from each other what God's word means, and how to live lives that imitate Christ's example, caring deeply for one another."}
            />
          </div>
        </Modal> */}
      </div>
    </div>
    <Footer />
  </div>;
}