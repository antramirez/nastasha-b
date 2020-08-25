import React, { useState, useEffect } from 'react'
import './Contact.css'
import Bounce from 'react-reveal/Bounce';
import axios from 'axios'

export default function Contact() {

  useEffect(() => {
    document.title = 'Nastasha B. | Contact'

    // const header = document.querySelector('.medium-container h1')
    // header.classList.add('visible-header')
    // console.log(header)
  })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
  
    const onNameChange = (event) => {
        setName(event.target.value)
    }
    
    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const onSubjectChange = (event) => {
        setSubject(event.target.value)
    }
    const onMessageChange = (event) => {
        setMessage(event.target.value)
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(name, email, message);
      axios({
        method: 'post',
        url: '/confirmation',
        data: {
          name: name,
          email: email,
          subject: subject,
          message: message
        }
      })
      .then((response)=>{
        console.log(response)
        if (response.data.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
        } else if(response.data.status === 'fail'){
          alert("Message failed to send.")
        }
      })
    }

    return(
        <div className="medium-container">
            {/* <div className="heading-bar"></div> */}
            <Bounce right>
              <h1>Contact</h1>
            </Bounce>
            <div className="contact-form-container">
                <form onSubmit={handleSubmit.bind(this)} method="POST">
                    <div id="name-container"><label htmlFor="name">Name</label>
                    <input data="name" type="text" value={name} onChange={onNameChange.bind(this)}/></div>
                    <div id="email-container"><label htmlFor="name">Email</label>
                    <input data="email" type="email"value={email} onChange={onEmailChange.bind(this)}/></div>
                    <div id="subject-container"><label htmlFor="name">Subject</label>
                    <input data="subject" type="text" value={subject} onChange={onSubjectChange.bind(this)}/></div>
                    <div id="message-container"><label htmlFor="name">Message</label><textarea data="message" value={message} onChange={onMessageChange.bind(this)}/></div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}