import React, { useState, useEffect, useRef } from 'react';
import './css/Contact.css';
import contact_img from '../assets/contact/contact_background.png';
import instagram from '../assets/footer/instagram.svg';
import facebook from '../assets/footer/facebook.svg';
import email from '../assets/footer/email.svg';
import amy from '../assets/contact/amy.svg';
import ben from '../assets/contact/ben.svg';
import jonah from '../assets/contact/jonah.svg';
import Footer from '../components/Footer';
import Modal from 'react-modal';
import Profile from '../components/Profile';
import amy_prof from '../assets/contact/amy-profile.svg';
import ben_prof from '../assets/contact/ben-profile.svg';
import jonah_prof from '../assets/contact/jonah-profile.svg';
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
    const [isVisibleAmy, setVisibleAmy] = useState(false);
    const [isVisibleBen, setVisibleBen] = useState(false);
    const [isVisibleJonah, setVisibleJonah] = useState(false);
    const [isVisibleEmail, setVisibleEmail] = useState(false);
    const [amyIsOpen, setAmyIsOpen] = useState(false);
    const [benIsOpen, setBenIsOpen] = useState(false);
    const [jonahIsOpen, setJonahIsOpen] = useState(false);

    const amyRef = useRef();
    const benRef = useRef();
    const jonahRef = useRef();
    const emailRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisibleAmy(entry.isIntersecting);
                    }
                }
            });
        });
        observer.observe(amyRef.current);

        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisibleBen(entry.isIntersecting);
                    }
                }
            });
        });
        observer2.observe(benRef.current);

        const observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisibleJonah(entry.isIntersecting);
                    }
                }
            });
        });
        observer3.observe(jonahRef.current);

        const observer4 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisibleEmail(entry.isIntersecting);
                    }
                }
            });
        });
        observer4.observe(emailRef.current);
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
                    <a href="https://www.facebook.com/cornellaaiv/" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={facebook} alt="fb-icon"></img>
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
                <div className={`exec fade-in-section ${isVisibleAmy ? 'is-visible' : ''}`} ref={amyRef} onClick={() => { setAmyIsOpen(true) }}>
                    <img className="exec-image" src={amy} alt="amy"></img>
                    <div className="exec-title">
                        <h3>Amy Ge (aqg4)</h3>
                        <a href="mailto: aqg4@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>Small Group Coordinator</p>
                </div>
                <div className={`exec fade-in-section ${isVisibleBen ? 'is-visible' : ''}`} ref={benRef} onClick={() => { setBenIsOpen(true) }}>
                    <img className="exec-image" src={ben} alt="amy"></img>
                    <div className="exec-title">
                        <h3>Ben Loong (bjl99)</h3>
                        <a href="mailto: bjl99@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>Outreach Coordinator</p>
                </div>
                <div className={`exec fade-in-section ${isVisibleJonah ? 'is-visible' : ''}`} ref={jonahRef} onClick={() => { setJonahIsOpen(true) }}>
                    <img className="exec-image" src={jonah} alt="amy"></img>
                    <div className="exec-title">
                        <h3>Jonah Bernard (jb2528)</h3>
                        <a href="mailto: jb2528@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>Large Group Coordinator</p>
                </div>
            </div>
            <div className="exec-modals">
                <Modal
                    isOpen={amyIsOpen}
                    onRequestClose={() => { setAmyIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile image={amy_prof} title={'Amy Ge'} text={'Small Group Coordinator'} email={'aqg4@cornell.edu'} />
                        <Question isMobile={isMobile} image={amy_prof} question={'Tell us a bit about yourself.'} answer={'Hii! I’m Amy, a freshman studying Information Science from San Diego, CA. Outside of AAIV, I’m also part of Cornell AppDev and the Cornell Badminton Club Team. In my free time, I enjoy art, video games, and reading.'} />
                        <Question isMobile={isMobile} image={amy_prof} question={'What is your vision for AAIV?'} answer={'My vision for AAIV is for us to be a witnessing community that seeks to share God’s love with the people around us. AAIV small groups hold a special place in my heart as I think it’s a great place to grow in our understanding of God’s word as well as in our relationships with each other. As small group coordinator, I hope to support our amazing small group leaders in facilitating these spaces. Feel free to reach out if you have any questions or just want to chat!'} />
                        <Question isMobile={isMobile} image={amy_prof} question={'Favorite AAIV memory?'} answer={'Stargazing on rawlings green!'} />
                        <Question isMobile={isMobile} image={amy_prof} question={'Describe AAIV with three emojis.'} answer={'💓🙌🤠'} answerFontSize={'32px'} />
                    </div>
                </Modal>
                <Modal
                    isOpen={benIsOpen}
                    onRequestClose={() => { setBenIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile image={ben_prof} title={'Ben Loong'} text={'Outreach Coordinator'} email={'bjl99@cornell.edu'} />
                        <Question isMobile={isMobile} image={ben_prof} question={'Tell us a bit about yourself.'} answer={'Hello! I am Ben. I am a freshman studying Human Biology, Health, and Society and planning to minor in Healthy Futures and Human Development. I am from Smyrna, Georgia, and apart from AAIV, I am in Big Red Ambassadors, Phi Delta Epsilon, and a few other health-centered clubs on campus. In my free time, I enjoy listening to music and looking for the newest show to binge!'} />
                        <Question isMobile={isMobile} image={ben_prof} question={'What is your vision for AAIV?'} answer={'For AAIV, I envision a community motivated to share God’s love with others, as well as bolster each other’s spiritual journeys. Through outreach, I hope to provide an “open door” for any person of any faith background to connect and learn more about Christianity, while also reducing as many barriers as possible for people to form supportive relationships. As outreach coordinator, I aspire to provide opportunities and events for people in the Cornell community to learn more about AAIV and facilitate the growth of a witnessing community. '} />
                        <Question isMobile={isMobile} image={ben_prof} question={'Favorite AAIV memory?'} answer={'Dancing with the guys in AAIV as “Boys Generation” for Felly Dessert, an end-of-the-year formal!'} />
                        <Question isMobile={isMobile} image={ben_prof} question={'Describe AAIV with three emojis.'} answer={'🕺🍹🥰'} answerFontSize={'32px'} />
                    </div>
                </Modal>
                <Modal
                    isOpen={jonahIsOpen}
                    onRequestClose={() => { setJonahIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile image={jonah_prof} title={'Jonah Bernard'} text={'Large Group Coordinator'} email={'jb2528@cornell.edu'} />
                        <Question isMobile={isMobile} image={jonah_prof} question={'Tell us a bit about yourself.'} answer={'Hi! I\'m Jonah :) I\'m in the Class of 2026 studying ECE and ORIE. I come from Seattle, WA and in my free time I love to read ;)'} />
                        <Question isMobile={isMobile} image={jonah_prof} question={'What is your vision for AAIV?'} answer={'I believe AAIV should be a place where anyone on campus can come and find a loving, Christ-centered community. As large group coordinator, I want everyone to feel welcome, grow individually and as a community, and have a lot of fun together!'} />
                        <Question isMobile={isMobile} image={jonah_prof} question={'Favorite AAIV memory?'} answer={'My favorite AAIV memory is playing beach volleyball with Intervarsity chapters from all over NY and NJ at our annual Selah retreat :))'} />
                        <Question isMobile={isMobile} image={jonah_prof} question={'Describe AAIV with three emojis.'} answer={'🙏🥳🥺'} answerFontSize={'32px'} />
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