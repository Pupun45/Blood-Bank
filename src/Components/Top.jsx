import React from 'react'
import '../App.css'

const Top = () => {
  return (
    <div>
  <nav className="main-navbar">
  <div className="donation-message">
    <div><strong>Donate blood, save lives.</strong></div>
    <div>Your small act of kindness can be someone’s second chance.</div>
  </div>
  <ul>
    <li><a href="#"><i className="fas fa-shopping-cart" /> Cart</a></li>
    <li><a href="#"><i className="fas fa-bell" /> Notifications</a></li>
    <li><button className="btn-signup">Sign Up</button></li>
  </ul>
</nav>
    </div>
  )
}

export default Top
