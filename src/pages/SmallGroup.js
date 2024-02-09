import React, { useRef, useState, useEffect } from 'react';
import './css/SmallGroup.css';
import sg_img from '../assets/small_group/sg-background.png';
import monday_img from '../assets/small_group/FA23 Leaders/serena.svg';
import tuesday_img from '../assets/small_group/FA23 Leaders/angie-kaitlin.svg';
import wed_img from '../assets/small_group/FA23 Leaders/cassy.svg'
import thurs_img from '../assets/small_group/FA23 Leaders/jed.svg';
// Group photos
// import mon_sg from '../assets/small_group/melisabeth_sg.jpeg'
// import tues_sg from '../assets/small_group/grace_chen_sg.jpeg'
// import wed_sg from '../assets/small_group/sed_sg.jpeg'
// import thurs_sg from '../assets/small_group/grace_li_sg.jpeg'
import Footer from '../components/Footer';
// import mon_prof from '../assets/small_group/FA23 Leaders/serena-prof.svg';
import serena_prof from '../assets/small_group/FA23 Leaders/serena-prof2.svg';
import tues_prof from '../assets/small_group/FA23 Leaders/angie-kaitlin-prof.svg';
import angie_prof from '../assets/small_group/FA23 Leaders/angie.svg';
import kaitlin_prof from '../assets/small_group/FA23 Leaders/kaitlin.svg';
import wed_prof from '../assets/small_group/FA23 Leaders/cassy-prof.svg';
import thurs_prof from '../assets/small_group/FA23 Leaders/jed-prof.svg';
import Modal from 'react-modal';
import Profile from '../components/Profile';
import Question from '../components/Question';
import email from '../assets/footer/email.svg';

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
      entries.forEach(entry => {
        if (entry.boundingClientRect.top > 0) {
          if (entry.isIntersecting) {
            setVisible1(entry.isIntersecting);
          }
        }
      });
    });
    observer1.observe(mondayRef.current);

    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.boundingClientRect.top > 0) {
          if (entry.isIntersecting) {
            setVisible2(entry.isIntersecting);
          }
        }
      });
    });
    observer2.observe(tuesdayRef.current);

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

    const observer4 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.boundingClientRect.top > 0) {
          if (entry.isIntersecting) {
            setVisible4(entry.isIntersecting);
          }
        }
      });
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
    <div className={`sg-leaders-section ${isMobile ? 'sg-leaders-section-mobile' : ''}`}>
      <div className="text-container">
        <h1>Meet our Spring 2024 Small Group Leaders</h1>
        <p>Guided by one or two of our amazing and friendly small group leaders, you can share life and explore God together in weekly meetings centered around a Bible study, which are often preceded by a small group dinner. Whether you’ve grown up in church your whole life or are just starting to question if there could be a God who has created all things, you are invited to come check out a small group as we cover the book of Mark! Click on a small group leader to learn more!</p>
      </div>
      <div className='leaders'>
        <div className={`leader fade-in-section ${isVisible1 ? 'is-visible' : ''}`} ref={mondayRef} onClick={() => { setMonIsOpen(true) }}>
          <p>Monday</p>
          <hr></hr>
          <img src={monday_img} alt="monday"></img>
          <div className="sg-title">
            <h3>Serena Wang</h3>
            <a href="mailto: sw755@cornell.edu">
              <img className="sg-icon" src={email} alt="email-icon"></img>
            </a>
          </div>
          <p>6:30pm @ Goldwin Smith Hall G24</p>
        </div>
        <div className={`leader fade-in-section ${isVisible2 ? 'is-visible' : ''}`} ref={tuesdayRef} onClick={() => { setTuesIsOpen(true) }}>
          <p>Tuesday</p>
          <hr></hr>
          <img src={tuesday_img} alt="tuesday"></img>
          <div className="sg-title">
            <h3>Angie Huang & Kaitlin Chung</h3>
            <a href="mailto: amh356@cornell.edu">
              <img className="sg-icon" src={email} alt="email-icon"></img>
            </a>
          </div>
          <p>6pm @ PSB 201</p>
        </div>
        <div className={`leader fade-in-section ${isVisible3 ? 'is-visible' : ''}`} ref={wednesdayRef} onClick={() => { setWedIsOpen(true) }}>
          <p>Wednesday</p>
          <hr></hr>
          <img src={wed_img} alt="wednesday"></img>
          <div className="sg-title">
            <h3>Cassy Kuo</h3>
            <a href="mailto: clk229@cornell.edu">
              <img className="sg-icon" src={email} alt="email-icon"></img>
            </a>
          </div>
          <p>7:30pm @ Collegetown</p>
        </div>
        <div className={`leader fade-in-section ${isVisible4 ? 'is-visible' : ''}`} ref={thursdayRef} onClick={() => { setThursIsOpen(true) }}>
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
        </div>
      </div>
      <div className="sg-modals">
        <Modal
          isOpen={monIsOpen}
          onRequestClose={() => { setMonIsOpen(false) }}
          style={customStyles}
        >
          <div>
            <Profile image={serena_prof} title={'Serena Wang'} text={'Mondays 6:30pm @ Goldwin Smith Hall G24'} email={'sw755@cornell.edu'} />
            <Question
              isMobile={isMobile}
              image={serena_prof}
              question={"Fast Facts"}
              answer={
                <div className="sg-answer">
                  <span><span style={{ fontWeight: 500 }}>Major:</span> Public Policy & Management '25</span>
                  <span><span style={{ fontWeight: 500 }}>Hometown:</span> McLean, VA</span>
                  <span><span style={{ fontWeight: 500 }}>Fav lunch spot:</span> Terrace</span>
                  <span><span style={{ fontWeight: 500 }}>Best study spot:</span> Kroch Library in Olin</span>
                </div>
              }
            />
            <Question
              isMobile={isMobile}
              image={serena_prof}
              question={"Favorite small group memory?"}
              answer={"Watching the Cornell Figure Skating SP23 Show with Melisabeth Mondays"}
            />
            <Question
              isMobile={isMobile}
              image={serena_prof}
              question={"Vision for small group?"}
              answer={"To create a space where people can intentionally grow deeper in their faith and gain spiritual discernment by carefully studying the Word of God via incorporating outside resources/texts for added context and relevance, and having more genuine and vulnerable conversations. My hope is that people will better understand the nature of who God is, His character, and what His design and purpose are for us."}
            />
            {/* <SgPhoto src={melisabeth_sg} alt="melisabeth small group" /> */}
          </div>
        </Modal>
        <Modal
          isOpen={tuesIsOpen}
          onRequestClose={() => { setTuesIsOpen(false) }}
          style={customStyles}
        >
          <div>
            <Profile image={tues_prof} title={'Angie Huang & Kaitlin Chung'} text={'Tuesdays 6pm @ PSB 201'} email={'amh356@cornell.edu'} />
            <Question
              isMobile={isMobile}
              image={kaitlin_prof}
              question={"Fast Facts"}
              answer={
                <div className="sg-answer">
                  <span><span style={{ fontWeight: 500 }}>Major:</span> Biological Sciences '26</span>
                  <span><span style={{ fontWeight: 500 }}>Hometown:</span> Corning, NY</span>
                  <span><span style={{ fontWeight: 500 }}>Fav lunch spot:</span> Atrium cafe or Trilium</span>
                  <span><span style={{ fontWeight: 500 }}>Best study spot:</span> Mann Library</span>
                </div>
              }
            />
            <Question
              isMobile={isMobile}
              image={angie_prof}
              question={"Fast Facts"}
              answer={
                <div className="sg-answer">
                  <span><span style={{ fontWeight: 500 }}>Major:</span> Chemistry '25</span>
                  <span><span style={{ fontWeight: 500 }}>Hometown:</span> Fairfax, VA</span>
                  <span><span style={{ fontWeight: 500 }}>Fav lunch spot:</span> Atrium cafe bc chicken panko sandwich (its breaded chicken and cabbage which sounds weird but hear me out they have this really good sauce and the bread is SO YUMMY and it's like 7.99? so relatively cheap and fills you up)</span>
                  <span><span style={{ fontWeight: 500 }}>Best study spot:</span> Mann Library</span>
                </div>
              }
            />
            <Question
              isMobile={isMobile}
              image={kaitlin_prof}
              question={"Favorite small group memory?"}
              answer={"Prep meetings on Sunday afternoons with Melody, Elisabeth, and Serena!"}
            />
            <Question
              isMobile={isMobile}
              image={angie_prof}
              question={"Vision for small group?"}
              answer={"Small group is a place for everyone - especially freshmen, transfers, anyone looking for community or even just people to talk to - to discover the riches of God’s Word and the life found in it through Bible study. It's more than just a Bible study though! Small group is also a place for people to grow closer together by sharing vulnerably, praying for each other, encouraging one another and building each other up regardless of where they are in their faith journey. Our longing for this small group is for each person to take steps toward ownership of their faith and fostering their personal relationship with God."}
            />
            {/* <SgPhoto src={tues_sg} alt="Angie & Kaitlin small group" /> */}
          </div>
        </Modal>
        <Modal
          isOpen={wedIsOpen}
          onRequestClose={() => { setWedIsOpen(false) }}
          style={customStyles}
        >
          <div>
            <Profile image={wed_prof} title={'Cassy Kuo'} text={'Wednesdays 7:30pm @ Collegetown (Contact for apartment address)'} netid={'clk229'} email={'clk229@cornell.edu'} />
            <Question
              isMobile={isMobile}
              image={wed_prof}
              question={"Fast Facts"}
              answer={
                <div className="sg-answer">
                  <span><span style={{ fontWeight: 500 }}>Major:</span> Health Care Policy '25</span>
                  <span><span style={{ fontWeight: 500 }}>Hometown:</span> Los Angeles, CA</span>
                  <span><span style={{ fontWeight: 500 }}>Fav lunch spot:</span> Trilium</span>
                  <span><span style={{ fontWeight: 500 }}>Best study spot:</span> Warren Hall</span>
                </div>
              }
            />
            <Question
              isMobile={isMobile}
              image={wed_prof}
              question={"Favorite small group memory?"}
              answer={"Melisabeth small group spontaneously met on the arts quad to enjoy the good weather and sunshine!"}
            />
            <Question
              isMobile={isMobile}
              image={wed_prof}
              question={"Vision for small group?"}
              answer={"To encourage people of all walks of faith to encourage each other to pursue christ and love more like him!"}
            />
            {/* <SgPhoto src={wed_sg} alt="Cassy small group" /> */}
          </div>
        </Modal>
        <Modal
          isOpen={thursIsOpen}
          onRequestClose={() => { setThursIsOpen(false) }}
          style={customStyles}
        >
          <div>
            <Profile image={thurs_prof} title={'Jed Tan'} text={'Thursdays 7:30pm @ Hollister Hall 401'} netid={'jyt8'} email={'jyt8@cornell.edu'} />
            <Question
              isMobile={isMobile}
              image={thurs_prof}
              question={"Fast Facts"}
              answer={
                <div className="sg-answer">
                  <span><span style={{ fontWeight: 500 }}>Major:</span> Civil Engineering '25</span>
                  <span><span style={{ fontWeight: 500 }}>Hometown:</span> Long Island, NY</span>
                  <span><span style={{ fontWeight: 500 }}>Fav lunch spot:</span> Trilium</span>
                  <span><span style={{ fontWeight: 500 }}>Best study spot:</span> Fine Arts Library</span>
                </div>
              }
            />
            <Question
              isMobile={isMobile}
              image={thurs_prof}
              question={"Favorite small group memory?"}
              answer={"Picnic on the slope"}
            />
            <Question
              isMobile={isMobile}
              image={thurs_prof}
              question={"Vision for small group?"}
              answer={"I want my small group to be a place to learn from each other what God's word means and to be a community that cares deeply for one another. I hope that small group can provide insight into how God is working in each of our lives."}
            />
            {/* <SgPhoto src={thurs_sg} alt="Jed Tan small group" /> */}
          </div>
        </Modal>
      </div>
    </div>
    <Footer />
  </div>;
}