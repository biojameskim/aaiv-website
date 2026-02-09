import React, { useState, useEffect, useRef } from 'react';
import './css/Contact.css';
import contact_img from '../assets/contact/contact_background.png';
import instagram from '../assets/footer/instagram.svg';
import email from '../assets/footer/email.svg';
// import jonathan from '../assets/contact/SP25_exec/jonathan.svg';
// import kaitlin from '../assets/contact/SP24_exec/kaitlin.svg';
// import angie from '../assets/contact/SP24_exec/angie.svg';
// import jiaming from '../assets/contact/SP24_exec/jiaming.svg';
// import hannah from '../assets/contact/SP25_exec/hannah.svg';
// import joanna from '../assets/contact/SP25_exec/joanna.svg';
import phoebe from '../assets/contact/SP26_exec/phoebe_img.svg';
import christine from '../assets/contact/SP26_exec/christine_img.svg';
import joshua from '../assets/contact/SP26_exec/joshua_img.svg';
import pothan from '../assets/contact/SP26_exec/pothan_img.svg';
import Footer from '../components/Footer';
import Modal from 'react-modal';
import Profile from '../components/Profile';
// import jonathan_prof from '../assets/contact/SP25_exec/jonathan-prof.svg';
// import kaitlin_prof from '../assets/contact/SP24_exec/kaitlin-prof.svg';
// import angie_prof from '../assets/contact/SP24_exec/angie-prof.svg';
// import jiaming_prof from '../assets/contact/SP24_exec/jiaming-prof.svg';
// import hannah_prof from '../assets/contact/SP25_exec/hannah-prof.svg';
// import joanna_prof from '../assets/contact/SP25_exec/joanna-prof.svg';
import phoebe_prof from '../assets/contact/SP26_exec/phoebe-prof.svg';
import christine_prof from '../assets/contact/SP26_exec/christine-prof.svg';
import joshua_prof from '../assets/contact/SP26_exec/joshua-prof.svg';
import pothan_prof from '../assets/contact/SP26_exec/pothan-prof.svg';
import Question from '../components/Question';

import MailchimpForm from '../components/MailchimpForm';

