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
        <h1 className="let-s-talk-title">Blood Doner Finder</h1>
        <p className="let-s-talk-email">Your blood is the gift of life. Every drop you give can save a life, bring hope to a family, and create a healthier world. This World Blood Donor Day, let’s pledge to donate regularly, spread awareness, and inspire others. Because somewhere, someone is alive today… thanks to a donor like you.</p>
      </div>
      {/* <div className="contact-section">
        <div style={{marginBottom: '2rem'}}>
          <h2 className="section-title">Links</h2>
          <a href className="contact-link">Home</a><br />
          <a href className="contact-link">About</a><br />
          <a href className="contact-link">Blood</a><br />
          <a href className="contact-link">Galleary</a><br />
          <a href className="contact-link">Contact</a><br />
        </div>
      </div> */}
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
      <div className="newsletter-section">
        <h2 className="section-title">Help & Support</h2>
        <p className="newsletter-text" style={{marginBottom: '1rem'}}>
         "If you face any issues or have feedback about this project, feel free to reach us at: [blooddonation@gmail.com]
        </p>
      </div>
    </div>
  </div>
</div>

    </>

  );
};

export default Fotter;
