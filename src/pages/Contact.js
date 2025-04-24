import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",  // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        formRef.current,
        "YOUR_USER_ID"      // replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("SUCCESS");
        },
        (error) => {
          console.log(error.text);
          setStatus("ERROR");
        }
      );
  };

  return (
    <div className="pt-4">
      <h2 className="mb-4 text-center">Contact Us</h2>

      <div className="row mb-5">
        <div className="col-md-6">
          <div className="mb-4">
            <h5>Our Office</h5>
            <p>123 Future Lane,<br />Knowledge City, 456789</p>
            <p><strong>Phone:</strong> +1 (234) 567-8901</p>
            <p><strong>Email:</strong> support@futurethought.com</p>
          </div>
          <div>
            <h5>Working Hours</h5>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Sat: 10:00 AM - 2:00 PM</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ratio ratio-16x9 mb-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95805631531624!3d-37.81720997975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f9dfb1%3A0x5045675218ce6e0!2sFutureThought%20Academy!5e0!3m2!1sen!2sin!4v1610000000000"
              allowFullScreen=""
              loading="lazy"
              title="FutureThought Location"
            ></iframe>
          </div>
        </div>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="row g-3 mb-4">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input name="user_name" type="text" className="form-control" placeholder="Your Name" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input name="user_email" type="email" className="form-control" placeholder="Your Email" required />
        </div>
        <div className="col-12">
          <label className="form-label">Subject</label>
          <input name="subject" type="text" className="form-control" placeholder="Subject" required />
        </div>
        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea name="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary me-3">Send Message</button>
          {status === "SUCCESS" && <span className="text-success">Message sent successfully!</span>}
          {status === "ERROR" && <span className="text-danger">Failed to send. Try again later.</span>}
        </div>
      </form>
    </div>
  );
};

export default Contact;