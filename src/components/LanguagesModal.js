// LanguagesModal.js
import React from 'react';
import Modal from 'react-modal';

const ModalContent = ({ programmingLanguages }) => (
  <div className="language-scrollbox">
    <h3>Languages I know</h3>
    <ul>
      {programmingLanguages.map((language, index) => (
        <li key={index}>{language}</li>
      ))}
    </ul>
  </div>
);

const LanguagesModal = ({ isOpen, onRequestClose, programmingLanguages, position }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'transparent', // Make the overlay transparent
    },
    content: {
      top: position.top || '50%', // Use the provided top position or default to '50%'
      left: position.left || '50%', // Use the provided left position or default to '50%'
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#3498db', // Set your desired background color here
      border: 'none', // Remove the border
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Add a subtle shadow
      maxHeight: '70vh', // Set a maximum height for the modal
      overflowY: 'auto', // Enable vertical scrolling
      className: 'custom-modal-class', // Set a custom class for the modal
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Programming Languages Modal"
    >
      <ModalContent programmingLanguages={programmingLanguages} />
    </Modal>
  );
};

export default LanguagesModal;



