import React from 'react';
import './styles/Greeting.css';
import Typewriter from './Typewriter';

const Greeting = () => {
  return (
    <div className="greeting-container">
    <img src="/images/greeting/IMG_20230917_121348.jpg" alt="profile" class="rounded-image"/><br/>
      <h1>< Typewriter text="Hi, i'm Jeff Tinodashe Nyahuye" delay={70} /></h1>
      <p>I am a <span class="highlight">Full Stack Developer</span> and <span class="highlight">IT Professional</span></p>
      <p>I love crafting captivating websites, coding dynamic programs, building interactive applications, and enhancing existing projects.</p>
    </div>
  );
}

export default Greeting;