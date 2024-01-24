import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './components/styles/_custom-bootstrap.scss';
import { useState } from'react';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './components/styles/App.css';
import TransitionWrapper from './components/TransitionWrapper';
import NotFound from './components/NotFound';
import ContactPage from './components/ContactPage';








function App() {
  const [navbarVisible, setNavbarVisible] = useState(false); 

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

 

  return (

   
  


    <Router>

<div className="button-container">
        <button onClick={toggleNavbar} className="btn btn-secondary dropdown-toggle">
          <span className='highlight'>Menu</span>
        </button>
        <div className="contact-button-container">
          <Link to="/contactPage" className="btn btn-secondary contact-button">
            <span className='highlight'><span className='contact'>Contact</span></span>
          </Link>
        </div>
      </div>
      <div className={`navbar-container ${navbarVisible ? 'visible' : ''}`}>
        <Navbar />
      </div>

<div className='body'>      
      
      <TransitionWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} key ="home"/>
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />  
        <Route path="*" element={<NotFound />} />
        <Route path="contactPage" element={<ContactPage/>}/>
       


      </Routes>
 
    </TransitionWrapper>
</div>

    <footer><Footer /></footer>
    </Router>
    
  );
}

export default App;
