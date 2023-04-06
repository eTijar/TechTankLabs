import { useEffect, useState } from "react";
import "./Form.css";
import Airtable from "airtable";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";



const formSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required")
});


export const ContactForm = () => {
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/moqzkejw",
      data: values
    })
      .then(response => {
        console.log(values)
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, `Thanks, message sent successfully!`);
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, `Please fill in valid details`);
      });
  };


  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}

      >
        {({ isSubmitting }) => (

          <Form id="fs-frm" noValidate className="form">

            <p className="form_header">Send us a message.</p>
            <div>
              <label htmlFor="name">Name:</label>
              <Field id="name" type="text" name="name" />
              <ErrorMessage name="name" className="errorMsg" component="p" />

            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field id="email" type="email" name="email" />
              <ErrorMessage name="email" className="errorMsg" component="p" />

            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <Field id="message" name="message" component="textarea" />
              <ErrorMessage name="message" className="errorMsg" component="p" />

            </div>
            <button type="submit" disabled={isSubmitting} className="btn brown_btn"><p>SEND MESSAGE</p></button>


            {serverState && (
              <div id="popup_message">
                <div className="popup_message">
                  <p>Thank you for contacting us, your message has been sent successfully.</p>
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}




export const WaitList = () => {

  let Base_id = 'appr2fKF77qI95I1Z'
  let Api_key = 'keyAs1krG80fTzo0c'

  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: Api_key
  });

  const Base = Airtable.base(Base_id)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)



  const submit = (e) => {
    e.preventDefault();
    Base('Waitlist').create(
      { email: email },
      { typecast: true },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        setEmail("")
        console.log("Message sent successfully");
        setSubmitted(true)
      });

  }
  return (
    <form className="waitlist_form" id="waitlist_form" onSubmit={submit}>
      <input type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
        className="input_email" id="waitlist_email" placeholder="Enter your email address" required />

      <button type="submit" className="brown_btn btn"><p>Join our newsletter</p></button>
      {submitted &&
        <div id="popup_message">
          <div className="popup_message">
            <p>Your details has been added to our newsletter.</p>
          </div>
        </div>
      }

    </form>
  );
};

