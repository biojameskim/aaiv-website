import React, {useEffect, useRef, useState} from 'react';
import './css/Gallery.css';

// THERE IS A BUG WHERE THE ANIMATE FUNCTION DOESN'T WORK ON MOBILE.
export default function Gallery({images = []}) {
  const [mouseDown, setMouseDown] = useState(0);
  const [prevPerc, setPrevPerc] = useState(0);
  const [percent, setPercent] = useState(0);
  
  const track = useRef();

  const imageRefs = [];
  for (let i = 0; i < images.length; i+=1) {
    imageRefs.push(useRef());
  }

  function handleOnDown(e) {
    setMouseDown(e.clientX);
  }

  function handleOnUp(e) {
    setMouseDown(0);
    setPrevPerc(percent);
  }

  function handleOnMove(e) {
    if (mouseDown === 0) return;
    const mouseDelta = mouseDown - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta * -100);
    const nextPercentageUnconstrained = prevPerc + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    setPercent(nextPercentage);

    track.current.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for(let i = 0; i < imageRefs.length; i+=1) {
      const image = imageRefs[i];
      image.current.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('touchstart', e => handleOnDown(e.touches[0]));
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('touchend', e => handleOnUp(e.touches[0]));
    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', e => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener('mouseDown', handleOnDown);
      window.removeEventListener('touchstart', e => handleOnDown(e.touches[0]));
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('touchend', e => handleOnUp(e.touches[0]));
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', e => handleOnMove(e.touches[0]));
    };
    
  })
  return <div className="gallery-container">
    <div className="image-track" ref={track} >
      {[...Array(images.length).keys()].map((i) => (
        <img className='gallery-image' key={i} ref={imageRefs[i]} src={images[i]} alt={'algae' + i} draggable="false"></img>
      ))}
    </div>
   
  </div>
}