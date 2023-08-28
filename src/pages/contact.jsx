
import React from 'react'

const contact = () => {
  return <>
   <section className="contact-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12 text-center">
            <h1 className=" text">Reach Out to Us</h1>
            <p className=' text fs-3'>We are only a step away from you</p>
        </div>
      </div>
    </div>
  </section>
  <div className="contact-wrapper-details p-5">
    <div className="container-xxl">
      <div className="row text-center align-items-center">
        <div className="col-lg-6 col-md-12 p-3">
          <div className="map card m-auto embed-responsive embed-responsive-16by9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119285.15551957641!2d74.68145908380627!3d20.88570546355044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec5f2c571bb47%3A0x5827ae11b9d7cb1c!2sDhule%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689799391406!5m2!1sen!2sin"
             allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
            <div className="card p-5">
                <h2 className='footer-title mb-3'><b>Contact Us</b></h2>
                  <p className='mb-2'><b>Address:</b> Dhule, Maharashtra</p>
                  <p className='mb-2'><b>Phone:</b>  <a className='footer-tel' href="9284117732">+91 9284117732</a></p>
                  <p className='mb-4'><b>E-mail:</b> <a className='footer-tel' href="patilharshal0151@gmail.com">patilharshal0151@gmail.com</a></p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos iusto rerum architecto a eaque consequuntur impedit! Harum earum iste, suscipit soluta, culpa necessitatibus quia sit nulla doloremque officia cum.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit hic veniam unde numquam in ullam laudantium odit explicabo itaque! Voluptate similique, accusantium consequatur provident soluta quaerat maxime adipisci vero sed.</p>
            </div>
          </div>
      </div>
    </div>
  </div>

  <div className="contact-message p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
        <div className="card p-5">
        <h2 className='text-center mb-4'>Leave Us A message</h2>
        <div className=" d-flex align-items-center justify-content-center">
        <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
              </div>
              <div className='col-12'>
              <label htmlFor="exampleFormControlInput1" className="form-label mb-3">Enter Your Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                   
              </div>
              <div className="col-12">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Type in your message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className='col-12 text-center gap-2'>
                <button id='button-link' type="submit">Submit</button>
                </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </>;
}

export default contact