import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-items">
        <div className="footer-item">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
            recusandae?
          </p>
          <div className="icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="footer-item">
          <h1>Services</h1>
          <ul>
            <li>Cooked</li>
            <li>Deliver</li>
            <li>Quality Foods</li>
            <li>Mixed</li>
          </ul>
        </div>
        <div className="footer-item">
          <h1>Have a Questions ?</h1>
          <ul>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <h3>
                203 Fake St. Mountain View, San Francisco, California, USA
              </h3>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <h3>+2 392 3929 210</h3>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <h3> info@yourdomain.com</h3>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <h1>
          Copyright ©2022 All rights reserved | This template is made with by
          Secenory
        </h1>
      </div>
    </div>
  );
}

export default Footer;
