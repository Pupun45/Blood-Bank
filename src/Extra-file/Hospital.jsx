import React, { useState } from "react";
import "../App.css";
import MED from "../image/AboutS33.jpg";

const hospitalsData = [
  {
    name: "City Hospital",
    phone: "9876543210",
    address: "Main Road, Bhubaneswar",
    photo: MED,
  },
  {
    name: "Red Cross Center",
    phone: "9234567810",
    address: "Sector 2, Cuttack",
    photo: MED,
  },
  {
    name: "Green Valley Health",
    phone: "9123456780",
    address: "Green Street, Rourkela",
    photo: "https://via.placeholder.com/200x120?text=Green+Valley",
  },
  {
    name: "Sunrise Medical",
    phone: "9988776655",
    address: "Station Bazar, Puri",
    photo: "https://via.placeholder.com/200x120?text=Sunrise",
  },
  {
    name: "LifeCare Hospital",
    phone: "9900112233",
    address: "BDA Colony, Sambalpur",
    photo: "https://via.placeholder.com/200x120?text=LifeCare",
  },
  {
    name: "Wellness Center",
    phone: "7001223344",
    address: "Hospital Road, Angul",
    photo: "https://via.placeholder.com/200x120?text=Wellness",
  },
  {
    name: "Happy Health",
    phone: "9012345678",
    address: "Near Bus Stand, Balasore",
    photo: "https://via.placeholder.com/200x120?text=Happy+Health",
  },
  {
    name: "VitalCare",
    phone: "8123456789",
    address: "Town Area, Berhampur",
    photo: "https://via.placeholder.com/200x120?text=VitalCare",
  },
  {
    name: "Grand Medical",
    phone: "8899776655",
    address: "College Street, Koraput",
    photo: "https://via.placeholder.com/200x120?text=Grand+Medical",
  },
  {
    name: "HealthFirst",
    phone: "9012785678",
    address: "NH-5, Jharsuguda",
    photo: "https://via.placeholder.com/200x120?text=HealthFirst",
  },
];

const cardsPerPage = 8;

const Hospital = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredHospitals = hospitalsData.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredHospitals.length / cardsPerPage);
  const start = (currentPage - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const currentHospitals = filteredHospitals.slice(start, end);

  return (
    
    <div className="hospital-wrapper">
      <div className="hospital-search">
        <input
          type="text"
          placeholder="Search hospital name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="hospital-input"
        />
      </div>

      <div className="hospital-cards">
        {currentHospitals.map((hospital, idx) => (
          <div className="hospital-card" key={idx}>
            <div className="hospital-card-text">
              <h3>{hospital.name}</h3>
              <p>
                <strong>Phone:</strong> {hospital.phone}
              </p>
              <p>
                <strong>Address:</strong> {hospital.address}
              </p>
            </div>
            <div className="hospital-card-image">
              <img src={hospital.photo} alt={hospital.name} />
            </div>
          </div>
        ))}
      </div>

      <div className="hospital-pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "pagination-btn active" : "pagination-btn"}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hospital;
