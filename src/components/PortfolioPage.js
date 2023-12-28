// PortfolioPage.js

import React from 'react';

const projects = [
  {
    id: 1,
    name: "JIMS Inventory Management System",
    imageUrl: '/images/portfolio/Screenshot from 2023-12-01 07-00-47.png', 
    description: "Inventory management system that uses React and Express frameworks. It is styled using bootstrap5",
    projectLink: "https://github.com/kobdash/Jeff-s-Inventory-Management-System",
  },
  {
    id: 2,
    name: 'Property Buddy',
    imageUrl: '/images/portfolio/logo.png', 
    description: 'Website where you can upload and sell property. Made using React and Express frameworks',
    projectLink: 'https://github.com/kobdash/PropertyBuddy',
  },
  // Add more projects as needed
];

const PortfolioPage = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <div className="row">
        {projects.map(project => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="card-img-top img-fluid"
                style={{ transition: 'transform 0.2s' }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
              <div className="card-body">
                <h3 className="card-title">{project.name}</h3>
                <p className="card-text">{project.description}</p>
                <a href={`${project.projectLink}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
