// Greeting.js
import React, { useState } from 'react';
import './styles/Greeting.css';
import Typewriter from './Typewriter';
import LanguagesModal from './LanguagesModal';

const Greeting = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [clickedItemPosition, setClickedItemPosition] = useState({ top: 0, left: 0 });

  const toggleLanguages = (event) => {
    const rect = event.target.getBoundingClientRect();
    setClickedItemPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    setShowLanguages(!showLanguages);
  };

  const programmingLanguages = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML',
    'CSS',
  ];

  return (
    <div className="greeting-container">
      <img src="/images/greeting/IMG_20230917_121348.jpg" alt="profile" className="rounded-image" /><br />
      <h1><Typewriter text="Hi, I'm Jeff Tinodashe Nyahuye" delay={70} /></h1>
      <p>I am a <span className="highlight" onClick={toggleLanguages}>Full Stack Developer</span> and <span className="highlight">IT Professional</span></p>
      <p>I love crafting captivating websites, coding dynamic programs, building interactive applications, and enhancing existing projects.</p>

      <LanguagesModal
        isOpen={showLanguages}
        onRequestClose={toggleLanguages}
        programmingLanguages={programmingLanguages}
        position={clickedItemPosition}
      />
    </div>
  );
}

export default Greeting;

