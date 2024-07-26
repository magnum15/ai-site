import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/send-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, 'g-recaptcha-response': recaptchaToken }),
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Error sending email.');
    }
  };

  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div style={{ display: 'none' }}>
          <label>Leave this field empty</label>
          <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} />
        </div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

        <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY" data-callback={(token) => setRecaptchaToken(token)}></div>
        <button type="submit">Send</button>
      </form>
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </div>
  );
};

export default Contact;
