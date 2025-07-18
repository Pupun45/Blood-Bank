import React from 'react'
import Scroller from "../Extra-file/ScrollButtons";
const Contact = () => {
  return (
    <>
     <Scroller/>
  <div className="contain">
  <div className="wrapper">
    <div className="form">
      <h4>GET IN TOUCH</h4>
      {/* <h2 className="form-headline">Send us a message</h2> */}
      <form id="submit-form" action>
        <p>
          <input id="name" className="form-input" type="text" placeholder="Your Name*" />
          <small className="name-error" />
        </p>
        <p>
          <input id="email" className="form-input" type="email" placeholder="Your Email*" />
          <small className="name-error" />
        </p>
        <p className="full-width">
          <input id="company-name" className="form-input" type="number" placeholder="Mobile No*" required />
          <small />
        </p>
        <p className="full-width">
          <textarea minLength={20} id="message" cols={30} rows={7} placeholder="Your Message*" required defaultValue={""} />
          <small />
        </p>
        <p className="full-width">
          <input type="checkbox" id="checkbox" name="checkbox" defaultChecked /> we will reach you.
        </p>
        <p className="full-width">
          <input type="submit" className="submit-btn" defaultValue="Submit" onclick="checkValidations()" />
          <button className="reset-btn" onclick="reset()">Reset</button>
        </p>
      </form>
    </div>
    <div className="contacts contact-wrapper">
      <ul>
        {/* <li>We've driven online revenues of over <span className="highlight-text-grey">$2
            billion</span> for our clients. Ready to know
          how we can help you?</li> */}
        <span className="hightlight-contact-info">
          <li className="email-info"><i className="fa fa-envelope" aria-hidden="true" /> @gmail.com</li>
          <li><i className="fa fa-phone" aria-hidden="true" /> <span className="highlight-text">+91 </span></li>
        </span>
      </ul>
    </div>
  </div>
</div>

    </>
  )
}

export default Contact