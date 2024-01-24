import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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








function App() {
  const [navbarVisible, setNavbarVisible] = useState(false); 

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

 

  return (

   
  


    <Router>

<button onClick={toggleNavbar} class="btn btn-secondary dropdown-toggle"><span class='highlight'>Menu</span>
    </button>
            <div className={`navbar-container ${navbarVisible ? 'visible' : ''}`}>
              <Navbar />
            </div>





      
      <TransitionWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} key ="home"/>
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />  
        <Route path="*" element={<NotFound />} />
       


      </Routes>
    <Footer />
    </TransitionWrapper>
    </Router>

  );
}

export default App;
