import React, { useState } from 'react';
import "../App.css";
import Blood from "../image/Blood.jpg";
import { FaUser, FaGift, FaGlobe, FaHandHoldingHeart } from "react-icons/fa";
const bloodData = {
  'A+': { take: ['A+', 'A-', 'O+', 'O-'], give: ['A+', 'AB+'] },
  'O+': { take: ['O+', 'O-'], give: ['A+', 'B+', 'O+', 'AB+'] },
  'B+': { take: ['B+', 'B-', 'O+', 'O-'], give: ['B+', 'AB+'] },
  'AB+': { take: ['Everyone'], give: ['AB+'] },
  'A-': { take: ['A-', 'O-'], give: ['A+', 'A-', 'AB+', 'AB-'] },
  'O-': { take: ['O-'], give: ['Everyone'] },
  'B-': { take: ['B-', 'O-'], give: ['B+', 'B-', 'AB+', 'AB-'] },
  'AB-': { take: ['A-', 'B-', 'AB-', 'O-'], give: ['AB+', 'AB-'] },
};

export default function DonationInfo() {
  const [selected, setSelected] = useState('AB-');

  const handleClick = (type) => {
    setSelected(type);
  };

  return (
    <div className="donation-section">
      <p className="blood-label">Select your Blood Type</p>
      <div className="blood-buttons">
        {Object.keys(bloodData).map((type) => (
          <button
            key={type}
            className={`blood-btn ${selected === type ? 'active' : ''}`}
            onClick={() => handleClick(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="donation-card">
        <div className="card-info">
          <div className="box orange">
            <FaUser className="icon" />
            <div>
              <h4>You can take from</h4>
              <p>{bloodData[selected].take.join('  ')}</p>
            </div>
          </div>

          <div className="box blue">
            <FaUser className="icon" />
            <div>
              <h4>You can give to</h4>
              <p>{bloodData[selected].give.join('  ')}</p>
            </div>
          </div>
        </div>

        <div className="card-image">
          <img style={{height:"40vh", width:"57vh"}} src={Blood} alt="Donate" />
          <p className="footer-note">
            One Blood Donation can save up to <span className="highlight">Three Lives</span>
          </p>
        </div>
      </div>
    </div>
  );
}
