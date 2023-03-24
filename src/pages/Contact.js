import React, { useState, useEffect, useRef } from 'react';
import './css/Contact.css';
import contact_img from '../assets/contact/contact-img.svg';
import instagram from '../assets/footer/instagram.svg';
import facebook from '../assets/footer/facebook.svg';
import email from '../assets/footer/email.svg';
import amy from '../assets/contact/amy.svg';
import ben from '../assets/contact/ben.svg';
import jonah from '../assets/contact/jonah.svg';
import Footer from '../components/Footer';
import Modal from 'react-modal';

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
        },
    };
    const [isVisibleAmy, setVisibleAmy] = useState(false);
    const [isVisibleBen, setVisibleBen] = useState(false);
    const [isVisibleJonah, setVisibleJonah] = useState(false);
    const [amyIsOpen, setAmyIsOpen] = useState(false);
    const [benIsOpen, setBenIsOpen] = useState(false);
    const [jonahIsOpen, setJonahIsOpen] = useState(false);

    const amyRef = useRef();
    const benRef = useRef();
    const jonahRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisibleAmy(entry.isIntersecting));
        });
        observer.observe(amyRef.current);

        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisibleBen(entry.isIntersecting));
        });
        observer2.observe(benRef.current);

        const observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisibleJonah(entry.isIntersecting));
        });
        observer3.observe(jonahRef.current);
    }, []);

    return <div className="main-container">
        <div className={`contact-title-container ${isMobile ? 'contact-title-container-mobile' : ''}`}>
            <img className={`contact-img ${isMobile ? 'contact-img-mobile' : ''}`} src={contact_img} alt="contact-img"></img>
            <div className={`text-container ${isMobile ? 'text-container-mobile' : ''}`}>
                <h1>Contact Us</h1>
                <p>Do you have more questions about who we are and what we do? Interested in serving? </p>
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
        </div>
        <div className="exec-container">
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
                        <a href="mailto: bjl99@cornell.edu">
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
                    <h5>Tell us a little bit about yourself!</h5>
                    <p>Hii! I’m Amy, a freshman studying Information Science from San Diego, CA.
                        Outside of AAIV, I’m also part of Cornell AppDev and the Cornell Badminton Club Team,
                        and in my free time, I enjoy art, video games, and reading. </p>
                    <h5>What’s your vision for aaiv?</h5>
                    <p>My vision for AAIV is for us to be a witnessing community that
                        seeks to share God’s love with the people around us.
                        AAIV small groups hold a special place in my heart as
                        I think it’s such great place to grow in our understanding of
                        God’s word as well as in our relationships with each other.
                        As small group coordinator, I hope to support our amazing small
                        group leaders in facilitating these spaces, and feel free to
                        reach out if you have any questions or just want to chat!</p>
                    <h5>Favorite aaiv memory?</h5>
                    <p>Stargazing on Rawlings Green with Thursday SG c:</p>
                    <h5>Describe aaiv in 3 emojis...</h5>
                    <p>💓🙌🤠</p>
                </Modal>
                <Modal
                    isOpen={benIsOpen}
                    onRequestClose={() => { setBenIsOpen(false) }}
                    style={customStyles}
                >
                    <h5>Tell us a little bit about yourself!</h5>
                    <h5>What’s your vision for aaiv?</h5>
                    <h5>Favorite aaiv memory?</h5>
                    <h5>Describe aaiv in 3 emojis...</h5>
                </Modal>
                <Modal
                    isOpen={jonahIsOpen}
                    onRequestClose={() => { setJonahIsOpen(false) }}
                    style={customStyles}
                >
                    <h5>Tell us a little bit about yourself!</h5>
                    <p>Hi! I’m Jonah:&#41; I’m in the Class of 2026 studying ECE and ORIE. I come from Seattle, WA and in my free time I love to read;&#41;</p>
                    <h5>What’s your vision for aaiv?</h5>
                    <p>
                        I believe AAIV should be a place where anyone on campus can come and find a loving, Christ-centered community.
                        As large group coordinator, I want everyone to feel welcome, grow individually and as a community, and have a lot of fun together!
                    </p>
                    <h5>Favorite aaiv memory?</h5>
                    <p>My favorite AAIV memory is playing beach volleyball with Intervarsity chapters from all over NY and NJ at our annual Selah retreat:&#41;&#41;</p>
                    <h5>Describe aaiv in 3 emojis...</h5>
                    <p>🙏🥳🥹</p>
                </Modal>
            </div>
        </div>
        <div className="email-container">
            <h2>Join Our Mailing List!</h2>
            <div className='mailchimp-form'>
                <MailchimpForm />
            </div>
        </div>
        <Footer />
    </div >;
}