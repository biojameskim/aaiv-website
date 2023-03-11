import React, {useState, useRef, useEffect} from 'react';
import './css/LargeGroup.css';
import flyer from '../assets/large_group/flyer.png';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import a1 from '../assets/large_group/algae2.svg';
import a2 from '../assets/large_group/algae5.svg';
import a3 from '../assets/large_group/algae7.svg';
import a4 from '../assets/large_group/algae1.svg';
import a5 from '../assets/large_group/algae3.svg';
import a6 from '../assets/large_group/algae4.svg';
import a7 from '../assets/large_group/algae6.svg';
import a8 from '../assets/large_group/algae8.svg';


export default function LargeGroup({ isMobile = false }) {
  const images = [a1, a2, a3, a4, a5, a6, a7, a8];
  const [isVisibleFlyer, setIsVisibleFlyer] = useState(false);
  const [isVisibleAlgae, setIsVisibleAlgae] = useState(false);
  const flyerRef = useRef();
  const algaeRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisibleFlyer(entry.isIntersecting));
    });
    observer.observe(flyerRef.current);

    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisibleAlgae(entry.isIntersecting));
    });
    observer2.observe(algaeRef.current);
  })
  return <div className="main-container">
  <div className="lg-title-container">
    <div className='text-container'>
      <h1>Large Group</h1>
      <p>Large Group is our biggest weekly gathering! Join us every Friday night at 7:30pm in RPCC 205 for a time of fellowship, worship, and learning (followed by fun!). All are welcome, whether you are curious about Christianity or have been Christian your entire life. </p>
      <p>Check our instagram page for important updates:) We hope to see you there!</p>
    </div>
  </div>
  <div className="lg-content-container">
    <div className='flyer-container'>
      <img className={`flyer fade-in-section ${isVisibleFlyer ? 'is-visible' : ''}`} ref={flyerRef} src={flyer} alt='lg-flyer'></img>
    </div>
    <div className={`algae-container fade-in-section ${isVisibleAlgae ? 'is-visible' : ''}`} ref={algaeRef}>
      <div className='text-container'>
        <h1>ALGAE</h1>
        <p>ALGAE stands for After Large Group Activities and Events. It takes place right after Large Group on Friday nights where we…  Everyone is invited to come and have fun!</p>
      </div>
      <Gallery images={images}/>
    </div>
  </div>
  <Footer/>
</div>;
}