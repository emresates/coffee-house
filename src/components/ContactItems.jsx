import React from 'react';

function ContactItems() {
  return (
    <div className="contact-items">
      <div className="contact-items-left">
        <h1>Contact Information</h1>
        <p>
          <span>Adress:</span>198 West 21th Street, Suite 721 New York NY 10016
        </p>
        <p>
          <span>Phone:</span>+1235 1231212
        </p>
        <p>
          <span>Email:</span>info@coffeeverse
        </p>
      </div>
      <div className="contact-items-right">
        <div className="input1">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
        </div>
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </div>
    </div>
  );
}

export default ContactItems;
