// PortfolioPage.js

import React from 'react';

const projects = [
  {
    id: 1,
    name: 'Project 1',
    imageUrl: 'https://placekitten.com/300/200', // Replace with your actual image URL
  },
  {
    id: 2,
    name: 'Project 2',
    imageUrl: 'https://placekitten.com/300/201', // Replace with your actual image URL
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
                <p className="card-text">Project description goes here.</p>
                <a href={`https://github.com/kobdash/${project.name}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
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
