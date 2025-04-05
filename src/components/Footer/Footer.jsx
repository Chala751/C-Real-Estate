import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        
        <div className="flexColStart f-left">
          <div className="logo">RealEstate</div>
          <p className="secondaryText">
            We provide the best properties across the country 
            with our exceptional service and support.
          </p>
          
          <div className="social-icons flexStart">
            <a href="#" className="icon-circle flexCenter">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="icon-circle flexCenter">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="icon-circle flexCenter">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="icon-circle flexCenter">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        <div className="f-middle flexStart">
          <div className="link-group">
            <span className="link-title">Company</span>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Press</a>
          </div>
          
          <div className="link-group">
            <span className="link-title">Services</span>
            <a href="#">Buy Property</a>
            <a href="#">Sell Property</a>
            <a href="#">Rent Property</a>
            <a href="#">Property Valuation</a>
          </div>
          
          <div className="link-group">
            <span className="link-title">Resources</span>
            <a href="#">FAQs</a>
            <a href="#">Guides</a>
            <a href="#">Help Center</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        
        <div className="flexColStart f-right">
          <span className="link-title">Contact Info</span>
          
          <div className="contact-info flexStart">
            <MdLocationOn size={20} />
            <span>123 Property Street, Adama, AD 10001</span>
          </div>
          
          <div className="contact-info flexStart">
            <MdPhone size={20} />
            <span>+251 (096) 041-6208</span>
          </div>
          
          <div className="contact-info flexStart">
            <MdEmail size={20} />
            <span>ctem@realestate.com</span>
          </div>
          
          <div className="newsletter">
            <span className="link-title">Subscribe to Newsletter</span>
            <div className="newsletter-input">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

     
      <div className="copyright">
        <p>© {new Date().getFullYear()} C-RealEstate. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer