import React, { useContext, useState } from 'react';
import './Contact.css';
import { themeContext } from '../../Context';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log(response)
    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Error sending message.');
    }
  };

  return (
    <div className="contact-form" id='Contact'>
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'White' : '' }}>Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
        </div>
      </div>

      <div className="c-right">
        <form onSubmit={handleSubmit}>
          <input type="text" name='user_name' className="user" placeholder='Name' onChange={handleChange} />
          <input type="email" name='user_email' className="user" placeholder='Email' onChange={handleChange} />
          <textarea name='message' className="user" placeholder='Message' onChange={handleChange} />
          <input type="submit" value='send' className="button" />
          <div className='blur c-blur1' style={{ background: 'var(--purple)' }}></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
