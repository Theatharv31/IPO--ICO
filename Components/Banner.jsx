import React from "react";
import {BsCurrencyBitcoin, BsArrowRight} from "react-icons/bs";
import {FaEthereum} from 'react-icons/fa';
import {SiRipple, SiLitecoin} from 'react-icons/si';
import {AiOutlineCloudDownload} from 'react-icons/ai';

const Banner = ({ transferNativeToken }) => {
  return ( 
  <section 
  id="home_section" 
  className="section_banner bg_black_dark"
  data-zindex="1" data-parallax="scroll"  
  data-image-src="assets/images/banner_bg2.png"
  >
  <div className="banner_effect"></div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
          <div className="banner_text_s2 text_md_center">
          <h1 className="animation text-white"
    data-animation="fadeInUp"
    data-animation-delay="1.1s">
  <strong>Platform</strong>  for Launch  
  <strong style={{ marginLeft: '10px' }}>IPO in Form of ICO</strong> 
</h1>
            <h5 className="animation presale_txt text-white"
            data-animation="fadeInUp" 
            data-animation-delay="1.3s">
               ABD Limited IPO is <mark className="gradient_box" 
                style={{ color: 'black', fontWeight: 'bold' }}
               >
                 Live
               </mark>
            </h5>
            <div 
                 className="btn_group pt-2 pb-3 animation" 
                 data-animation="fadeInUp" 
                 data-animation-delay="1.4s"
                 style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
               >
                  <a
                   href="#whitepaper"
                   className="btn btn-border btn-radius"
                   style={{ marginBottom: '10px', width: '70%' }} /* Set width to 70% */
                 >
                   DRHP File <BsArrowRight />
                 </a>
                 <a 
                   href="#token" 
                   className="btn btn-border btn-radius"
                   style={{ marginBottom: '10px', width: '70%' }} /* Set width to 70% */
                 >
                   Buy Token Now! <BsArrowRight />
                 </a>
                 <a
                   onClick={() => transferNativeToken()} 
                   className="btn btn-border btn-radius"
                   style={{ marginBottom: '10px', width: '70%' }} /* Set width to 70% */
                 >
                   Transfer Token <BsArrowRight /> 
                 </a>
               </div>

            <span className="text-white icon_title animation"
            data-animation="fadeInUp" 
            data-animation-delay="1.4s" >
              We accept:

            </span>
            <ul className="list_none currency_icon">
              <li className="animation"
              data-animation="fadeInUp" 
            data-animation-delay="1.5s"
              >
                <span className="new_icon_style">
                  <BsCurrencyBitcoin className="new_font_size" />
                </span>
                <span>BitCoin</span>

              </li>
              <li className="animation"
              data-animation="fadeInUp" 
            data-animation-delay="1.5s"
              >
                <span className="new_icon_style">
                  <FaEthereum className="new_font_size" />
                </span>
                <span>Ethereum</span>

              </li>
              <li className="animation"
              data-animation="fadeInUp" 
            data-animation-delay="1.5s"
              >
                <span className="new_icon_style">
                  <SiLitecoin className="new_font_size" />
                </span>
                <span>LiteCoin</span>

              </li>
              <li className="animation"
              data-animation="fadeInUp" 
            data-animation-delay="1.5s"
              >
                <span className="new_icon_style">
                  <SiRipple className="new_font_size" />
                </span>
                <span>Ripple</span>

              </li>
             
              
            </ul>
            <div id="whitepaper" className="team_pop mfp-hide">
                <div className="row m-0">
                  <div className="col-mg-7">
                    <div className="pt-3 pb-3">
                      <div className="title_dark title_border">
                        <h4>
                          Download DRHP
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat commodi id doloribus dicta, ab ipsa. Consequuntur, sed. Molestiae ea doloribus debitis ad, tempore pariatur praesentium facere ipsam exercitationem alias!                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat commodi id doloribus dicta, ab ipsa. Consequuntur, sed. Molestiae ea doloribus debitis ad, tempore pariatur praesentium facere ipsam exercitationem alias!
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat commodi id doloribus dicta, ab ipsa. Consequuntur, sed. Molestiae ea doloribus debitis ad, tempore pariatur praesentium facere ipsam exercitationem alias!
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, est dignissimos eveniet corporis obcaecati corrupti atque quod ut provident, eius pariatur maiores ducimus accusantium et iure velit tempora debitis culpa.
                          </p>
                        <a className="btn btn-default btn-radius" href="#">
                          Download Now!
                          <AiOutlineCloudDownload />

                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <img src="assets/images/whitepaper.png" alt="" className="pt-3 pb-3" />
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 order-first">
          <div className="banner_image_right res_md_mb_50 res_xs_mb_30 animation"
          data-animation="fadeInRight"
          data-animation-delay="1.5s"
          >
            <img src="assets/images/banner_img2.png" alt="" className="new_image_css" />

          </div>
        </div>
      </div>
    
  </div>
  </section>
  );
};

export default Banner;
