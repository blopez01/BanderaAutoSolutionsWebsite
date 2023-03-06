import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  //TODO: Adjust logo sizing
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2><Link to='/'>Home</Link></h2>
          </div>
          <div className='footer-link-items'>
            <h2><Link to='/careers'>Careers</Link></h2>
          </div>
          <div className='footer-link-items'>
            <h2><Link to='/contact'>Contact Us</Link></h2>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src='/images/Logo-2-White.png' alt='logo' width="220" height="60"/>
            </Link>
          </div>
          <small className='website-rights'>Bandera Auto Solutions © 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;