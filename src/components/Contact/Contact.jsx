import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailValidator from 'email-validator';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleCaptchaChange = (value) => {
    setIsCaptchaValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isCaptchaValid && emailValidator.validate(formData.email)) {
      // Send the form data using EmailJS
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
        .then((result) => {
          console.log(result.text);
          // Clear the form data if the email was sent successfully
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setIsCaptchaValid(false);
          toast.success('Thank you 🥰 Will reply 2 - 4 days!');
        }, (error) => {
          console.log(error.text);
          toast.error('Error sending email 😭');
        });
    } else {
      toast.error('Please check your email address or complete the reCAPTCHA');
    }
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form" style={{ paddingBottom: '120px' }}>
        <p className='about-text-header' style={{ marginBottom: '40px' }}>Contact Me <hr /></p>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
        </div>
        <div className="form-group">
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={5500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ marginBottom: '50px', width: '500px' }}
      />
    </div>
  );
};

export default Contact;
