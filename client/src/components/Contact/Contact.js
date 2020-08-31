import React, { useState, useEffect } from 'react'
import './Contact.css'
import Bounce from 'react-reveal/Bounce';
import axios from 'axios'

export default function Contact() {
  const [name, setName] = useState({name: '', valid: false})
  const [email, setEmail] = useState({email: '', valid: false})
  const [subject, setSubject] = useState({subject: '', valid: false})
  const [message, setMessage] = useState({message: '', valid: false})

  useEffect(() => {
    document.title = 'Nastasha B. | Contact'
    document.querySelector('button').disabled = !(name.valid && email.valid && subject.valid && message.valid)
  }, [name, email, subject, message])

  const onNameChange = (event) => {
    setName({name: event.target.value, valid: RegExp(/[A-Za-z]+/).test(event.target.value)})
    console.log('name:',name.name,', valid:', name.valid)
    // toggleInputError(event)
  }
  const onEmailChange = (event) => {
    setEmail({email: event.target.value, valid: RegExp(/^[A-Za-z0-9.!#$%&*+=?^_‘{}|~-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,}$/).test(event.target.value)})
    // toggleEmailError(event)
  }
  const onSubjectChange = (event) => {
    setSubject({subject: event.target.value, valid: RegExp(/[A-Za-z]+/).test(event.target.value)})
    // toggleInputError(event)
  }
  const onMessageChange = (event) => {
    setMessage({message: event.target.value, valid: RegExp(/[A-Za-z]+/).test(event.target.value)})
    // toggleInputError(event)
  }
  const toggleInputError = (event) => {
  if ((event.target.attributes.data.value === 'email' && !email.valid) || event.target.value.length === 0 || RegExp(/^[ ]+$/).test(event.target.value)) {
      event.target.nextSibling.style.opacity = 1
    }
    else {
      event.target.nextSibling.style.opacity = 0
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, subject, message);
    axios({
      method: 'post',
      url: '/confirmation',
      data: {
        name: name.name,
        email: email.email,
        subject: subject.subject,
        message: message.message
      }
    })
    .then((response)=>{
      console.log(response)
      if (response.data.status === 'success'){
        resetForm()
        resetData()
        displayMessage("Your message has been sent!")
        window.scrollTo(0, window.innerHeight)
      } else if(response.data.status === 'fail'){
        displayMessage("Message failed to send. Please try again later.")
        window.scrollTo(0, window.innerHeight)
      }
    })
  }

  const resetForm = () => {
    document.querySelectorAll('input').forEach((i) => i.value = '')
    document.querySelector('textarea').value = ''
  }

  const resetData = () => {
    setName({name: '', valid: false})
    setEmail({email: '', valid: false})
    setSubject({subject: '', valid: false})
    setMessage({message: '', valid: false})
  }

  const displayMessage = (msg='') => {
    const msgContainer = document.querySelector('.msg-container')
    msgContainer.firstElementChild.innerText = msg
    msgContainer.style.opacity = 1
  }

  return(
      <div className="medium-container">
          <Bounce right>
            <h1>Contact</h1>
          </Bounce>
          <div className="contact-form-container">
              <form onSubmit={handleSubmit.bind(this)} method="POST">
                <div className="input-field-container">
                  <label htmlFor="name">Name</label><span className="required-field">*</span>
                  <input data="name" type="text" value={name.name} onChange={(e) => onNameChange(e)} onBlur={(e) => toggleInputError(e)}/>
                  <span className="error-container">Please enter your name</span>
                </div>
                <div className="input-field-container">
                  <label htmlFor="name">Email</label><span className="required-field">*</span>
                  <input data="email" type="email"value={email.email} onChange={(e) => onEmailChange(e)} onBlur={(e) => toggleInputError(e)}/>
                  <span className="error-container">Please enter a valid email</span>
                </div>
                <div className="input-field-container">
                  <label htmlFor="name">Subject</label><span className="required-field">*</span>
                  <input data="subject" type="text" value={subject.subject} onChange={(e) => onSubjectChange(e)} onBlur={(e) => toggleInputError(e)}/>
                  <span className="error-container">Please enter a subject</span>
                </div>
                <div id="message-container">
                  <label htmlFor="name">Message</label><span className="required-field">*</span>
                  <textarea data="message" value={message.message} onChange={(e) => onMessageChange(e)} onBlur={(e) => toggleInputError(e)}/>
                  <span className="error-container">Please enter a message</span>
                </div>
                <button disabled>Submit</button>
              </form>
              <div className="msg-container">
                <h3>Message status</h3>
              </div>
          </div>
      </div>
  )
}