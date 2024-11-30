import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button } from 'react-bootstrap';
import insta from '../Assets/icons/icons8-instagram-logo-94.png';
import linkdin from '../Assets/icons/icons8-linkedin-48.png';
import github from '../Assets/icons/icons8-github-24.png';
import twitter from '../Assets/icons/icons8-twitter-48.png';
import '../css/Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lnmw5gq', 'template_2480q49', form.current, {
        publicKey: '2cs33xgmsHUxxVLxF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); // Clear the form inputs
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          Have a question or want to work together? Feel free to reach out using the form below.
        </p>
        <Form ref={form} onSubmit={sendEmail} className="contact-form">
          <Form.Group controlId="name" className="form-group">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="from_name" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group controlId="email" className="form-group">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="from_email" placeholder="Enter your email" required />
          </Form.Group>
          <Form.Group controlId="message" className="form-group">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" placeholder="Type your message here" rows={4} required />
          </Form.Group>
          <Button type="submit" className="form-submit">
            Submit
          </Button>
        </Form>
        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img
              src={linkdin}
              alt="LinkedIn"
              onClick={() => window.open('https://linkedin.com/in/meerbaj-khan-76a561242/', '_blank')}
            />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub" onClick={() => window.open('https://github.com/meerbajkhan', '_blank')} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={insta} alt="Instagram" onClick={() => window.open('https://instagram.com/knavaj786/', '_blank')} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={twitter} alt="Twitter" onClick={() => window.open('https://x.com/knavaj786', '_blank')} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
