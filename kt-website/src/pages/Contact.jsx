import React, { useState } from 'react';
import '../assets/css/Contact.css'; // Updated path to the CSS file

export function Contact() {
  const [message, setMessage] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setCharCount(e.target.value.length);
  };

  return (
    <div className="contactpage">
      <h1 className="contact-header">Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Your Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            value={message}
            onChange={handleMessageChange}
          />
          <p className="char-count">{charCount}/500 characters</p>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      <footer className="contact-footer">
        <p>Email: ricardoanderson696@gmail.com</p>
        <p>Phone: +1 876-447-8442</p>
      </footer>
    </div>
  );
}
