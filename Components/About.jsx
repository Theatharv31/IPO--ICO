import React from "react";
import {BsArrowRight} from 'react-icons/bs';

const About = () => {

  return (
    <section id="about" className="small_pt">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="text_md_center">
            <img src="assets/images/about_img2.png" alt="" className="animation"
            data-animation="zoomIn"
            data-animation-delay="0.2s" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
          <div className="title_default_light title_border">
            <h4 className="animation"
            data-animation="animation"
            data-animation-delay="0.2s">
              About us
            </h4>
            <p className="animation"
            data-animation="animation"
            data-animation-delay="0.8s" >
Our platform revolutionizes the IPO process by tokenizing equity, enabling users to purchase tokens representing shares in a company. We simplify the traditional stock market offering by leveraging blockchain technology, making investments more accessible, transparent, and efficient.            </p>
            <p className="animation"
            data-animation="animation"
            data-animation-delay="0.4s" >
With our platform, users can participate in tokenized Initial Public Offerings (IPOs) directly through secure, decentralized transactions.                 
            </p>
          </div>
          <a className="btn btn-default btn-radius video animation"
          data-animation="animation"
            data-animation-delay="0.4s"  style={{ color: 'black', fontWeight: 'bold' }}
          >
            Let's Start 
          </a>
        </div>
      </div>
      </div>

    </section>
  )
};

export default About;
