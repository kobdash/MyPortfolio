import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './components/styles/_custom-bootstrap.scss';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-dark text-light"> {/* Apply background and text color */}
        <Navbar />
        
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;