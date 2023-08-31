import React from 'react';
import Typewriter from './Typewriter';
import CarouselSlider from './CarouselSlider';
import SlideData from './SlideData';

function HomePage() {
  return (
    <div>
      <h1><Typewriter text="Hi, I'm Jeff Nyahuye." delay={50} /></h1>
      <h2>I am a full stack developer and IT professional.</h2>
      <p>I love crafting captivating websites, coding dynamic programs, building interactive applications and enhancing existing projects.</p>
      
      {<CarouselSlider slides={SlideData} />}
      
    </div>
  );
}

export default HomePage;