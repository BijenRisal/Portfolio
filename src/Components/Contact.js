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
                <p className="client-description"> I have had the opprtunity to worl with a diverse group of companies.
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
                    <input type="text" className="name" placeholder="Your Name" name='your_name' />
                    <input type="email" className="email" placeholder="Your Email"  name='your_email'/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea> 
                    <button type='submit' value='send' className="submitbtn">Submit</button>
                </form>
                <div className="links">
                <img src={Instagrams} alt="" className="link" />
                <img src={Facebooks} alt="" className="link" />
                <img src={Github} alt="" className="link" />
                <img src={LinkedIn} alt="" className="link" />
                </div>
            </div>

        </section>
    )
}
export default Contact;