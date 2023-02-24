import React from 'react';
import './css/Church.css';
import ficcc from '../assets/church/ficcc.svg';
import ithaca_first from '../assets/church/ithaca-first.svg';
import vineyard from '../assets/church/vineyard.svg';
import calvary from '../assets/church/calvary.svg';
import christ_chapel from '../assets/church/christ-chapel.svg';
import Footer from '../components/Footer';

export default function Church() {
    const [isVisible1, setVisible1] = React.useState(false);
    const [isVisible2, setVisible2] = React.useState(false);
    const [isVisible3, setVisible3] = React.useState(false);
    const [isVisible4, setVisible4] = React.useState(false);
    const [isVisible5, setVisible5] = React.useState(false);
    const domRef1 = React.useRef();
    const domRef2 = React.useRef();
    const domRef3 = React.useRef();
    const domRef4 = React.useRef();
    const domRef5 = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible1(entry.isIntersecting));
      });
      observer.observe(domRef1.current);
    }, []);
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible2(entry.isIntersecting));
      });
      observer.observe(domRef2.current);
    }, []);
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible3(entry.isIntersecting));
      });
      observer.observe(domRef3.current);
    }, []);
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => setVisible4(entry.isIntersecting));
        });
        observer.observe(domRef4.current);
      }, []);
      React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => setVisible5(entry.isIntersecting));
        });
        observer.observe(domRef5.current);
      }, []);

  return <div className="main-container">
    <div className="church-title-container">
        <div className="text-container">
            <h1>Looking for a Church?</h1>
            <p>While AAIV provides a great community for Christ-centered growth and accountability, it does not replace church. We strongly encourage you to check out some of the churches in the Ithaca area. More information can be found by contacting the person listed under each church, especially if you want a friend to church hop with!</p>
        </div>
    </div> 
    <div className={`church-section church-section-right fade-in-section ${isVisible1 ? 'is-visible' : ''}`} ref={domRef1}>
        <img className="church-image" src={ficcc} alt="ficcc-image"></img>
        <div className="text-container">
            <h2>9:45 AM</h2>
            <h1>First Ithaca Chinese Christian Church</h1>
            <div className="button-container">
                <a href='http://ithacachinesechurch.org/ficccem/' target="_blank" rel="noreferrer">
                    <button>Website</button>
                </a>
                <a href='http://ithacachinesechurch.org/ficccem/' target="_blank" rel="noreferrer">
                    <button>Rides</button>
                </a>
            </div>
            <p>Contact Micah Chen (mc2284) for more details.</p>
        </div>
    </div>
    <div className={`church-section church-section-left fade-in-section ${isVisible2 ? 'is-visible' : ''}`} ref={domRef2}>
        <div className="text-container">
            <h2>10:00 AM</h2>
            <h1>Ithaca First Assembly of God</h1>
            <div className="button-container">
                <a href='https://www.ithacafirstassembly.org/' target="_blank" rel="noreferrer">
                    <button>Website</button>
                </a>
                <a href='https://www.ithacafirstassembly.org/' target="_blank" rel="noreferrer">
                    <button>Rides</button>
                </a>
            </div>
            <p>Contact Karen Ma (kym9) for more details.</p>
        </div>
        <img className="church-image" src={ithaca_first} alt="ithaca-first-image"></img>
    </div>
    <div className={`church-section church-section-right fade-in-section ${isVisible3 ? 'is-visible' : ''}`} ref={domRef3}>
        <img className="church-image" src={vineyard} alt="vineyard"></img>
        <div className="text-container">
            <h2>10:00 AM</h2>
            <h1>Vineyard Church of Ithaca</h1>
            <div className="button-container">
                <a href='https://ithacavineyard.org/' target="_blank" rel="noreferrer">
                    <button>Website</button>
                </a>
                <a href='https://ithacavineyard.org/how-to-get-here/' target="_blank" rel="noreferrer">
                    <button>Rides</button>
                </a>
            </div>
            <p>Contact David Wang (dyw22) for more details.</p>
        </div>
    </div>
    <div className={`church-section church-section-left fade-in-section ${isVisible4 ? 'is-visible' : ''}`} ref={domRef4}>
        <div className="text-container">
            <h2>10:30 AM</h2>
            <h1>Calvary Chapel</h1>
            <div className="button-container">
                <a href='https://calvarychapelithaca.org/' target="_blank" rel="noreferrer">
                    <button>Website</button>
                </a>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLScOAMrSJuTAD45HhTtGL82HscS5YPMwgMmBOqTbkNufeDARAQ/viewform' target="_blank" rel="noreferrer">
                    <button>Rides</button>
                </a>
            </div>
            <p>Contact Brian Zhong (bz99) for more details.</p>
        </div>
        <img className="church-image" src={calvary} alt="calvary-image"></img>
    </div>
    <div className={`church-section church-section-right fade-in-section ${isVisible5 ? 'is-visible' : ''}`} ref={domRef5}>
        <img className="church-image" src={christ_chapel} alt="christ-chapel-image"></img>
        <div className="text-container">
            <h2>10:30 AM</h2>
            <h1>Christ Chapel</h1>
            <div className="button-container">
                <a href='https://www.christchapelithaca.org/' target="_blank" rel="noreferrer">
                    <button>Website</button>
                </a>
                <a href='https://christchapelithaca.churchcenter.com/people/forms/261746' target="_blank" rel="noreferrer">
                    <button>Rides</button>
                </a>
            </div>
            <p>Contact Melody Xu (myx2) for more details.</p>
        </div>
    </div>
    <Footer/>
</div>;
}