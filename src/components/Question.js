import React from 'react';
import './css/Question.css';

export default function Question({ image = null, question = '', answer = '', isMobile = false }) {
  return <div className={`${isMobile ? 'question-container-mobile' : 'question-container'}`}>
    {isMobile ? <></> : <img className='question-img' src={image} alt={'amy-prof'}></img>}
    <div className='text-container'>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  </div>
}
