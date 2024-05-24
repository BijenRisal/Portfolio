import React, { useRef } from 'react';
import Instagram from '../Assets/instagram.png'
import Walmart from '../Assets/walmart.png'
import Twitter from '../Assets/twitter.png'
import Youtube from '../Assets/youtube.png'
import Instagrams from '../Assets/instagram-logo.png'
import Facebooks from '../Assets/facebook-logo.png'
import Github from '../Assets/github.png'
import LinkedIn from '../Assets/linkedin.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_mcp8csm', 'template_qpp4pxc', form.current, {
            publicKey: 'GN7kU1nJQHmZkO2kR',
          })
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
            },
            (error) => {
              console.log( 'Email Error', error.text);
            },
          );
        };
    return (
        <section className="contact-page">
            <div id="client">
                <h1 className="contact-title">My Clients</h1>
                <p className="client-description"> I have had the opprtunity to work  with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </p>
                <div className="client-imgs">
                    <img src={Instagram} alt="" className="client-imgs" />
                    <img src={Walmart} alt="" className="client-imgs" />
                    <img src={Twitter} alt="" className="client-imgs" />
                    <img src={Youtube} alt="" className="client-imgs" />
                </div>
            </div>
            <div id="contact">
            <h1 className="contact-title"> Contact Me</h1>
                <span className="contact-description"> Please fillout the form below to discuss more about work opportunities
                </span> 
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='your_name' required />
                    <input type="email" className="email" placeholder="Your Email"  name='your_email' required/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea> 
                    <div className='Submit'>
                    <button type='submit' value='send' className="submitbtn">Submit</button>
                    </div>
                </form>
                <div className="links">
                  
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={Instagrams} alt="Instagram" className="link" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={Facebooks} alt="Facebook" className="link" />
                    </a>
                    <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt="GitHub" className="link" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt="LinkedIn" className="link" />
                    </a>
                    </div>
            </div>

        </section>
    )
}
export default Contact;