import React from 'react'
import './Contact.css'

export default function Contact() {
    return(
        <>
            <h1>Contact</h1>
            <div className="contact-form-container">
                <form action="">
                    <div id="name-container"><label htmlFor="name">Name</label>
                    <input data="name" type="text"/></div>
                    <div id="email-container"><label htmlFor="name">Email</label>
                    <input data="email" type="email"/></div>
                    <div id="subject-container"><label htmlFor="name">Subject</label>
                    <input data="subject" type="text"/></div>
                    <div id="message-container"><label htmlFor="name">Message</label><textarea data="message"/></div>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}