import React, { useState } from 'react';
import mail from '../Images/email.svg';
import phone from '../Images/phone.svg';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message
    };
    fetch('donnaogbu@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        alert('Your mesage has been sent!')
        setName('');
        setEmail('');
        setMessage('')
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred')
      })
  }


  return (
    <div className='contactContainer'>
      <h2>CONTACT US</h2>
      <div className="imageDiv">
        <img src={mail} alt="contact-klycon" />
      </div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className='textMessage'>
        <textarea type="text" placeholder='Enter Message...' id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <button type='submit'>Send</button>
      </form>
      <div className="call">
        <img src={phone} alt="call klycon" />
        <p>+23412345678</p>

      </div>
    </div>
  )

}
export default Contact