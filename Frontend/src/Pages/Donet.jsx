import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Donate from '../image/Donateblood.png';
import form from '../image/Donate-form.avif';
import Slider from '../Extra-file/slider';
import axios from 'axios';

const Doner = () => {
  const [formData, setFormData] = useState({
    name: '',
    adhara: '',
    email: '',
    phone: '',
    bloodGroup: '',
    unit: '',
    gender: '',
    address: '',
  });

  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { id, value, name } = e.target;
    if (name === 'gender') {
      setFormData({ ...formData, gender: value });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/submit-donor`, formData);
      setAlert({ type: 'success', message: res.data.message });
      setFormData({
        name: '',
        adhara: '',
        email: '',
        phone: '',
        bloodGroup: '',
        unit: '',
        gender: '',
        address: '',
      });
    } catch (err) {
      setAlert({
        type: 'danger',
        message: err.response?.data?.message || "Submission failed",
      });
    }
  };

  return (
    <div>
      <img src={Donate} width={'100%'} height={'400vh'} alt="banner" />

      <div className="rules">
        <div className="Text-size">
          <h3 className="hd" data-title="RULES FOR DONATE BLOOD">RULES FOR DONATE BLOOD</h3>
          <div className="sep"></div>
          <div className="sep2"></div>
        </div>
        <table>
          <thead>
            <tr><th>CAN</th><th>CAN'T</th></tr>
          </thead>
          <tbody>
            <tr><td>1. If You are Fit and Healthy</td><td>1. If you have a cold, sore throat or flu</td></tr>
            <tr><td>2. Age 18-70</td><td>2. If you have chronic infectious disease</td></tr>
            <tr><td>3. Weight more than 45kgs</td><td>3. You are taking antibiotics</td></tr>
            <tr><td>4. No operation in 6 months</td><td>4. Recent surgery</td></tr>
            <tr><td>5. Even if you have cholesterol</td><td>5. Pregnant or breastfeeding</td></tr>
            <tr><td>6. Blood pressure stable</td><td>6. Extended stay in certain countries</td></tr>
          </tbody>
        </table>
      </div>

      <div className="Aleart-width">
        <Alert variant="danger">
          <Alert.Heading>Important: Blood Donation Eligibility</Alert.Heading>
          <p>
            Please review the eligibility criteria. Your health and the safety of the blood supply are top priorities.
          </p>
          <hr />
          <p className="mb-0">
            Contact us with any questions. Thank you for saving lives!
          </p>
        </Alert>
      </div>

      <div className="donor-container">
        <div className="registration-wrapper">
          <div className="form-image">
            <img src={form} alt="Donation" />
          </div>
          <div className="registration-form">
            <form onSubmit={handleSubmit}>
              <div className="form-body">
                {alert.message && (
                  <Alert variant={alert.type}>{alert.message}</Alert>
                )}
                <div className="form-field-half">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-field-half">
                  <label htmlFor="adhara">Adhara No</label>
                  <input type="number" id="adhara" value={formData.adhara} onChange={handleChange} required />
                </div>
                <div className="form-field-half">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-field-half">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" id="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-field-half">
                  <label htmlFor="bloodGroup">Blood Group</label>
                  <input type="text" id="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required />
                </div>
                <div className="form-field-half">
                  <label htmlFor="unit">Unit of Blood You Donate</label>
                  <input type="text" id="unit" value={formData.unit} onChange={handleChange} required />
                </div>
                <div className="form-field-full">
                  <label>Gender</label>
                  <div className="gender-options">
                    <label><input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required /> Male</label>
                    <label><input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female</label>
                    <label><input type="radio" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} /> Other</label>
                  </div>
                </div>
                <div className="form-field-full">
                  <label htmlFor="address">Address</label>
                  <textarea id="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="submit-button-wrapper">
                  <input type="submit" value="Register" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Slider />
    </div>
  );
};

export default Doner;
