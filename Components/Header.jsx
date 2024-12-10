import React from "react";
import {BiMenu} from "react-icons/bi";

const Header = ({address, setAddress, connectWallet}) => {
  const menuList = [
    {
      menu: "Home",
      link: "#",
    },
    {
      menu: "Service",
      link: "#service",
    },
    {
      menu: "About",
      link: "#about",
    },
    {
      menu: "Token",
      link: "#token",
    },
   
    {
      menu: "Contact",
      link: "#contact",
    },
    
  ];
  return ( 
  <header className="header_wrap fixed-top">
    <div className="container-fluid">
         <nav className="navbar navbar-expand-lg">
          <a href="#home_section" data-animation="fadeInDown" data-animation-delay="1s" 
          className="navbar-brand page-scroll animation">
            <img src="assets/images/logo2.png" alt="IPO->ICO" className="logo_light" style={{ width: '300px', height: 'auto' }}  />
            <img src="assets/images/logo_dark.png" alt="logo" className="logo_dark" />
          </a>
          <button className="navbar-toggler animation"
           type="button"
           data-toggle="collapse"
           data-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent"
           aria-expanded="false"
           aria-label="Toggle navigation"
           data-animation="fadeInDown"
           data-animation-delay="1.1s"
          > <BiMenu/>

          </button>
          <div className="collapse navbar-collapse"
          id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              {
                menuList.map((menu, i) => (
                  <li className="animation"
                  key={i + 1}
                  data-animation="fadeInDown"
                  data-animation-delay={`1.${i + 1}s`}
                  >
                    <a href={menu.link} className="nav-link">
                      {menu.menu}
                    </a>

                  </li>
                ))
              }
            </ul>
            <ul className="navbar-nav nav_btn align-items-center">
                <li className="animation"
                data-animation="fadeInDown"
                data-animation-delay="2s"
                style={{ color: 'black', fontWeight: 'bold' }}
                >
                  {
                    address ? (
                      <a className="btn btn-default btn-radius nav-item">
                      <small className="new-color"  style={{ color: 'black', fontWeight: 'bold' }}>
                      {""}
                      {address.slice(0,10)}...
                      </small>
                  </a>
                    ) : (
                      <a onClick={() => connectWallet()} className="btn btn-default btn-radius nav-item">
                          <small className="new-color"  style={{ color: 'black', fontWeight: 'bold' }}>
                          {""}
                          Connect
                          </small>
                      </a>
                    )
                  }

                </li>
            </ul>

          </div>
         </nav>
    </div>
  </header>
  );
};

export default Header;
