// LanguagesModal.js
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'transparent', // Make the overlay transparent
  },
  content: {
    top: '50%',
    left: '50%',
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

Modal.setAppElement('#root'); // Specify the root element for accessibility

const LanguagesModal = ({ isOpen, onRequestClose, programmingLanguages }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
    contentLabel="Programming Languages Modal"
  >
    <div className="language-scrollbox">
      <h3>Languages I know</h3>
      <ul>
        {programmingLanguages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </div>
  </Modal>
);

export default LanguagesModal;





