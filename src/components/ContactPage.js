import React, { useState } from "react";
import "./styles/ContactPage.css"; // Import your CSS file

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const[submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    
  // Check if required fields are filled
  if (!name || !email || !message) {
    setSubmitMessage("***Please fill in all required fields!***");
    return;
  }
    // Formspree endpoint
    const formSpreeEndpoint = "https://formspree.io/f/xwkgvbwg";

    // Prepare data to be sent
    const data = {
      name,
      email,
      message,
    };

    console.log("Submitting form data:", data);

    // Send data to Formspree
    const response = await fetch(formSpreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("Formspree response:", response);

    if (response.ok) {
      setSubmitMessage("Message sent successfully!");
    } else {
      setSubmitMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label><span className="text">
          Name:</span></label>
          <h6><input className="name-email-box" type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Enter your name"/>
        </h6>
        <br />
        <label> Email:</label>
            <h6>
          <input className="name-email-box" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
         </h6>
        <br />
        <label> Message: </label>
        <h6>
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value) }
            className="message-box" placeholder="Type your message here"
          />
        </h6>
        <span className="response">{submitMessage}</span>
       
        <br />
        <div className="contact-button-container ">
          <button  className="btn btn-secondary send">
            Send
          </button>
        </div>
        
      </form>
      <br></br>
      <br></br>
      <h5>
        Send Me An Email:
        {" "}
        <a href="mailto:jefftny1@gmail.com" className="contact">
          jefftny1@gmail.com
        </a>
      </h5>
      <h5>
      Visit My Linkedin:{" "}
        <a href="https://www.linkedin.com/in/jeff-n-3293172a3/" className="contact">
          https://www.linkedin.com/in/jeff-n-3293172a3/
        </a>
      </h5>
      <h5>
        Visit My GitHub:{" "}
        <a href="https://github.com/kobdash" className="contact">
          https://github.com/kobdash
        </a>
      </h5>
    </div>
  );
}

export default ContactPage;
