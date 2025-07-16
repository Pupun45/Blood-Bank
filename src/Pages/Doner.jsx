import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Donate from '../image/Donateblood.png'
import Slider from '../Extra-file/slider'
import form from '../image/Donate-form.avif'
const Doner = () => {
  return (
    <div>
    <img src={Donate} width={'100%'} height={'400vh'} alt="image" />

    <>
   <div className="rules">
        <>
        <div className="Text-size">
          <h3 className="hd" data-title="RULES FOR DONATE BLOOD">
            RULES FOR DONATE BLOOD
          </h3>
          <div className="sep"></div>
          <div className="sep2"></div>
        </div>
      </>
  <table>
    <thead>
      <tr>
        <th>CAN</th>
        <th>CAN'T</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.If You are Fit and Healthy</td>
        <td>1.If you have a cold,Sore throat or Flu</td>
      </tr>
      <tr>
        <td>2.Age 18-70</td>
        <td>2.If you have Chronic Infrctious Disease</td>
      </tr>
      <tr>
        <td>3.Weight more than 45kgs</td>
        <td>3.You are taking Antibiotics</td>
      </tr>
      <tr>
        <td>4.If YOu've had no Operation in six months</td>
        <td>4.If You had recent Surgery</td>
      </tr>
      <tr>
        <td>5.Even if you have Cholesterol</td>
        <td>5.You are Pregnant Or Breastfeeding</td>
      </tr>
      <tr>
        <td>6.Even if you take blood pressure medication and your pressure is stable</td>
        <td>6.You've Had an Extended Stay in Certain Countries</td>
      </tr>
    </tbody>
  </table>
</div>
   <>
   <div className="Aleart-width">
       <Alert variant="danger">
      <Alert.Heading>Important: Blood Donation Eligibility</Alert.Heading>
      <p>
      Thank you for considering blood donation! Before you proceed, please review the following eligibility criteria.
        Your health and the safety of the blood supply are our top priorities.
      </p>
      <hr />
      <p className="mb-0">
        Please ensure you meet all requirements. If you have any questions, don't hesitate to contact us.
        We appreciate your willingness to save lives!
      </p>
    </Alert>
</div>
<div className="donor-container">
  <div className="registration-wrapper">
    <div className="form-image">
      <img src={form} alt="Donation" />
    </div>
    <div className="registration-form">
      <div className="form-body">
        <div className="form-field-half">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-field-half">
          <label htmlFor="username">Adhara No</label>
          <input type="number" id="username" placeholder="Enter your Adhara No" required />
        </div>
        <div className="form-field-half">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-field-half">
          <label htmlFor="phone">Phone Number</label>
          <input type="number" id="phone" placeholder="Enter your number" required />
        </div>
        <div className="form-field-half">
          <label htmlFor="pass">Your Blood Group</label>
          <input type="text" id="pass" placeholder="Enter your Blood group" required />
        </div>
        <div className="form-field-half">
          <label htmlFor="confirmPass">Unit of Blood Need</label>
          <input type="text" id="confirmPass" placeholder="Type in Mililitter" required />
        </div>
        <div className="form-field-full">
          <label>Gender</label>
          <div className="gender-options">
            <label><input type="radio" name="gender" defaultValue="Male" required /> Male</label>
            <label><input type="radio" name="gender" defaultValue="Female" /> Female</label>
            <label><input type="radio" name="gender" defaultValue="Other" /> Other</label>
          </div>
        </div>
        <div className="form-field-full">
          <label htmlFor="address">Address</label>
          <textarea id="address" placeholder="Enter your full address" required />
        </div>
        <div className="submit-button-wrapper">
          <input type="submit" value="Register" />
        </div>
      </div>
    </div>
  </div>
</div>
   </>
   <>
    <Slider/>
   </>
    </>
    </div>
    
  )
}

export default Doner