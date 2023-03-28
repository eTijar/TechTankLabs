import "./Footer.css";
import Buttons from "../Buttons/Buttons";
import Footer_logo from "../../images/footer_logo.png";
import Instagram from "../../images/ig.png";
import Facebook from "../../images/fb.png";
import Twitter from "../../images/tw.png";
import LinkedIn from "../../images/linkedIn.png";
import { Link, useLocation } from "react-router-dom";
import { GridText } from "../Grids/Grids";

const Footer = (props) => {
  const location = useLocation();

  const topFooter ={
      title: "Get Started Today",
      subtitle:
        "If you're ready to meet your co-founders and start building your dream team, contact TTLabs today to learn more about our approach and how we can help you bring your vision to life.",
    };


  return (
    <div className="footer">
      {console.log(location.pathname)}

      {/* Get current Link Pathname and condition the view with it */}
      {location.pathname !== "/contact-us" && location.pathname !== "/about-us" ? 
        <div className={`footer_top blue`}>
          <GridText grid="grid" footer={true} data={topFooter}  />
          </div> : 
          <div className={`footer_top`}>
          <div>
            <p className="text">Join Our Community</p>
            <p className="small-text">
            Whether you're an experienced entrepreneur or just starting out, TTLabs has everything you need to build and grow a successful startup. Join our community today and start building the next big thing!
            </p>
            <Buttons
              buttontype="btn blue_btn footer-btn"
              value="Join Us"
              outlink="https://form.typeform.com/to/dCMuWNKR"
            />
          </div>
        </div>
      }
      <div>
        <div className="footer_bottom">
          <div className="logo">
          <img src={Footer_logo} className="footer_logo" alt="" />
          <p>Create the businesses of the future with us.</p>
            <div className="social">
            <a href=""><img src={Instagram} alt="" /></a>
            <a href=""><img src={Facebook} alt="" /></a>
            <a href=""><img src={Twitter} alt="" /></a>
            <a href=""><img src={LinkedIn} alt="" /></a>
            
            
            
            
            </div>
          </div>

          <div className="pages">
            <p className="footer_title">Pages</p>
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
          </div>
          <div className="contacts">
            <p className="footer_title">CONTACT INFORMATION</p>
            <p>Email:  contact@ttlabs.vc</p>
            <p>Phone: +2348022577950</p>
            <p>Address: Sirasso close, Wuse zone 7 Abuja</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
