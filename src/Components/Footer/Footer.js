import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  //TODO: Adjust logo sizing
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2><Link to='/'>Home</Link></h2>
          </div>
          <div class='footer-link-items'>
            <h2><Link to='/careers'>Careers</Link></h2>
          </div>
          <div class='footer-link-items'>
            <h2><Link to='/contact'>Contact Us</Link></h2>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src='/images/Logo-2-White.png' width="220" height="60"/>
            </Link>
          </div>
          <small class='website-rights'>Bandera Auto Solutions © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;