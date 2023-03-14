import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  //TODO: add these links back
  /*

          <div className='footer-link-items'>
            <h2><Link to='/careers'>Careers</Link></h2>
          </div>
          <div className='footer-link-items'>
            <h2><Link to='/contact'>Contact Us</Link></h2>
          </div>
  */
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2><Link to='/'>Home</Link></h2>
          </div>
          <div className='footer-link-items'>
            <h2><Link to='/faq'>FAQ</Link></h2>
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
              to='https://www.facebook.com/BanderaAutoSolutions/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link google'
              to='https://www.google.com/search?q=bandera+auto+solutions&rlz=1C1CHBF_enUS788US788&oq=bandera+auto+solutions&aqs=chrome.0.35i39j46i175i199i512j0i22i30j69i60l2j69i61.2649j0j7&sourceid=chrome&ie=UTF-8#lrd=0x865c0415389e0ca5:0xf479b294fb0f59e7,1,,,,'
              target='_blank'
              aria-label='Google'
            >
              <i className="fa-brands fa-google" />
            </Link>
            <Link
              className='social-icon-link yelp'
              to='https://www.yelp.com/biz/bandera-auto-solutions-bandera#reviews'
              target='_blank'
              aria-label='Yelp'
            >
              <i className="fa-brands fa-yelp" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;