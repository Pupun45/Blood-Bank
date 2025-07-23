import React, { useState } from 'react';
import '../App.css';

const Top = () => {
 const [showForm, setShowForm] = useState(false);
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div>
      <nav className="main-navbar">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          style={{ color: "#1aff00ff", fontSize: "18px", flex: 2 }}
        >
          Donate blood, save lives. A single unit can save three lives. Your small act of kindness can be someone’s second chance. Blood cannot be manufactured; it must come from generous donors. Be the reason someone survives — donate blood today and make a life-changing impact.
        </marquee>
        <ul>
          <li><a href="#"><i className="fas fa-shopping-cart" /> Cart</a></li>
          <li><a href="#"><i className="fas fa-bell" /> Notifications</a></li>
          <li><button className="btn-signup" onClick={() => setShowForm(true)}>Sign Up</button></li>
        </ul>
      </nav>

         {showForm && (
        <div
          className="custom-popup-overlay"
          onClick={(e) => {
            if (e.target.classList.contains("custom-popup-overlay")) {
              setShowForm(false);
              setIsRightPanelActive(false);
            }
          }}
        >
          <div className={`custom-wrapper ${isRightPanelActive ? "custom-right-active" : ""}`}>
            <div className="custom-panel custom-signup">
              <form className="custom-form">
                <h1 className="custom-heading">Create Account</h1>
                <input type="text" className="custom-input" placeholder="Name" />
                <input type="email" className="custom-input" placeholder="Email" />
                <input type="password" className="custom-input" placeholder="Password" />
                <button className="custom-btn">Sign Up</button>
              </form>
            </div>
            <div className="custom-panel custom-signin">
              <form className="custom-form">
                <h1 className="custom-heading">Sign in</h1>
                <input type="email" className="custom-input" placeholder="Email" />
                <input type="password" className="custom-input" placeholder="Password" />
                <a className="custom-link" href="#">Forgot your password?</a>
                <button className="custom-btn">Login</button>
              </form>
            </div>
            <div className="custom-overlay-container">
              <div className="custom-overlay">
                <div className="custom-overlay-panel custom-left">
                  <h1 className="custom-heading">Hello, Friend!</h1>
                  <p className="custom-text">
                    Enter your personal details and start your journey with us
                  </p>
                  <button className="custom-btn custom-ghost" onClick={() => setIsRightPanelActive(false)}>Login</button>
                </div>
                <div className="custom-overlay-panel custom-right">
                   <h1 className="custom-heading">Welcome Back!</h1>
                  <p className="custom-text">
                    To keep connected with us please login with your personal info
                  </p>
                  <button className="custom-btn custom-ghost" onClick={() => {
                    setShowForm(true);
                    setIsRightPanelActive(true);
                  }}>Sign Up</button>
                </div>
              </div>
            </div>

            <button className="custom-btn custom-close" onClick={() => setShowForm(false)}>×</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Top;
