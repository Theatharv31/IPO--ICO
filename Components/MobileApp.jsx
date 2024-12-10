import React from "react";
import { IoLogoAndroid, IoLogoApple} from "react-icons/io";
import { AiFillAndroid} from "react-icons/ai";
const MobileApp = () => {
  return (
    <section id="mobileapp"
    className="bg_light_dark"
    dark-z-index="1"
    data-parallax="scroll"
    data-image-src="assets/images/app_bg.png" >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="title_default_light title_border text_md_center">
              <h4 className="animation" 
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                 Download Mobile App
              </h4>
              <p className="animation" 
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem cupiditate velit itaque ipsum iste ullam reprehenderit dolor, iusto ratione? Molestias, quaerat! Necessitatibus hic blanditiis ullam. Officiis non optio minus.

              </p>
              <p className="animation" 
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem cupiditate velit itaque ipsum iste ullam reprehenderit dolor, iusto ratione? Molestias, quaerat! Necessitatibus hic blanditiis ullam. Officiis non optio minus.

              </p>
              
            </div>
            <div className="btn_group text_md_center animation"
            data-animation="fadeInUp"
            data-animation-delay="0.6s">
              <a className="btn btn-default btn-radius"  style={{ color: 'black', fontWeight: 'bold' }}>
                <AiFillAndroid className="new_font_size" />
                Google Store

              </a>
              <a className="btn btn-default btn-radius"  style={{ color: 'black', fontWeight: 'bold' }}>
                <IoLogoApple className="new_font_size" />
                Apple Store

              </a>

            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="res_md_mt_50 res_sm_mt_30 text-center animation"
            data-animation="fadeInRight"
            data-animation-delay="0.2s"
            >
              <img src="assets/images/mobile_app3.png" alt="" />

            </div>
          </div>
        </div>
      </div>

    </section>
  )
};

export default MobileApp;
