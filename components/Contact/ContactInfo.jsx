import React, { useState } from 'react'

const ContactInfo = () => {
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here

    // For demonstration purposes, set a submitted flag to true
    setSubmitted(true);
  };
  return (
    <div className="contact-page">
      <div className="container">
        <h2 className='title'>Contact Us</h2>
        <p>
          Have questions or concerns? Reach out to us. We are here to assist you!
        </p>
        {!isSubmitted ? (
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>

            <button type="submit" >Submit</button>
          </form>
        </div> 
        ) : (
            <div className="success-message">
              <p>Thank you for reaching out! Your submission was successful.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfo