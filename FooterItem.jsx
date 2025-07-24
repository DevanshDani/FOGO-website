import React from 'react'
import './FooterItem.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
     <div className="Footer-Content">
      <div className="div Footer-Content-left">
        <img src={assets.logo}alt=''/>
        <p>From quick snacks to full meals, we’re here to serve happiness on your plate. Thanks for being part of our food-loving family.You click it, we cook it. You crave it, we bring it.Come back hungry!</p>
        <div className="Footer-social-icon">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
           <img src={assets.linkedin_icon } alt="" />
        </div>
         
      </div>
      <div className="Footer-Content-center">
        <h2>COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policey</li>
        </ul>

      </div>
      <div className="Footer-Content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>+91 6578495858</li>
          <li>contactfogo@gmail.com</li>
        </ul>

      </div>
      </div> 
      <hr />
      <p className="Footer-copyright">copyright - 2024 Fogo.com - All Right Reserved.</p>
       </div>
  )
}

export default Footer