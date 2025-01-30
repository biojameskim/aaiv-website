import React, { useState, useEffect, useRef } from 'react';
import './css/Contact.css';
import contact_img from '../assets/contact/contact_background.png';
import instagram from '../assets/footer/instagram.svg';
import email from '../assets/footer/email.svg';
import elisabeth from '../assets/contact/SP24_exec/elisabeth.svg';
import kaitlin from '../assets/contact/SP24_exec/kaitlin.svg';
import angie from '../assets/contact/SP24_exec/angie.svg';
import jiaming from '../assets/contact/SP24_exec/jiaming.svg';
import hannah from '../assets/contact/SP24_exec/hannah.svg';
import serena from '../assets/contact/SP24_exec/serena.svg';
import Footer from '../components/Footer';
import Modal from 'react-modal';
import Profile from '../components/Profile';
import elisabeth_prof from '../assets/contact/SP24_exec/elisabeth-prof.svg';
import kaitlin_prof from '../assets/contact/SP24_exec/kaitlin-prof.svg';
import angie_prof from '../assets/contact/SP24_exec/angie-prof.svg';
import jiaming_prof from '../assets/contact/SP24_exec/jiaming-prof.svg';
import hannah_prof from '../assets/contact/SP24_exec/hannah-prof.svg';
import serena_prof from '../assets/contact/SP24_exec/serena-prof.svg';
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
    const [isVisibleElisabeth, setVisibleElisabeth] = useState(false);
    const [isVisibleAngie, setVisibleAngie] = useState(false);
    const [isVisibleKaitlin, setVisibleKaitlin] = useState(false);
    const [isVisibleJiaming, setVisibleJiaming] = useState(false);
    const [isVisibleHannah, setVisibleHannah] = useState(false);
    const [isVisibleSerena, setVisibleSerena] = useState(false);
    const [isVisibleEmail, setVisibleEmail] = useState(false);
    const [elisabethIsOpen, setElisabethIsOpen] = useState(false);
    const [kaitlinIsOpen, setKaitlinIsOpen] = useState(false);
    const [angieIsOpen, setAngieIsOpen] = useState(false);
    const [jiamingIsOpen, setJiamingIsOpen] = useState(false);
    const [hannahIsOpen, setHannahIsOpen] = useState(false);
    const [serenaIsOpen, setSerenaIsOpen] = useState(false);

    const elisabethRef = useRef();
    const kaitlinRef = useRef();
    const angieRef = useRef();
    const jiamingRef = useRef();
    const hannahRef = useRef();
    const serenaRef = useRef();
    const emailRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisibleElisabeth(entry.isIntersecting);
                    }
                }
            });
        });
        observer.observe(elisabethRef.current);

        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisibleKaitlin(entry.isIntersecting);
                    }
                }
            });
        });
        observer2.observe(kaitlinRef.current);

        const observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisibleAngie(entry.isIntersecting);
                    }
                }
            });
        });
        observer3.observe(angieRef.current);

        const observer4 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisibleJiaming(entry.isIntersecting);
                    }
                }
            });
        });
        observer4.observe(jiamingRef.current);
        const observer5 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisibleHannah(entry.isIntersecting);
                    }
                }
            });
        });
        observer5.observe(hannahRef.current);
        const observer6 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisibleSerena(entry.isIntersecting);
                    }
                }
            });
        });
        observer6.observe(serenaRef.current);

        const observer7 = new IntersectionObserver(entries => {
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
                <div className={`exec fade-in-section ${isVisibleElisabeth ? 'is-visible' : ''}`} ref={elisabethRef} onClick={() => { setElisabethIsOpen(true) }}>
                    <img className="exec-image" src={elisabeth} alt="elisabeth"></img>
                    <div className="exec-title">
                        <h3>Elisabeth Pan (ep438)</h3>
                        <a href="mailto: ep438@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>President</p>
                </div>
                <div className={`exec fade-in-section ${isVisibleKaitlin ? 'is-visible' : ''}`} ref={kaitlinRef} onClick={() => { setKaitlinIsOpen(true) }}>
                    <img className="exec-image" src={kaitlin} alt="elisabeth"></img>
                    <div className="exec-title">
                        <h3>Kaitlin Chung (khc73)</h3>
                        <a href="mailto: khc73@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>Small Group Coordinator</p>
                </div>
                <div className={`exec fade-in-section ${isVisibleAngie ? 'is-visible' : ''}`} ref={angieRef} onClick={() => { setAngieIsOpen(true) }}>
                    <img className="exec-image" src={angie} alt="elisabeth"></img>
                    <div className="exec-title">
                        <h3>Angie Huang (amh356)</h3>
                        <a href="mailto: amh356@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>Outreach Coordinator</p>
                </div>
                <div className={`exec fade-in-section ${isVisibleJiaming ? 'is-visible' : ''}`} ref={jiamingRef} onClick={() => { setJiamingIsOpen(true) }}>
                    <img className="exec-image" src={jiaming} alt="elisabeth"></img>
                    <div className="exec-title">
                        <h3>Jiaming Yuan (jy729)</h3>
                        <a href="mailto: jy729@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>Community Co-Coordinator</p>
                </div>
                <div className={`exec fade-in-section ${isVisibleHannah ? 'is-visible' : ''}`} ref={hannahRef} onClick={() => { setHannahIsOpen(true) }}>
                    <img className="exec-image" src={hannah} alt="elisabeth"></img>
                    <div className="exec-title">
                        <h3>Hannah Wang (hw762)</h3>
                        <a href="mailto: hw762@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>Community Co-Coordinator</p>
                </div>
                <div className={`exec fade-in-section ${isVisibleSerena ? 'is-visible' : ''}`} ref={serenaRef} onClick={() => { setSerenaIsOpen(true) }}>
                    <img className="exec-image" src={serena} alt="elisabeth"></img>
                    <div className="exec-title">
                        <h3>Serena Wang (sw755)</h3>
                        <a href="mailto: sw755@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>Large Group Coordinator</p>
                </div>
            </div>
            <div className="exec-modals">
                <Modal
                    isOpen={elisabethIsOpen}
                    onRequestClose={() => { setElisabethIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile className={`${isMobile ? 'profile-mobile' : 'profile'}`} image={elisabeth_prof} title={'Elisabeth Pan'} text={'President'} email={'ep438@cornell.edu'} />
                        <Question isMobile={isMobile} image={elisabeth_prof} question={'Tell us a bit about yourself.'} answer={'Hi! I’m Elisabeth, a junior studying Information Science from Queens, NY.'} />
                        <Question isMobile={isMobile} image={elisabeth_prof} question={'What is your vision for AAIV?'} answer={'Our vision is for AAIV to build up and send out leaders in the kingdom of God. As Christians were called to make disciples of all nations, in that we are called to lead others to Christ. Our hope for AAIV is that it can be a community where we can be built up in both our personal and spiritual lives to serve one another and carry out this calling to be leaders and witnesses (that is reflections of Christ) to Cornell’s campus.'} />
                        <Question isMobile={isMobile} image={elisabeth_prof} question={'Favorite AAIV memory?'} answer={'Playing manhunt on eng quad '} />
                        <Question isMobile={isMobile} image={elisabeth_prof} question={'Describe AAIV with three emojis.'} answer={'🧋🕺🔫'} answerFontSize={'32px'} />
                    </div>
                </Modal>
                <Modal
                    isOpen={kaitlinIsOpen}
                    onRequestClose={() => { setKaitlinIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile className={`${isMobile ? 'profile-mobile' : 'profile'}`} image={kaitlin_prof} title={'Kaitlin Chung'} text={'Small Group Coordinator'} email={'khc73@cornell.edu'} />
                        <Question isMobile={isMobile} image={kaitlin_prof} question={'Tell us a bit about yourself.'} answer={'Hi! I’m Kaitlin, a sophomore studying Biological Sciences from Corning, NY.'} />
                        <Question isMobile={isMobile} image={kaitlin_prof} question={'What is your vision for AAIV?'} answer={'My vision for small group this semester is to create intimate spaces where non-believers, seekers, and Christians can discover the joy to be found in reading Scripture and seeking God together. By engaging in weekly Bible study, open sharing, and application of the Word to daily life, we are able to become better reflections of Christ’s love to those around us.'} />
                        <Question isMobile={isMobile} image={kaitlin_prof} question={'Favorite AAIV memory?'} answer={'The women in the Bible and fundamentals of faith small group workshops'} />
                        <Question isMobile={isMobile} image={kaitlin_prof} question={'Describe AAIV with three emojis.'} answer={'🧋🕺🔫'} answerFontSize={'32px'} />
                    </div>
                </Modal>
                <Modal
                    isOpen={angieIsOpen}
                    onRequestClose={() => { setAngieIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile className={`${isMobile ? 'profile-mobile' : 'profile'}`} image={angie_prof} title={'Angie Huang'} text={'Outreach Coordinator'} email={'amh356@cornell.edu'} />
                        <Question isMobile={isMobile} image={angie_prof} question={'Tell us a bit about yourself.'} answer={'Hello! I am Angie. I am a Junior studying Chemistry & Chemical Biology, and I am from Fairfax, VA'} />
                        <Question isMobile={isMobile} image={angie_prof} question={'What is your vision for AAIV?'} answer={'Outreach ministry seeks to reach people from different corners of campus, from those who have been meaning to seek out a fellowship to those who have never heard about Jesus! We hope to invite people to a place where they not only can find belonging and meaningful relationships, but also to somewhere they can be encouraged to seek and follow the Lord in deeper, more personal ways.'} />
                        <Question isMobile={isMobile} image={angie_prof} question={'Favorite AAIV memory?'} answer={'yelling during attempts to play nertz at algae while fighting a horrendous headache from overly sweet boba into wee hours of the morning'} />
                        <Question isMobile={isMobile} image={angie_prof} question={'Describe AAIV with three emojis.'} answer={'🧋🕺🔫'} answerFontSize={'32px'} />
                    </div>
                </Modal>
                <Modal
                    isOpen={jiamingIsOpen}
                    onRequestClose={() => { setJiamingIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile className={`${isMobile ? 'profile-mobile' : 'profile'}`} image={jiaming_prof} title={'Jiaming Yuan'} text={'Community Co-Coordinator'} email={'jy729@cornell.edu'} />
                        <Question isMobile={isMobile} image={jiaming_prof} question={'Tell us a bit about yourself.'} answer={'Hi! I\'m Jiaming. I\'m in the Class of 2026 studying Environmental Engineering. I\'m from San Fransisco, CA'} />
                        <Question isMobile={isMobile} image={jiaming_prof} question={'What is your vision for AAIV?'} answer={'Our vision is to make intentional spaces where members of AAIV can live together as one body of Christ. We hope to plan events that foster a welcoming and supportive community that encourages us to grow in faith and character as we spur each other on toward love and good works!'} />
                        <Question isMobile={isMobile} image={jiaming_prof} question={'Favorite AAIV memory?'} answer={'Sophomore class dinner at Rose, where so many of us showed up that we combined two long tables and got confronted about creating a fire hazard'} />
                        <Question isMobile={isMobile} image={jiaming_prof} question={'Describe AAIV with three emojis.'} answer={'🧋🕺🔫'} answerFontSize={'32px'} />
                    </div>
                </Modal>
                <Modal
                    isOpen={hannahIsOpen}
                    onRequestClose={() => { setHannahIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile className={`${isMobile ? 'profile-mobile' : 'profile'}`} image={hannah_prof} title={'Hannah Wang'} text={'Community Co-Coordinator'} email={'hw762@cornell.edu'} />
                        <Question isMobile={isMobile} image={hannah_prof} question={'Tell us a bit about yourself.'} answer={'Hi! I\'m Hannah. I\'m in the Class of 2027 studying Astronomy/Astrophysics. I\'m from Scarsdale, NY'} />
                        <Question isMobile={isMobile} image={hannah_prof} question={'What is your vision for AAIV?'} answer={'Our vision is to make intentional spaces where members of AAIV can live together as one body of Christ. We hope to plan events that foster a welcoming and supportive community that encourages us to grow in faith and character as we spur each other on toward love and good works!'} />
                        <Question isMobile={isMobile} image={hannah_prof} question={'Favorite AAIV memory?'} answer={'Selah FA23 & walking to UTea in the cold darkness then playing card games during ALGAE '} />
                        <Question isMobile={isMobile} image={hannah_prof} question={'Describe AAIV with three emojis.'} answer={'👨‍👩‍👦✝️🏃'} answerFontSize={'32px'} />
                    </div>
                </Modal>
                <Modal
                    isOpen={serenaIsOpen}
                    onRequestClose={() => { setSerenaIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile className={`${isMobile ? 'profile-mobile' : 'profile'}`} image={serena_prof} title={'Serena Wang'} text={'Large Group Coordinator'} email={'sw755@cornell.edu'} />
                        <Question isMobile={isMobile} image={serena_prof} question={'Tell us a bit about yourself.'} answer={'Hi! I\'m Serena. I\'m in the Class of 2025 studying Policy Analysis & Management. I\'m from McLean, VA'} />
                        <Question isMobile={isMobile} image={serena_prof} question={'What is your vision for AAIV?'} answer={'My vision for large group centers around discipleship and hospitality. My hope is that large group would be a welcoming and loving space where people would grow in spiritual discernment and knowledge of the Word, and be able to tangibly feel the love of God through fellowship.'} />
                        <Question isMobile={isMobile} image={serena_prof} question={'Favorite AAIV memory?'} answer={'Monday Small Group Testimony Night!'} />
                        <Question isMobile={isMobile} image={serena_prof} question={'Describe AAIV with three emojis.'} answer={'🙌📖🕺'} answerFontSize={'32px'} />
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