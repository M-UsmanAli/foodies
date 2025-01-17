import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
          <img  className='logo' src={assets.background_remove_logo} alt=''/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente consequuntur qui doloribus, blanditiis eum eos maiores sequi sit culpa necessitatibus autem cumque deleniti explicabo odio tempora. Quidem aperiam quod voluptatum.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+923130874356</li>
            <li>aliusmanmuhammad98@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 - All rights reserved
      </p>
    </div>
  )
}

export default Footer