import React from 'react';
import './css/Church.css';
import ficcc from '../assets/church/ficcc.svg';
// import ithaca_first from '../assets/church/ithaca-first.svg';
import vineyard from '../assets/church/vineyard.svg';
import calvary from '../assets/church/calvary.svg';
import christ_chapel from '../assets/church/christ-chapel.svg';
import emmaus from '../assets/church/emmaus.svg';
import Footer from '../components/Footer';

export default function Church({ isMobile = false }) {
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
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisible1(entry.isIntersecting);
                    }
                }
            });
        });
        observer.observe(domRef1.current);
    }, []);
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisible2(entry.isIntersecting);
                    }
                }
            });
        });
        observer.observe(domRef2.current);
    }, []);
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisible3(entry.isIntersecting);
                    }
                }
            });
        });
        observer.observe(domRef3.current);
    }, []);
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisible4(entry.isIntersecting);
                    }
                }
            });
        });
        observer.observe(domRef4.current);
    }, []);
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisible5(entry.isIntersecting);
                    }
                }
            });
        });
        observer.observe(domRef5.current);
    }, []);

    return <div className="main-container">
        <div className="church-title-container">
            <div className={`${isMobile ? 'text-container-mobile' : 'text-container'} `}>
                <h1>Looking for a Church?</h1>
                <p>While AAIV provides a great community for Christ-centered growth and accountability, it does not replace church. We strongly encourage you to check out some of the churches in the Ithaca area. More information can be found by contacting the person listed under each church, especially if you want a friend to church hop with!</p>
            </div>
        </div>
        <div className={`church-section ${isMobile ? 'church-section-mobile' : ''} church-section-right fade-in-section ${isVisible1 ? 'is-visible' : ''}`} ref={domRef1}>
            <img className={`${isMobile ? 'church-image-mobile' : 'church-image'}`} src={ficcc} alt="ficcc"></img>
            <div className={`${isMobile ? 'text-container-mobile' : 'text-container'}`}>
                <h2>9:45 AM</h2>
                <h1>First Ithaca Chinese Christian Church</h1>
                <div className={`button-container ${isMobile ? 'button-container-mobile' : ''}`}>
                    <a href='http://em.ficcc.org/' target="_blank" rel="noopener noreferrer">
                        <button>Website</button>
                    </a>
                    <a href='http://em.ficcc.org/#announcements' target="_blank" rel="noopener noreferrer">
                        <button>Rides</button>
                    </a>
                </div>
                <p>Contact Micah Chen (mc2284) for more details.</p>
            </div>
        </div>
        <div className={`church-section ${isMobile ? 'church-section-mobile' : ''} church-section-left fade-in-section ${isVisible2 ? 'is-visible' : ''}`} ref={domRef2}>
            <div className={`${isMobile ? 'text-container-mobile' : 'text-container'}`}>
                <h2>10:00 AM</h2>
                <h1>Vineyard Church of Ithaca</h1>
                <div className={`button-container ${isMobile ? 'button-container-mobile' : ''}`}>
                    <a href='https://ithacavineyard.org/' target="_blank" rel="noopener noreferrer">
                        <button>Website</button>
                    </a>
                    <a href='https://ithacavineyard.org/how-to-get-here/' target="_blank" rel="noopener noreferrer">
                        <button>Rides</button>
                    </a>
                </div>
                <p>Contact David Wang (dyw22) for more details.</p>
            </div>
            <img className={`${isMobile ? 'church-image-mobile' : 'church-image'}`} src={vineyard} alt="vineyard"></img>
        </div>
        <div className={`church-section ${isMobile ? 'church-section-mobile' : ''} church-section-right  fade-in-section ${isVisible3 ? 'is-visible' : ''}`} ref={domRef3}>
            <img className={`${isMobile ? 'church-image-mobile' : 'church-image'}`} src={christ_chapel} alt="christ-chapel"></img>
            <div className={`${isMobile ? 'text-container-mobile' : 'text-container'}`}>
                <h2>9:00 AM & 11:00 AM</h2>
                <h1>Christ Chapel</h1>
                <div className={`button-container ${isMobile ? 'button-container-mobile' : ''}`}>
                    <a href='https://www.christchapelithaca.org/' target="_blank" rel="noopener noreferrer">
                        <button>Website</button>
                    </a>
                    <a href='https://christchapelithaca.churchcenter.com/people/forms/261746' target="_blank" rel="noopener noreferrer">
                        <button>Rides</button>
                    </a>
                </div>
                <p>Contact Melody Xu (myx2) for more details.</p>
            </div>
        </div>
        <div className={`church-section ${isMobile ? 'church-section-mobile' : ''} church-section-left fade-in-section ${isVisible4 ? 'is-visible' : ''}`} ref={domRef4}>
            <div className={`${isMobile ? 'text-container-mobile' : 'text-container'}`}>
                <h2>10:30 AM</h2>
                <h1>Calvary Chapel</h1>
                <div className={`button-container ${isMobile ? 'button-container-mobile' : ''}`}>
                    <a href='https://calvarychapelithaca.org/' target="_blank" rel="noopener noreferrer">
                        <button>Website</button>
                    </a>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLScOAMrSJuTAD45HhTtGL82HscS5YPMwgMmBOqTbkNufeDARAQ/viewform' target="_blank" rel="noopener noreferrer">
                        <button>Rides</button>
                    </a>
                </div>
                <p>Contact Angie Huang (amh356) for more details.</p>
            </div>
            <img className={`${isMobile ? 'church-image-mobile' : 'church-image'}`} src={calvary} alt="calvary"></img>
        </div>
        <div className={`church-section ${isMobile ? 'church-section-mobile' : ''} church-section-right fade-in-section ${isVisible5 ? 'is-visible' : ''}`} ref={domRef5}>
            <img className={`${isMobile ? 'church-image-mobile' : 'church-image'}`} src={emmaus} alt="emmaus-road"></img>
            <div className={`${isMobile ? 'text-container-mobile' : 'text-container'}`}>
                <h2>10:30 AM</h2>
                <h1>Emmaus Road</h1>
                <div className={`button-container ${isMobile ? 'button-container-mobile' : ''}`}>
                    <a href='https://www.emmausroadcornell.com/' target="_blank" rel="noopener noreferrer">
                        <button>Website</button>
                    </a>
                </div>
                <p>Anabel Taylor Hall B21 (One World Room)</p>
                <p>Contact Kaitlin Chung (khc73) for more details.</p>
            </div>
        </div>
        <Footer />
    </div>;
}

