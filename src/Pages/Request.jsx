import React from "react";
import "../App.css";
import request from "../image/request-1.png";
import Hospitallist from "../Extra-file/Hospital"

const Receiver = () => {
  return (
    <>
      <div className="banner">
        <img src={request} alt="Blood Donation" />
        <div className="banner-text">
          <h2>Request Blood Now</h2>
          <p>Search hospitals in your area and submit the form.</p>
          <p>Confirm your request in one step.</p>
          <p>We'll verify the request and respond quickly.</p>
          <p>
            <strong>You’ll get a call within 5 minutes.</strong>
          </p>
        </div>
      </div>
      <>
      <>
        <div className="Text-size">
          <h3 className="hd" data-title="Find Your Nearest Hospital">
            Find Your Nearest Hospital
          </h3>
          <div className="sep"></div>
          <div className="sep2"></div>
        </div>
      </>
      <Hospitallist/>
      </>
    </>
  );
};

export default Receiver;
