// LanguagesModal.js
import React from 'react';
import Modal from 'react-modal';

const ModalContent = ({Skills}) => (
  <div className="language-scrollbox">
    <h3>Skills in my toolbox</h3>
    <ul>
      {Skills.map((language, index) => (
        <li key={index}>{language}</li>
      ))}
    </ul>
  </div>
);

const SkillsModal = ({ isOpen, onRequestClose, Skills, position }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'transparent', 
    },
    content: {
      top: position.top || '50%', 
      left: position.left || '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#3498db',
      border: 'none', 
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', 
      maxHeight: '70vh', 
      overflowY: 'auto', 
      className: 'custom-modal-class', 
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Skills"
    >
      <ModalContent Skills={Skills} />
    </Modal>
  );
};

export default SkillsModal;