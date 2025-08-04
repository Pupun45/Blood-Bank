import React, { useState } from "react";
import Scroller from "../Extra-file/ScrollButtons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message || "Message sent successfully");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Scroller />
      <div className="contain">
        <div className="wrapper">
          <div className="form">
            <h4>GET IN TOUCH</h4>
            <form onSubmit={handleSubmit}>
              <p>
                <input
                  id="name"
                  className="form-input"
                  type="text"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <input
                  id="email"
                  className="form-input"
                  type="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </p>
              <p className="full-width">
                <input
                  id="mobile"
                  className="form-input"
                  type="number"
                  placeholder="Mobile No*"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </p>
              <p className="full-width">
                <textarea
                  id="message"
                  cols={30}
                  rows={7}
                  placeholder="Your Message*"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </p>
              <p className="full-width">
                <input type="submit" className="submit-btn" value="Submit" />
                <button
                  type="button"
                  className="reset-btn"
                  onClick={() =>
                    setFormData({
                      name: "",
                      email: "",
                      mobile: "",
                      message: "",
                    })
                  }
                >
                  Reset
                </button>
              </p>
            </form>
          </div>

          <div className="contacts contact-wrapper">
            <ul>
              <span className="hightlight-contact-info">
                <li className="email-info">
                  <i className="fa fa-envelope" aria-hidden="true" /> contact@gmail.com
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true" />{" "}
                  <span className="highlight-text">+91 00000 00000</span>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
