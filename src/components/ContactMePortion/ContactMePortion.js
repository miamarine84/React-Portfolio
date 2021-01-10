import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert'
import Spinner from '../../components/Spinner/spinner'



import "./style.scss";

function ContactMePortion() {

  var validator = require("email-validator");

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [alert, setAlert] = useState(false)

  const formSubmitted = () => {
    console.log(Alert)
    let result = {
      'first name': firstName,
      'email': email,
      'phone': phone,
      'subject': subject,
      'message': message
    }

    let emailValidation = validator.validate(result['email'])

    if (result['first name'] === '') {
      setAlert(<Alert variant="secondary" onClose={() => setAlert(false)} dismissible>Please enter a valid name</Alert>)
    } else if (result['email'] === '' || emailValidation === false) {
      setAlert(<Alert variant="secondary" onClose={() => setAlert(false)} dismissible>Please enter a valid email address I like to reach you</Alert>)
    } else if (result['phone'] === '') {
      setAlert(<Alert variant="secondary" onClose={() => setAlert(false)} dismissible>Please enter a phone number I like to reach you</Alert>)
    } else if (result['subject'] === '') {
      setAlert(<Alert variant="secondary" onClose={() => setAlert(false)} dismissible>Please enter a phone number I like to reachPlease enter a subject you like to speak about</Alert>)
    } else if (result['message'] === '') {
      setAlert(<Alert variant="secondary" onClose={() => setAlert(false)} dismissible>Please enter a message so that I don't wonder what you like to chat about</Alert>)
   
    } else {
      setAlert(<Alert variant="secondary" onClose={() => setAlert(false)} dismissible>Thanks {result['first name']} we'll chat soon</Alert>)

    }


  }


  return (

    <div className="shade">
      
      <br />

      <div className="blackboard">
     

        <div className="form">
        <p id='contact-note'>Please fill out this entire form and leave me a great message!</p>
          <div >
            {alert}
          </div>
          <p>
            <label>Name: </label>
            <input type='text' placeholder='first name' onChange={e => setFirstName(e.target.value)} />
          </p>
          <p>
            <label>Email: </label>
            <input type="email" required placeholder='email' onChange={e => setEmail(e.target.value)} />
          </p>
          <p>
            <label>Phone: </label>
            <input type="text" placeholder='phone' onChange={e => setPhone(e.target.value)} />
          </p>
          <p>
            <label>Subject: </label>
            <input type="text" placeholder='subject' onChange={e => setSubject(e.target.value)} />
          </p>
          <p>
            <label>Message: </label>
            <textarea placeholder='type your message here' onChange={e => setMessage(e.target.value)} />
          </p>
          <p className="wipeout">
            <input onClick={formSubmitted} type="submit" defaultValue="Send" />
          </p>
        </div>
   
      </div>

    </div>


  )
}

export default ContactMePortion
