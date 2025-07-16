import React from "react";
import "../App.css";
import map from "../image/map.png";
import Logo from '../image/Logo.png';
import Whatsapp from'../image/whatsapp.png';
import Instagram from'../image/instagram.png';
import X from'../image/twitter.png';
import Facebook from'../image/social-media.png';

const Fotter = () => {
  return (
    <>
<div className="ft-content">
              Be a hero without a cape—donate blood. One donation can save up to three lives. Your simple act could be someone’s second chance at life. Blood is the gift of hope, healing, and survival. Make a difference today. Someone, somewhere, is alive tomorrow because you cared.
            </div>   
 <div className="footer-body">
  <div className="footer">
    <div className="grid-container">
      <div>
        <h1 className="let-s-talk-title">Let's talk</h1>
        <p className="let-s-talk-email">bloodcamp45@gmail.com</p>
      </div>
      <div className="contact-section">
        <div style={{marginBottom: '2rem'}}>
          <h2 className="section-title">Contact</h2>
          <p className="contact-text">Global Enquiries</p>
          <a href className="contact-link">blood@gmail.com</a>
        </div>
        <div>
          <h2 className="section-title">Follow</h2>
          <a href="#" className="follow-link">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
            Instagram
          </a>
          <a href="#" className="follow-link">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="newsletter-section">
        <h2 className="section-title">Newsletter</h2>
        <p className="newsletter-text" style={{marginBottom: '1rem'}}>
          Lorem ipsum dolor sit amet.
        </p>
        <div className="email-input-wrapper">
          <input type="email" placeholder="Email address" className="email-input" aria-label="Email address for newsletter" />
          <button className="newsletter-button">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-arrow-right arrow-icon" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>

  );
};

export default Fotter;