export default function Contact({ isMobile = false }) {
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
    Modal.setAppElement('body');
    // const [isVisibleAngie, setVisibleAngie] = useState(false);
    // const [isVisibleKaitlin, setVisibleKaitlin] = useState(false);
    // const [isVisibleJiaming, setVisibleJiaming] = useState(false);
    const [isVisiblePhoebe, setVisiblePhoebe] = useState(false);
    const [isVisibleChristine, setVisibleChristine] = useState(false);
    const [isVisibleJoshua, setVisibleJoshua] = useState(false);
    const [isVisiblePothan, setVisiblePothan] = useState(false);

    const [isVisibleEmail, setVisibleEmail] = useState(false);

    // const [kaitlinIsOpen, setKaitlinIsOpen] = useState(false);
    // const [angieIsOpen, setAngieIsOpen] = useState(false);
    // const [jiamingIsOpen, setJiamingIsOpen] = useState(false);
    const [phoebeIsOpen, setPhoebeIsOpen] = useState(false);
    const [christineIsOpen, setChristineIsOpen] = useState(false);
    const [joshuaIsOpen, setJoshuaIsOpen] = useState(false);
    const [pothanIsOpen, setPothanIsOpen] = useState(false);

    // const kaitlinRef = useRef();
    // const angieRef = useRef();
    // const jiamingRef = useRef();
    const phoebeRef = useRef();
    const christineRef = useRef();
    const joshuaRef = useRef();
    const pothanRef = useRef();
    const emailRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisiblePhoebe(entry.isIntersecting);
                    }
                }
            });
        });
        observer.observe(phoebeRef.current);

        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisibleChristine(entry.isIntersecting);
                    }
                }
            });
        });
        observer2.observe(christineRef.current);

        const observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisibleJoshua(entry.isIntersecting);
                    }
                }
            });
        });
        observer3.observe(joshuaRef.current);

        const observer4 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisiblePothan(entry.isIntersecting);
                    }
                }
            });
        });
        observer4.observe(pothanRef.current);

        const observer5 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisibleEmail(entry.isIntersecting);
                    }
                }
            });
        });
        observer7.observe(emailRef.current);

    }, []);

    return <div className="main-container">
        <div className={`contact-title-container ${isMobile ? 'contact-title-container-mobile' : ''}`}>
            <img className={`contact-img ${isMobile ? 'contact-img-mobile' : ''}`} src={contact_img} alt="contact-img"></img>
            <div className={`text-container ${isMobile ? 'text-container-mobile' : ''}`}>
                <h1>Contact Us</h1>
                <p >Have more questions about who we are and what we do? Interested in serving?</p>
                <div className="icons">
                    <a href="https://www.instagram.com/cornellaaiv/" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={instagram} alt="insta-icon"></img>
                    </a>
                    <a href="mailto: cornellaaiv@gmail.com">
                        <img className="icon" src={email} alt="email-icon"></img>
                    </a>
                </div>
            </div>
        </div >
        <div className={`exec-container ${isMobile ? 'exec-container-mobile' : ''}`}>
            <h1>Connect with an Exec Member</h1>
            <div className="exec-members">
                <div className={`exec fade-in-section ${isVisiblePhoebe ? 'is-visible' : ''}`} ref={PhoebeRef} onClick={() => { setPhoebeIsOpen(true) }}>
                    <img className="exec-image" src={phoebe} alt="phoebe"></img>
                    <div className="exec-title">
                        <h3>Phoebe Qian (pq29)</h3>
                        <a href="mailto: pq2938@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>President</p>
                </div>

                <div className={`exec fade-in-section ${isVisibleChristine ? 'is-visible' : ''}`} ref={christineRef} onClick={() => { setChristineIsOpen(true) }}>
                    <img className="exec-image" src={christine} alt="christine"></img>
                    <div className="exec-title">
                        <h3>Christine Chen (cc2786)</h3>
                        <a href="mailto: cc2786@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>Large Group Coordinator</p>
                </div>
                <div className={`exec fade-in-section ${isVisibleJoshua ? 'is-visible' : ''}`} ref={joshuaRef} onClick={() => { setJoshuaIsOpen(true) }}>
                    <img className="exec-image" src={joshua} alt="joshua"></img>
                    <div className="exec-title">
                        <h3>Joshua Chen (jc3852)</h3>
                        <a href="mailto: jc3852@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>Discipleship Coordinator</p>
                </div>
                <div className={`exec fade-in-section ${isVisiblePothan ? 'is-visible' : ''}`} ref={pothanRef} onClick={() => { setPothanIsOpen(true) }}>
                    <img className="exec-image" src={pothan} alt="pothan"></img>
                    <div className="exec-title">
                        <h3>Pothan Tang (pt426)</h3>
                        <a href="mailto: pt426@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>Connection Coordinator</p>
                </div>
                
            </div>
            <div className="exec-modals">
                <Modal
                    isOpen={phoebeIsOpen}
                    onRequestClose={() => { setPhoebeIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile isMobile={isMobile} image={phoebe_prof} title={'Phoebe Qian'} text={'President'} email={'pq29@cornell.edu'} />
                        <Question isMobile={isMobile} image={phoebe_prof} question={'Tell us a bit about yourself.'} answer={'Hi! I’m Phoebe, a junior studying Computer Science from McLean, VA.'} />
                        <Question isMobile={isMobile} image={phoebe_prof} question={'Favorite AAIV memory?'} answer={'Playing man hunt in the arts quad after large group'} />
                        <Question isMobile={isMobile} image={phoebe_prof} question={'President Vision:'} 
                        answer={'My vision for AAIV is to unite student believers across diverse walks of faith, forming them through discipleship to become devoted servants of God and to live out Christ’s presence on campus and throughout the world. '} />
                    </div>
                </Modal>
                <Modal
                    isOpen={christineIsOpen}
                    onRequestClose={() => { setChristineIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile isMobile={isMobile} image={christine_prof} title={'Christine Chen'} text={'Large Group Coordinator'} email={'cc2786@cornell.edu'} />
                        <Question isMobile={isMobile} image={christine_prof} question={'Tell us a bit about yourself.'} answer={'Hi! I’m Christine, a junior studying Applied Economics and Management from Highland Park, NJ.'} />
                        <Question isMobile={isMobile} image={christine_prof} question={'Favorite AAIV memory?'} answer={'Mario kart in hollister 🚗💨🏃‍♀️'} />
                        <Question isMobile={isMobile} image={christine_prof} question={'What is your vision for AAIV?'} answer={'My vision for Large Group in AAIV is to help everyone love and pursue God wholeheartedly while learning how to live out their faith boldly. I hope to cultivate a welcoming and loving community for people to grow together that does not just inspire people for a night, but equips and encourages them to walk in faith.'} />
                    </div>
                </Modal>
                <Modal
                    isOpen={joshuaIsOpen}
                    onRequestClose={() => { setJoshuaIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile isMobile={isMobile} image={joshua_prof} title={'Joshua Chen'} text={'Discipleship Coordinator'} email={'jc3852@cornell.edu'} />
                        <Question isMobile={isMobile} image={joshua_prof} question={'Tell us a bit about yourself.'} answer={'Hi! I\'m Joshua, a sophomore studying Information Science from Brooklyn, NY'} />
                        <Question isMobile={isMobile} image={joshua_prof} question={'Favorite AAIV memory?'} answer={'Kayaking at Selah 2025'} />
                        <Question isMobile={isMobile} image={joshua_prof} question={'What is your vision for AAIV?'} answer={'I believe discipleship falls into place as brothers and sisters walk together intentionally in seeking the heart of Jesus. In light of this, my vision for discipleship through small group is to invite the Holy Spirit in these spaces that He may work in each one of us to be more like Him. Our prayer is that as AAIV grows in the coming year, we would bear fruit by building one another up as truth-seekers. In this pursuit, small groups would create spaces of vulnerability where we are able to deepen our relationship with Christ and walk in obedience to His every command.'} />
                    </div>
                </Modal>
                <Modal
                    isOpen={pothanIsOpen}
                    onRequestClose={() => { setPothanIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile isMobile={isMobile} image={pothan_prof} title={'Pothan Tang'} text={'Connection Coordinator'} email={'pt426@cornell.edu'} />
                        <Question isMobile={isMobile} image={pothan_prof} question={'Tell us a bit about yourself.'} answer={'Hi! I\'m Pothan, a sophomore studying Physics and Mathematics from Hong Kong.'} />
                        <Question isMobile={isMobile} image={pothan_prof} question={'Favorite AAIV memory?'} answer={'Playing sardines in Hollister Hall during ALGAE.'} />
                        <Question isMobile={isMobile} image={pothan_prof} question={'What is your vision for AAIV?'} answer={'To promote and facilitate the outreach ministry in AAIV.'} />
                    </div>
                </Modal>
            </div>
        </div>
        <div className="email-container">
            <div className="text-container">
                <h1>Email List</h1>
                <p>Join our LISTSERV to receive weekly updates on what’s happening at AAIV!</p>
            </div>

            <div className={`mailchimp-form fade-in-section ${isMobile ? 'mailchimp-form-mobile' : ''} ${isVisibleEmail ? 'is-visible' : ''}`} ref={emailRef}>
                <MailchimpForm />
            </div>
        </div>
        <Footer />
    </div >;
}