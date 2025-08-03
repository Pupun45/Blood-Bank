import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../image/About.jpg";
import Scroller from "../Extra-file/ScrollButtons";
import "../App.css";

const sampleData = [
  { id: 1, bloodGroup: "A+", location: "City Hospital", units: 5, updated: "1 hour ago" },
  { id: 2, bloodGroup: "B-", location: "Red Cross Blood Bank", units: 2, updated: "30 mins ago" },
  { id: 3, bloodGroup: "O+", location: "Apollo Center", units: 3, updated: "5 mins ago" },
  { id: 4, bloodGroup: "AB+", location: "Care Blood Center", units: 1, updated: "2 hours ago" },
  { id: 5, bloodGroup: "B+", location: "Care Blood Center", units: 1, updated: "2 hours ago" },
  { id: 6, bloodGroup: "AB+", location: "Care Blood Center", units: 1, updated: "2 hours ago" },
  { id: 7, bloodGroup: "O-", location: "Care Blood Center", units: 1, updated: "2 hours ago" },
  { id: 8, bloodGroup: "AB+", location: "Care Blood Center", units: 1, updated: "2 hours ago" },
  { id: 9, bloodGroup: "AB+", location: "Care Blood Center", units: 1, updated: "2 hours ago" },
  { id: 10, bloodGroup: "AB+", location: "Care Blood Center", units: 1, updated: "2 hours ago" },
];

const bloodGroups = ["All", "A+", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const Avalibality = () => {
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Form submitted successfully!");
        setIsOpen(false);
        setFormData({
          name: "",
          adhara: "",
          email: "",
          phone: "",
          bloodGroup: "",
          unit: "",
          gender: "",
          address: "",
        });
      } else {
        alert("Form failed: " + data.message);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Submission error");
    }
  };

  const filteredData = selectedGroup === "All"
    ? sampleData
    : sampleData.filter((item) => item.bloodGroup === selectedGroup);

  return (
    <>
      <Scroller />
      <section className="about-section">
        <div className="about-left"></div>
        <div className="about-right">
          <div className="child-image">
            <img src={image} alt="Smiling child" />
          </div>
          <div className="about-text">
            <h1>Behind Every Smile<br /><span>A Donor Like You</span></h1>
            <p>
              These images capture the true essence of humanity — kindness, compassion, and life. Every picture tells the story of someone who gave selflessly and someone who got a second chance at life. Because of your blood, their hearts still beat.
            </p>
          </div>
        </div>
      </section>

      <div className="Text-size">
        <h3 className="hd" data-title="🩸 Blood Availability">
          🩸 Blood Availability
        </h3>
        <div className="sep"></div>
        <div className="sep2"></div>
      </div>

      <div className="availability-section">
        <div className="group-buttons">
          {bloodGroups.map((group) => (
            <button
              key={group}
              className={`group-btn ${selectedGroup === group ? "active" : ""}`}
              onClick={() => setSelectedGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>
        <div className="cards-container">
          {filteredData.map((item) => (
            <div key={item.id} className="blood-card">
              <div className="blood-type">🩸 {item.bloodGroup}</div>
              <div className="location">📍 {item.location}</div>
              <div className="units">📦 {item.units} unit(s) available</div>
              <div className="updated">🕒 Updated: {item.updated}</div>
              <button className="open-button" onClick={() => setIsOpen(true)}>
                Request
              </button>
            </div>
          ))}
        </div>
      </div>

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
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                </div>
                <div className="input_box">
                  <label>Adhara No</label>
                  <input type="number" name="adhara" value={formData.adhara} onChange={handleChange} placeholder="Enter your Adhara No" required />
                </div>
                <div className="input_box">
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                </div>
                <div className="input_box">
                  <label>Phone Number</label>
                  <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your number" required />
                </div>
                <div className="input_box">
                  <label>Blood Group</label>
                  <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} placeholder="Enter your Blood group" required />
                </div>
                <div className="input_box">
                  <label>Unit of Blood Need</label>
                  <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Type in Milliliter" required />
                </div>
                <div className="input_data">
                  <label>Gender</label>
                  <div className="gender-group">
                    <label>
                      <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} required /> Male
                    </label>
                    <label>
                      <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} /> Female
                    </label>
                    <label>
                      <input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleChange} /> Other
                    </label>
                  </div>
                </div>
                <div className="input_data">
                  <label>Address</label>
                  <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter your full address" required></textarea>
                </div>
                <div className="reg_btn">
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Avalibality;
