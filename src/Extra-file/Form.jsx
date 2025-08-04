import React, { useState, useEffect } from "react";
import "../App.css";

function Form({ hospital, onClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    adhara: "",
    email: "",
    phone: "",
    bloodGroup: "",
    unit: "",
    gender: "",
    address: "",
  });

  useEffect(() => {
    if (!isOpen) onClose(); // Auto-close
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/request-blood", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message || "Form submitted successfully");
        setIsOpen(false);
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="form-data">
        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        <div className="title"><p>Registration</p></div>

        {hospital && (
          <div className="hospital-info">
            <h2>Contacting: {hospital.name}</h2>
            <p><strong>Phone:</strong> {hospital.phone}</p>
            <p><strong>Address:</strong> {hospital.address}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="user_details">
            <div className="input_box">
              <label>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="input_box">
              <label>Adhara No</label>
              <input type="number" name="adhara" value={formData.adhara} onChange={handleChange} required />
            </div>
            <div className="input_box">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input_box">
              <label>Phone Number</label>
              <input type="number" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="input_box">
              <label>Blood Group</label>
              <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required />
            </div>
            <div className="input_box">
              <label>Unit of Blood Need</label>
              <input type="text" name="unit" value={formData.unit} onChange={handleChange} required />
            </div>
            <div className="input_data">
              <label>Gender</label>
              <div className="gender-group">
                <label>
                  <input type="radio" name="gender" value="Male" onChange={handleChange} checked={formData.gender === "Male"} required /> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender === "Female"} /> Female
                </label>
                <label>
                  <input type="radio" name="gender" value="Other" onChange={handleChange} checked={formData.gender === "Other"} /> Other
                </label>
              </div>
            </div>
            <div className="input_data">
              <label>Address</label>
              <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>
            </div>
            <div className="reg_btn">
              <input type="submit" value="Register" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
