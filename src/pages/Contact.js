import React, { useState, useEffect, useRef } from 'react';
import './css/Contact.css';
import contact_img from '../assets/contact/contact_background.png';
import instagram from '../assets/footer/instagram.svg';
import email from '../assets/footer/email.svg';
import jonathan from '../assets/contact/SP25_exec/jonathan.svg';
// import kaitlin from '../assets/contact/SP24_exec/kaitlin.svg';
// import angie from '../assets/contact/SP24_exec/angie.svg';
// import jiaming from '../assets/contact/SP24_exec/jiaming.svg';
import hannah from '../assets/contact/SP25_exec/hannah.svg';
import joanna from '../assets/contact/SP25_exec/joanna.svg';
import Footer from '../components/Footer';
import Modal from 'react-modal';
import Profile from '../components/Profile';
import jonathan_prof from '../assets/contact/SP25_exec/jonathan-prof.svg';
// import kaitlin_prof from '../assets/contact/SP24_exec/kaitlin-prof.svg';
// import angie_prof from '../assets/contact/SP24_exec/angie-prof.svg';
// import jiaming_prof from '../assets/contact/SP24_exec/jiaming-prof.svg';
import hannah_prof from '../assets/contact/SP25_exec/hannah-prof.svg';
import joanna_prof from '../assets/contact/SP25_exec/joanna-prof.svg';
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
    const [isVisibleJonathan, setVisibleJonathan] = useState(false);
    // const [isVisibleAngie, setVisibleAngie] = useState(false);
    // const [isVisibleKaitlin, setVisibleKaitlin] = useState(false);
    // const [isVisibleJiaming, setVisibleJiaming] = useState(false);
    const [isVisibleHannah, setVisibleHannah] = useState(false);
    const [isVisibleJoanna, setVisibleJoanna] = useState(false);
    const [isVisibleEmail, setVisibleEmail] = useState(false);

    const [jonathanIsOpen, setJonathanIsOpen] = useState(false);
    // const [kaitlinIsOpen, setKaitlinIsOpen] = useState(false);
    // const [angieIsOpen, setAngieIsOpen] = useState(false);
    // const [jiamingIsOpen, setJiamingIsOpen] = useState(false);
    const [hannahIsOpen, setHannahIsOpen] = useState(false);
    const [joannaIsOpen, setJoannaIsOpen] = useState(false);

    const jonathanRef = useRef();
    // const kaitlinRef = useRef();
    // const angieRef = useRef();
    // const jiamingRef = useRef();
    const hannahRef = useRef();
    const joannaRef = useRef();
    const emailRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.top > 0) {
                    if (entry.isIntersecting) {
                        setVisibleJonathan(entry.isIntersecting);
                    }
                }
            });
        });
        observer.observe(jonathanRef.current);

        // const observer2 = new IntersectionObserver(entries => {
        //     entries.forEach(entry => {
        //         if (entry.boundingClientRect.top > 0) {
        //             if (entry.isIntersecting) {
        //                 setVisibleKaitlin(entry.isIntersecting);
        //             }
        //         }
        //     });
        // });
        // observer2.observe(kaitlinRef.current);

        // const observer3 = new IntersectionObserver(entries => {
        //     entries.forEach(entry => {
        //         if (entry.boundingClientRect.top > 0) {
        //             if (entry.isIntersecting) {
        //                 setVisibleAngie(entry.isIntersecting);
        //             }
        //         }
        //     });
        // });
        // observer3.observe(angieRef.current);

        // const observer4 = new IntersectionObserver(entries => {
        //     entries.forEach(entry => {
        //         if (entry.boundingClientRect.top > 0) {
        //             if (entry.isIntersecting) {
        //                 setVisibleJiaming(entry.isIntersecting);
        //             }
        //         }
        //     });
        // });
        // observer4.observe(jiamingRef.current);
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
                        setVisibleJoanna(entry.isIntersecting);
                    }
                }
            });
        });
        observer6.observe(joannaRef.current);

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
                <div className={`exec fade-in-section ${isVisibleJonathan ? 'is-visible' : ''}`} ref={jonathanRef} onClick={() => { setJonathanIsOpen(true) }}>
                    <img className="exec-image" src={jonathan} alt="jonathan"></img>
                    <div className="exec-title">
                        <h3>Jonathan Wang (jyw38)</h3>
                        <a href="mailto: jyw38@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>President</p>
                </div>

                <div className={`exec fade-in-section ${isVisibleHannah ? 'is-visible' : ''}`} ref={hannahRef} onClick={() => { setHannahIsOpen(true) }}>
                    <img className="exec-image" src={hannah} alt="hannah"></img>
                    <div className="exec-title">
                        <h3>Hannah Wang (hw762)</h3>
                        <a href="mailto: hw762@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>Small Group Coordinator</p>
                </div>

                {/* <div className={`exec fade-in-section ${isVisibleAngie ? 'is-visible' : ''}`} ref={angieRef} onClick={() => { setAngieIsOpen(true) }}>
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
                </div> */}
                <div className={`exec fade-in-section ${isVisibleJoanna ? 'is-visible' : ''}`} ref={joannaRef} onClick={() => { setJoannaIsOpen(true) }}>
                    <img className="exec-image" src={joanna} alt="joanna"></img>
                    <div className="exec-title">
                        <h3>Joanna Tan (jat362)</h3>
                        <a href="mailto: jat362@cornell.edu">
                            <img className="exec-icon" src={email} alt="email-icon"></img>
                        </a>
                    </div>
                    <p>Large Group Coordinator</p>
                </div>
            </div>
            <div className="exec-modals">
                <Modal
                    isOpen={jonathanIsOpen}
                    onRequestClose={() => { setJonathanIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile isMobile={isMobile} image={jonathan_prof} title={'Jonathan Wang'} text={'President'} email={'jyw38@cornell.edu'} />
                        <Question isMobile={isMobile} image={jonathan_prof} question={'Tell us a bit about yourself.'} answer={'Hi! I’m Jonathan, a sophomore studying Computer Science from Northborough, MA.'} />
                        <Question isMobile={isMobile} image={jonathan_prof} question={'Favorite AAIV memory?'} answer={'Playing irl mario kart and nertz during algae.'} />
                        <Question isMobile={isMobile} image={jonathan_prof} question={'President & Outreach Vision:'} 
                        answer={
                            'My vision is to cultivate a culture of vulnerability within the fellowship—a space where we, \
                            as the body of Christ, can come together to learn, grow, and deepen our love for Jesus. We want \
                            AAIV to continue to be a welcoming environment where both believers and non-believers feel safe \
                            to ask questions, share their lives, and rely on Jesus in every situation. Ultimately, we hope to \
                            see the fellowship ignited with a passion and boldness to share the Gospel, fully embracing \
                            and reflecting the transformative work of the Lord in our lives.'} />
                    </div>
                </Modal>
                {/* <Modal
                    isOpen={kaitlinIsOpen}
                    onRequestClose={() => { setKaitlinIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile isMobile={isMobile} image={kaitlin_prof} title={'Kaitlin Chung'} text={'Small Group Coordinator'} email={'khc73@cornell.edu'} />
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
                        <Profile isMobile={isMobile} image={angie_prof} title={'Angie Huang'} text={'Outreach Coordinator'} email={'amh356@cornell.edu'} />
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
                        <Profile isMobile={isMobile} image={jiaming_prof} title={'Jiaming Yuan'} text={'Community Co-Coordinator'} email={'jy729@cornell.edu'} />
                        <Question isMobile={isMobile} image={jiaming_prof} question={'Tell us a bit about yourself.'} answer={'Hi! I\'m Jiaming. I\'m in the Class of 2026 studying Environmental Engineering. I\'m from San Fransisco, CA'} />
                        <Question isMobile={isMobile} image={jiaming_prof} question={'What is your vision for AAIV?'} answer={'Our vision is to make intentional spaces where members of AAIV can live together as one body of Christ. We hope to plan events that foster a welcoming and supportive community that encourages us to grow in faith and character as we spur each other on toward love and good works!'} />
                        <Question isMobile={isMobile} image={jiaming_prof} question={'Favorite AAIV memory?'} answer={'Sophomore class dinner at Rose, where so many of us showed up that we combined two long tables and got confronted about creating a fire hazard'} />
                        <Question isMobile={isMobile} image={jiaming_prof} question={'Describe AAIV with three emojis.'} answer={'🧋🕺🔫'} answerFontSize={'32px'} />
                    </div>
                </Modal> */}
                <Modal
                    isOpen={hannahIsOpen}
                    onRequestClose={() => { setHannahIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile isMobile={isMobile} image={hannah_prof} title={'Hannah Wang'} text={'Small Group Coordinator'} email={'hw762@cornell.edu'} />
                        <Question isMobile={isMobile} image={hannah_prof} question={'Tell us a bit about yourself.'} answer={'Hi! I\'m Hannah. I\'m in the Class of 2027 studying Astronomy/Astrophysics. I\'m from Scarsdale, NY.'} />
                        <Question isMobile={isMobile} image={hannah_prof} question={'Favorite AAIV memory?'} answer={'staying up really late several times in the Holy Week tent to worship, pray, yap, and try not to fall asleep <3'} />
                        <Question isMobile={isMobile} image={hannah_prof} question={'SG Vision:'} answer={
                            'My vision for small groups this semester is to cultivate \
                            close-knit, welcoming, and accessible spaces where \
                            individuals—regardless of faith background—can come \
                            together to study the Word. Our goal is to deepen \
                            understanding and love for God: His character, His work \
                            in each of our lives, and how we can live His love out in \
                            our communities. We hope to foster a greater love for \
                            God\'s Word by engaging with Scripture and having deeper \
                            conversations in meaningful fellowship, helping everyone \
                            to know, experience, and love Him more fully (Colossians 3:16). '} />

                    </div>
                </Modal>
                <Modal
                    isOpen={joannaIsOpen}
                    onRequestClose={() => { setJoannaIsOpen(false) }}
                    style={customStyles}
                >
                    <div>
                        <Profile isMobile={isMobile} image={joanna_prof} title={'Joanna Tan'} text={'Large Group Coordinator'} email={'jat362@cornell.edu'} />
                        <Question isMobile={isMobile} image={joanna_prof} question={'Tell us a bit about yourself.'} answer={'Hi! I\'m Joanna. I\'m in the Class of 2026 studying Mechanical Engineering. I\'m from Piscataway, NJ.'} />
                        <Question isMobile={isMobile} image={joanna_prof} question={'Favorite AAIV memory?'} answer={'Stargazing in Ithaca with my freshman year small group.'} />
                        <Question isMobile={isMobile} image={joanna_prof} question={'LG Vision:'} answer={
                            'My vision for our weekly Large Group gatherings is to create an open \
                            and welcoming space where the fellowship is able to know, see, and love \
                            God. From understanding God’s character and power, to learning how to \
                            recognize His presence, I hope the fellowship will encounter God and \
                            discover the goodness of building His kingdom together.'} />
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