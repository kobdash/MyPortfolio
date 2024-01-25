// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgba(51, 51, 51, 0.8)' }} className="text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className='footerMenu'>Links</h3>
            <ul className="list-unstyled">
            <li>
          <Link to="https://github.com/kobdash" className="nav-link">Github</Link>
        </li>
        <li>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
            </ul>
          </div>
          <div className="col-md-6 ">
            <h3 className='footerMenu'>Contact Information</h3>
          <a href='mailto:jefftny1@gmail.com' className='contact'><h5>jefftny1@gmail.com</h5></a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <p className="text-muted">&copy; 2023 kobdash. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
