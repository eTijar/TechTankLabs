import { Banner2 } from "../components/Banner/Banner";
import "../Styles/ContactUs.css";
import { ContactForm } from "../components/Form/Form";

const ContactUs = () => {
  return (
    <div className="contactus">
      <Banner2
        headerClass=""
        headerTextClass="banner-title"
        headingText="Contact Us"
        subtitle="Thank you for your interest in TTLabs! If you have any questions or comments, please feel free to get in touch with us. Here's how you can contact us:"
      />
      <div className="contact_container">
        <ContactForm />
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
