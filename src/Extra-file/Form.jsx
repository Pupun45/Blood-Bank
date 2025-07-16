import React, { useState } from "react";
import '../App.css'

function Form() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");

    setIsOpen(false); // Close popup
    // Optional: Go back to previous page (if using react-router)
    // navigate(-1);
  };

  return (
    <div>
      <button className="open-button" onClick={() => setIsOpen(true)}>
        Open Registration Form
      </button>

      {isOpen && (
        <div className="popup-overlay">
          <div className="form-data">
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ×
            </button>
            <div className="title">
              <p>Registration</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="user_details">
                <div className="input_box">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input_box">
                  <label>Adhara No</label>
                  <input type="number" placeholder="Enter your Adhara No" required />
                </div>
                <div className="input_box">
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="input_box">
                  <label>Phone Number</label>
                  <input type="number" placeholder="Enter your number" required />
                </div>
                <div className="input_box">
                  <label>Blood Group</label>
                  <input type="text" placeholder="Enter your Blood group" required />
                </div>
                <div className="input_box">
                  <label>Unit of Blood Need</label>
                  <input type="text" placeholder="Type in Milliliter" required />
                </div>
                <div className="input_data">
                  <label>Gender</label>
                  <div className="gender-group">
                    <label><input type="radio" name="gender" value="Male" required /> Male</label>
                    <label><input type="radio" name="gender" value="Female" /> Female</label>
                    <label><input type="radio" name="gender" value="Other" /> Other</label>
                  </div>
                </div>
                <div className="input_data">
                  <label>Address</label>
                  <textarea placeholder="Enter your full address" required></textarea>
                </div>
                <div className="reg_btn">
                  <input type="submit" value="Register" />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
