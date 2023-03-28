import "./Navbar.css";
import Logo from "../../images/logo.png";
import RightArrow from "../../images/arrow.png";
import Grid from "../../images/grid.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const [show, setShow] = useState(false);
  
  const linkClick = () => {
    show && setShow(false);
    console.log(show);
  };
  const imageClick = () => {
    show ? setShow(false) : setShow(true);
    console.log(show);
  };
  return (
    <div className="navbar" id="navbar">
      {(() => {
        if (matches) {
          return (
            <div className="navbar_content">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
              <div className="nav_links" >
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/services">How it works</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
                <div className="quote">
                  <a href="https://form.typeform.com/to/dCMuWNKR">Join Us</a>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="navbar_content">
              <Link to="/" onClick={() => linkClick()}>
                <img src={Logo} alt="" />
              </Link>
              <img
                src={Grid}
                className="dropdown"
                onClick={() => imageClick()}
                alt=""
              />
              <div className="nav_links" style={{ display: show && "block" }}>
                <ul>
                  <li>
                    <Link to="/" onClick={() => linkClick()}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" onClick={() => linkClick()}>
                    How it works
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" onClick={() => linkClick()}>
                    Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us" onClick={() => linkClick()}>
                      About Us
                    </Link>
                  </li>
                </ul>
                <div className="quote">
                  <a href="https://form.typeform.com/to/dCMuWNKR" onClick={() => linkClick()}>
                  Join Us
                  </a>
                </div>
                
              </div>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Navbar;
