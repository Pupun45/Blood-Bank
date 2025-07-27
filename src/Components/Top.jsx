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
          <li><a href="#"><i className="fas fa-envelope-open-text"></i> Request</a></li>
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
            {/* Signup Panel */}
            <div className="custom-panel custom-signup">
              <form
                className="custom-form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const name = e.target.name.value;
                  const email = e.target.email.value;
                  const password = e.target.password.value;

                  const response = await fetch("http://localhost:4000/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username: name, email, password }),
                  });

                  const result = await response.json();
                  alert(result.message);

                  if (response.ok) {
                    e.target.reset();
                    setIsRightPanelActive(false);
                  }
                }}
              >
                <h1 className="custom-heading">Create Account</h1>
                <input type="text" name="name" className="custom-input" placeholder="Name" required />
                <input type="email" name="email" className="custom-input" placeholder="Email" required />
                <input type="password" name="password" className="custom-input" placeholder="Password" required />
                <button className="custom-btn" type="submit">Sign Up</button>
              </form>
            </div>

            {/* Login Panel */}
            <div className="custom-panel custom-signin">
              <form
                className="custom-form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const email = e.target.email.value;
                  const password = e.target.password.value;

                  const response = await fetch("http://localhost:4000/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                  });

                  const result = await response.json();
                  alert(result.message);

                  if (response.ok) {
                    localStorage.setItem("username", result.username);
                    window.location.href = "/new.html";
                  }
                }}
              >
                <h1 className="custom-heading">Welcome Back</h1>
                <input type="email" name="email" className="custom-input" placeholder="Email" required />
                <input type="password" name="password" className="custom-input" placeholder="Password" required />
                <a className="custom-link" href="#">Forgot your password?</a>
                <button className="custom-btn" type="submit">Login</button>
              </form>
            </div>

            {/* Overlay Panels */}
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
                  <button className="custom-btn custom-ghost" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
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
