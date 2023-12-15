// Greeting.js
import React, { useState } from 'react';
import './styles/Greeting.css';
import Typewriter from './Typewriter';
import LanguagesModal from './LanguagesModal';
import SkillsModal from './SkillsModal';

const Greeting = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  const [showSkills, setShowSkills] = useState(false);


  const toggleLanguages = (event) => {
    setShowLanguages(!showLanguages);
  };

  const toggleSkills = (event) => {

    setShowSkills(!showSkills);
  };

  const programmingLanguages = [
    'JavaScript',
    'Java',
    'C++',
    'C#',
    'PHP',
    'Python',
    'HTML',
    'CSS',
    'MySQL',
    'MongoDB',
  ];
  const Skills = [
    'CLoud Computing',
    'Cyber Security',
    'Network Topology',
    'Database Management',
    'Graphics Design',
  ];

  return (
    <div className="greeting-container">
      <img src="/images/greeting/IMG_20230917_121348.jpg" alt="profile" className="rounded-image" /><br />
      <h1><Typewriter text="Hi, I'm Jeff Tinodashe Nyahuye" delay={70} /></h1>
      <p>I am a <span className="highlight" onClick={toggleLanguages}>Full Stack Developer</span> and <span className="highlight" onClick={toggleSkills}>IT Professional</span></p>
      <p>I love crafting captivating websites, coding dynamic programs, building interactive applications, and enhancing existing projects.</p>

      <LanguagesModal
        isOpen={showLanguages}
        onRequestClose={toggleLanguages}
        programmingLanguages={programmingLanguages}
      />

      <SkillsModal
      isOpen={showSkills}
      onRequestClose={toggleSkills}
      Skills={Skills}      
        />
    </div>
  );
}

export default Greeting;

