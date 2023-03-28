import { Banner2} from "../components/Banner/Banner";
import "../Styles/ContactUs.css";
import WhatsApp from "../images/WhatsApp.png";
import {Form} from "../components/Form/Form";

const ContactUs = () => {
  return (
    <div className="contactus">
       <Banner2
            headerClass=""
            headerTextClass="banner-title"
            headingText="How it Works"
            subtitle="At TTLabs, we believe that building a successful startup requires a strong team with diverse skills and perspectives. That's why we're dedicated to helping aspiring entrepreneurs meet their co-founders and build the teams they need to succeed."
          />
      <div className="contact_container">
          <Form />
          <div className="contact_details">
              <p className="title"> Contact details </p>
            <div className="">
              <p className="text">Email Address</p>
              <p className="title"> contact@ttlabs.vc</p>
            </div>
            <div className="">
              <p className="text">Phone Number</p>
              <p className="title">+2348022577950</p>
            </div>
            <div className="">
              <p className="text">Address</p>
              <p className="title">Sirasso close, Wuse zone 7 Abuja</p>
            </div>

          </div>
      </div>
    </div>
  );
};

export default ContactUs;
