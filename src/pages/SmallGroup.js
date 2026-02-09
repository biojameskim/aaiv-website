import React, { useRef, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Modal from 'react-modal';
import Profile from '../components/Profile';
import Question from '../components/Question';
import email from '../assets/footer/email.svg';
import './css/SmallGroup.css';
import sg_img from '../assets/small_group/sg-background.png';

// These are the leader COVER photos for each small group leader.
// import mon_img from '../assets/small_group/SP25_Leaders/melody_img.png';
import tues_img from '../assets/small_group/SP26_Leaders/jiaming_img.svg';
import wed_img from '../assets/small_group/SP26_Leaders/ailin_img.svg';
import wed2_img from '../assets/small_group/SP26_Leaders/guillaume_img.svg';
import thurs_img from '../assets/small_group/SP26_Leaders/joyce_img.svg'

// These are the group photos for each small group. 
// import mon_sg from '../assets/small_group/melisabeth_sg.jpeg'
// import tues_sg from '../assets/small_group/grace_chen_sg.jpeg'
// import wed_sg from '../assets/small_group/sed_sg.jpeg'
// import thurs_sg from '../assets/small_group/grace_li_sg.jpeg'

// These are the profile photos for each small group leader (The circular pfps within the modal).
import tues_prof from '../assets/small_group/SP26_Leaders/jiaming-prof.svg';
import wed_prof from '../assets/small_group/SP26_Leaders/ailin-prof.svg';
import wed2_prof from '../assets/small_group/SP26_Leaders/guillaume-prof.svg';
import thurs_prof from '../assets/small_group/SP26_Leaders/joyce-prof.svg'


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
  // const [monIsOpen, setMonIsOpen] = useState(false);
  const [tuesIsOpen, setTuesIsOpen] = useState(false);
  const [wedIsOpen, setWedIsOpen] = useState(false);
  const [wed2IsOpen, setWed2IsOpen] = useState(false);
  const [thursIsOpen, setThursIsOpen] = useState(false);

  // const mondayRef = useRef();
  const tuesdayRef = useRef();
  const wednesdayRef = useRef();
  const wednesday2Ref = useRef();
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
    observer1.observe(tuesdayRef.current);

    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.boundingClientRect.top > 0) {
          if (entry.isIntersecting) {
            setVisible2(entry.isIntersecting);
          }
        }
      });
    });
    observer2.observe(wednesdayRef.current);

    const observer3 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.boundingClientRect.top > 0) {
          if (entry.isIntersecting) {
            setVisible3(entry.isIntersecting);
          }
        }
      });
    });
    observer3.observe(wednesday2Ref.current);

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
        <h1>Meet our Spring 2026 Small Group Leaders</h1>
        <p>Guided by one or two of our amazing and friendly small group leaders, you can share life and explore God together in weekly meetings centered around a Bible study, which are often preceded by a small group dinner. Whether you’ve grown up in church your whole life or are just starting to question if there could be a God who has created all things, you are invited to come check out a small group as we cover the book of Jonah! Click on a small group leader to learn more!</p>
      </div>
      <div className='leaders'>
        <div className={`leader fade-in-section ${isVisible1 ? 'is-visible' : ''}`} ref={tuesdayRef} onClick={() => { setTuesIsOpen(true) }}>
          <p>Tuesday</p>
          <hr></hr>
          <img className={`${isMobile ? 'profile-mobile' : 'profile'}`} src={tues_img} alt="tuesday"></img>
          <div className="sg-title">
            <h3>Jiaming Yuan</h3>
            <a href="mailto: jy729@cornell.edu">
              onClick={(e) => e.stopPropagation()}
              <img className="sg-icon" src={email} alt="email-icon"></img>
            </a>
          </div>
          <p>7:30pm @ Uris Hall 260</p>
        </div>
        <div className={`leader fade-in-section ${isVisible2 ? 'is-visible' : ''}`} ref={wednesdayRef} onClick={() => { setWedIsOpen(true) }}>
          <p>Wednesday</p>
          <hr></hr>
          <img className={`${isMobile ? 'profile-mobile' : 'profile'}`} src={wed_img} alt="wednesday"></img>
          <div className="sg-title">
            <h3>Ailin Chen</h3>
            <a href="mailto: ac3232@cornell.edu">
              onClick={(e) => e.stopPropagation()}
              <img className="sg-icon" src={email} alt="email-icon"></img>
            </a>
          </div>
          <p>7:00pm @ Stimson 206</p>
        </div>
        <div className={`leader fade-in-section ${isVisible3 ? 'is-visible' : ''}`} ref={wednesday2Ref} onClick={() => { setWed2IsOpen(true) }}>
          <p>Wednesday</p>
          <hr></hr>
          <img className={`${isMobile ? 'profile-mobile' : 'profile'}`} src={wed2_img} alt="wednesday"></img>
          <div className="sg-title">
            <h3>Guillaume Ah-Hot</h3>
            <a href="mailto: gaa59@cornell.edu">
              onClick={(e) => e.stopPropagation()}
              <img className="sg-icon" src={email} alt="email-icon"></img>
            </a>
          </div>
          <p>7:00pm @ Stimson 206</p>
        </div>
        <div className={`leader fade-in-section ${isVisible4 ? 'is-visible' : ''}`} ref={thursdayRef} onClick={() => { setThursIsOpen(true) }}>
          <p>Thursday</p>
          <hr></hr>
          <img className={`${isMobile ? 'profile-mobile' : 'profile'}`} src={thurs_img} alt="thursday"></img>
          <div className="sg-title">
            <h3>Joyce Yang</h3>
            <a href="mailto: jby33@cornell.edu">
              onClick={(e) => e.stopPropagation()}
              <img className="sg-icon" src={email} alt="email-icon"></img>
            </a>
          </div>
          <p>7:00pm @ Collegetown Crossing</p>
        </div>
      </div>
      <div className="sg-modals">
        <Modal
          isOpen={tuesIsOpen}
          onRequestClose={() => { setTuesIsOpen(false) }}
          style={customStyles}
        >
          <div>
            <Profile isMobile={isMobile} image={tues_prof} title={'Jiaming Yuan'} text={'Tuesdays 7:30pm @ Uris Hall 260'} email={'jy729@cornell.edu'} />
            <Question
              isMobile={isMobile}
              image={tues_prof}
              question={"Fast Facts"}
              answer={
                <div className="sg-answer">
                  <span><span style={{ fontWeight: 500 }}>Major:</span> Environmental Engineering '26</span>
                  <span><span style={{ fontWeight: 500 }}>Type of Small Group:</span> Focused</span>
                  {/* <span><span style={{ fontWeight: 500 }}>Fav lunch spot:</span> Goldies</span>
                  <span><span style={{ fontWeight: 500 }}>Best study spot:</span> Olin 7th floor stacks</span> */}
                </div>
              }
            />
            <Question
              isMobile={isMobile}
              image={tues_prof}
              question={"Favorite AAIV Memory?"}
              answer={"When Tuesday SG went to Moonlight breakfast together last semester, had hilariously random convos, and then actually had a semi-productive study session afterward!"}
            />
            <Question
              isMobile={isMobile}
              image={tues_prof}
              question={"Prayer for small group?"}
              answer={"My prayer is for freshmen and underclassmen in particular to learn about their identity and value in light of God's redeeming work in the Gospel, and for them to discover their God-given purpose on Cornell's campus!"}
            />
            {/* <SgPhoto src={melisabeth_sg} alt="melisabeth small group" /> */}
          </div>
        </Modal>
        <Modal
          isOpen={wedIsOpen}
          onRequestClose={() => { setWedIsOpen(false) }}
          style={customStyles}
        >
          <div>
            <Profile isMobile={isMobile} image={wed_prof} title={'Ailin Chen'} text={'Tuesdays 7:00pm @ Stimson 206'} netid={'ac3232'} email={'ac3232@cornell.edu'} />
            <Question
              isMobile={isMobile}
              image={wed_prof} //Kaitlyn will be for Karina
              question={"Fast Facts"}
              answer={
                <div className="sg-answer">
                  <span><span style={{ fontWeight: 500 }}>Major:</span> Industrial and Labor Relations '27</span>
                  <span><span style={{ fontWeight: 500 }}>Type of Small Group:</span> Traditional</span>
                  {/* <span><span style={{ fontWeight: 500 }}>Fav lunch spot:</span> Bus Stop Bagels</span>
                  <span><span style={{ fontWeight: 500 }}>Best study spot:</span> Catherwood Library</span> */}
                </div>
              }
            />
            {/* <Question
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
            /> */}
            <Question
              isMobile={isMobile}
              image={wed_prof}
              question={"Favorite AAIV Memory?"}
              answer={<>Karaoke-ing until 4am with my small group during AAIV Felly after party</>}
            />
            <Question
              isMobile={isMobile}
              image={wed_prof}
              question={"Prayer for small group?"}
              answer={"I pray that small group is a space where everyone feels welcomed and can continue to learn about God. For believers, may it be a place to grow deeper in faith, and for those who are exploring or unsure, may it be a place to open their hearts and learn. I pray that God helps us grow in wisdom and grace, that members encourage one another, and that small group becomes a time we eagerly anticipate each week."}
            />
          </div>
        </Modal>
        <Modal
          isOpen={wed2IsOpen}
          onRequestClose={() => { setWed2IsOpen(false) }}
          style={customStyles}
        >
          <div>
            <Profile isMobile={isMobile} image={wed2_prof} title={'Guillaume Ah-Hot'} text={<>Wednesdays 7:00pm @ Stimson 206 </>} netid={'gaa59'} email={'gaa59@cornell.edu'} />
            <Question
              isMobile={isMobile}
              image={wed2_prof}
              question={"Fast Facts"}
              answer={
                <div className="sg-answer">
                  <span><span style={{ fontWeight: 500 }}>Major:</span> ECE '27</span>
                  <span><span style={{ fontWeight: 500 }}>Type of Small Group:</span> Traditional</span>
                  {/* <span><span style={{ fontWeight: 500 }}>Fav lunch spot:</span> Okies after 2pm</span>
                  <span><span style={{ fontWeight: 500 }}>Best study spot:</span> Kirby Reading Room</span> */}
                </div>
              }
            />
            <Question
              isMobile={isMobile}
              image={wed2_prof}
              question={"Favorite AAIV memory?"}
              answer={"Doing dance together in AAIV Boys Gen"}
            />
            <Question
              isMobile={isMobile}
              image={wed2_prof}
              question={"Prayer for small group?"}
              answer={"That we can build a community of believers willing and capable of sharpening one another in our individual faith journeys"}
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
            <Profile isMobile={isMobile} image={thurs_prof} title={'Joyce Yang'} text={<>Thursdays 7:00pm @ Collegetown Crossing </>} netid={'jby33'} email={'jby338@cornell.edu'} />
            <Question
              isMobile={isMobile}
              image={thurs_prof}
              question={"Fast Facts"}
              answer={
                <div className="sg-answer">
                  <span><span style={{ fontWeight: 500 }}>Major:</span> Computer Science & Business '27</span>
                  <span><span style={{ fontWeight: 500 }}>Type of Small Group:</span> Traditional</span>
                  {/* <span><span style={{ fontWeight: 500 }}>Fav lunch spot:</span> Risley's Nashville Hot Chicken</span>
                  <span><span style={{ fontWeight: 500 }}>Best study spot:</span> Sage Atrium</span> */}
                </div>
              }
            />
            <Question
              isMobile={isMobile}
              image={thurs_prof}
              question={"Favorite AAIV memory?"}
              answer={"handing out fish cookies @ rpcc with small group last semester 🎏"}
            />
            <Question
              isMobile={isMobile}
              image={thurs_prof}
              question={"Prayer for small group?"}
              answer={"May this be a space where faith is strengthened, joy is shared, and every conversation brings us closer to God than before!"}
            />
          </div>
        </Modal>
      </div>
    </div>
    <Footer />
  </div>;
}