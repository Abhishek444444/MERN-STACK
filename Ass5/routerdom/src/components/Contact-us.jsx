import React from 'react'
import "./Contact-us.css"

const ContactUs = () => {
  return (
    <div>
        <header>
        <h1>Contact Us</h1>
      </header>
    
      <div className="contact">
        <h1>We'd Love to Hear From You!</h1>
        <p>If you have any questions or comments, please feel free to reach out to us using the form below. We will get back to you as soon as possible.</p>
    
        <form action="#" method="POST">
          <div className="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name"/>
          </div>
    
          <div className="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email"/>
          </div>
    
          <div className="form-group">
            <label for="message">Your Message</label>
            <textarea id="message" name="message" required placeholder="Enter your message here"></textarea>
          </div>
    
          <div className="form-group">
            <input type="submit" value="Send Message"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
