import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="contact_section small_pt">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 offset-lg-2">
            <div className="title-default_light title_border text-center">
              <h4 className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                Get In Touch
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center small_space">
          <div className="col-lg-4 col-md-6 offset-lg-2">
            <div className="bg_light_dark contact_box_s2 animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
             <div className="contact_title">
             <h5 className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                Contact With Us
              </h5>
              <p className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                aborum sit tenetur distinctio. Reprehenderit eaque nemo obcaecati officia tempore dicta sed fugit ratione eum doloribus provident.

              </p>
             </div>
             <ul className="list_none contact_info mt-margin">
              <li className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                <i className="ion-ios-email"></i>
                <div className="contact_details">
                  <span>
                    Address
                  </span>
                  <p>Pune, india</p>
                </div>
              </li>
              <li className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                <i className="ion-ios-email"></i>
                <div className="contact_details">
                  <span>
                    Phone
                  </span>
                  <p>+63 56856856</p>
                </div>
              </li>
              <li className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                <i className="ion-ios-email"></i>
                <div className="contact_details">
                  <span>
                    Email-ID
                  </span>
                  <p>atharv.isapure.108@gmail.com</p>
                </div>
              </li>
             </ul>
             <div className="contct_follow pt-2 pt-md-4">
              <span className="text-uppercase animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
              >Follow Us

              </span>
              <ul className="list_none social_icon">
              <li className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                <a href="#" className="icon_color">
                  <FaFacebookF className="icon_color" />
                </a>
              </li>
              <li className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                <a href="#" className="icon_color">
                  <FaInstagram className="icon_color" />
                </a>
              </li>
              <li className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                <a href="#" className="icon_color">
                  <FaLinkedinIn className="icon_color" />
                </a>
              </li>
              <li className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                <a href="#" className="icon_color">
                  <FaYoutube className="icon_color" />
                </a>
              </li>
              <li className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                <a href="#" className="icon_color">
                  <FaTwitter className="icon_color" />
                </a>
              </li>
             
              
             </ul>
             </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="pt-4 pt-md-0 animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s">
              <form action="#" method="post" name="enq" className="field_form">
                <div className="form-group col-md-12 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
                >
                  <input type="text" required
                  placeholder="Enter Name" id="name" className="form-control" name="name"/>

                </div>
                <div className="form-group col-md-12 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
                >
                  <input type="text" required
                  placeholder="Enter Email" id="email" className="form-control" name="email" />

                </div>
                <div className="form-group col-md-12 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
                >
                  <input type="text" required
                  placeholder="Enter Subject" id="subject" className="form-control" name="subject" />

                </div>
                <div className="form-group col-md-12 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
                >
                  <textarea type="text" required
                  placeholder="Enter message" id="description" className="form-control" name="description" role="2" />

                </div>
                <div className="col-md-12 text-center animation"
                data-animation="fadeInUp" data-animation-delay="0.2s">
                  <button className="btn btn-default btn-radius btn-block"
                  type="submit"
                  title="Submit Your Message" id="submitButton"
                  name="submit"
                  style={{ color: 'black', fontWeight: 'bold' }}
                  value={'Submit'}>Submit 
                      
                  </button>
                </div>
                <div className="col-md-12">
                  <div id="alert-msg" className="text-center alert msg">

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
};

export default Contact;
