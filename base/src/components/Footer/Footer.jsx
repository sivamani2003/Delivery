import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum omnis, atque iusto, autem architecto est accusantium veritatis voluptates accusamus recusandae nulla. Aliquid a, vero nulla fugiat necessitatibus impedit commodi ratione.</p>
        <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
       </div>
       </div>
        <div className="footer-content-right">
          <h2>Company</h2>
          <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-center">
          <h2>Get in touch</h2>
          <ul>
            <li>+918179703032</li>
            <li>sivamani_k@srmap.edu.in</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 to @us -All Rights Resevred</p>
    </div>
  )
}

export default Footer
