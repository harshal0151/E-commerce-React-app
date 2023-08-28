
import React from 'react'
import { BsBook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import logo from '../assets/images/icons/logo2.png'


const footer = () => {
  return <>
  <footer className='footer p-5'>
    <div className="container-xxl">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
          <h2 className='footer-title mb-3'><b>Contact</b></h2>
          <div className='mb-3'><p><b>Address:</b>  Dhule , Maharshtra</p> </div>
          <div className='mb-3'><p><b>Phone:</b>  <a className='footer-tel' href="tel:+91 9284117732">  +91 9284117732</a></p> </div>
          <div className='mb-4'><p><b>E-Mail:</b><a className='footer-tel' href="patilharshal0151">   patilharshal0151</a> </p> </div>
          <div className='mb-3'><p><b>socials</b></p> </div>
          <div className="socials d-flex gap-3">
          <Link to='https://www.linkedin.com/in/harshal-patil-187a87245/' id='footer-link' target='_blank' className='gap-3'>
          <BsLinkedin />
          </Link>
          <Link to='https://www.instagram.com/patilharshal2122/' id='footer-link' target='_blank' className='gap-3'>
          <BsInstagram />
          </Link>
          <Link  to = " https://www.naukri.com/mnjuser/profile"className='gap-3' id='footer-link'>
          <BsBook />
          </Link>
  
          </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>About</b></h2>
          <div className='mb-3'> <Link to='checkout' id='footer-links'>Delivery</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Privacy Policy</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Terms & Conditions</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Fee Policy</Link>  </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>Account</b></h2>
          <div className='mb-3'> <Link to='/login' id='footer-links'>Profile</Link>  </div>
          <div className='mb-3'> <Link to='/cart' id='footer-links'>View Cart</Link>  </div>
          <div className='mb-3'> <Link to='/contact' id='footer-links'>Help</Link>  </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <h2 className='footer-title mb-3'><b>Company</b></h2>
          <div className="pay">
          <Link to='#' target='_blank'>
          <img src={logo} alt="" />
          </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </>;
}

export default footer