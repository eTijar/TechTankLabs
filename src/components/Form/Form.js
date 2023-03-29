import { useEffect, useState } from "react";
import "./Form.css";
import Buttons from "../Buttons/Buttons";
import Airtable from "airtable";
// import { useForm, ValidationError } from '@formspree/react';

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
    setServerState({ok, msg});
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xnqrpqqq",
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
            initialValues={{name: "", email: "", message: "" }}
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
      <button type="submit"  disabled={isSubmitting} className="btn brown_btn"><p>SEND MESSAGE</p></button>
                 
      {serverState && (
       
        <p className={"submitted"}>
                    {serverState.msg}
                  </p>
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
const [email, setEmail]= useState('')

  

  const submit = (e) => {
    e.preventDefault();
    Base('Waitlist').create(
     { email: email},
        { typecast: true },
        function(err, record) {
          if (err) {
            console.error(err);
            console.error('waitlist error');
            return;
          }
          setEmail("")
          console.log("Message sent successfully");
        });
       
  }
  return (
    <form class="waitlist_form" id="waitlist_form"  onSubmit={submit}>
    <input type="email"
     value={email}
      onChange={(e)=>{setEmail(e.target.value)}} 
      class="input_email" id="waitlist_email" placeholder="Enter your email address" required />

      <button type="submit" className="brown_btn btn"><p>Join our newsletter</p></button>

  </form>
  );
};


// Conatct form to Airtable 
// export const Forms = () => {

//   let Base_id = 'appK0T3mZuyHfCuS8'
//   let Api_key = 'keyyBMdpMqSd9yeAs'
  
// Airtable.configure({
//   endpointUrl: 'https://api.airtable.com',
//   apiKey: Api_key
// });

// const Base = Airtable.base(Base_id)
  
//   const [toSend, setToSend] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
  

//   const submit = (e) => {
//     e.preventDefault();
//     Base('Contact').create(
//       toSend,
//         { typecast: true } ,
//         function(err, record) {
//           if (err) {
//             console.error(err);
//             return;
//           }
//           setToSend({
//             name: "",
//             email: "",
//             message: ""
//           })
//           console.log("Message sent successfully");
//         });
       
//   }

//   const handleChange = (e) => {
//     setToSend({ ...toSend, [e.target.name]: e.target.value });
//   };
//   return (
//     <>       

//     <form onSubmit={submit} className="form">
      
//       <p className="form_header">Send us a message.</p>
//       <div>
//         <label htmlFor="name">Name</label>
//         <input
//           value={toSend.name}
//           onChange={handleChange}
//           placeholder="Name"
//           type="text"
//           name="name"
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           value={toSend.email}
//           onChange={handleChange}
//           placeholder="Email address"
//           type="email"
//           name="email"
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="message">Message</label>
//         <textarea
//           value={toSend.message}
//           onChange={handleChange}
//           placeholder="Message"
//           name="message"
//           required
//         />
//       </div>
//       <button type="submit" className="btn brown_btn">SEND MESSAGE</button>
//     </form>
//     </>
//   );
// };


// Conatct form to formspree 
// export const Form = () => {
//   const [state, handleSubmit] = useForm("xnqrpqqq");
//   const [reset, setReset] = useState(false);
//   const [toSend, setToSend] = useState({
//     name: "",
//     email: "",
//     message: "",
//   }); 
//   const [toClear, setToClear] = useState({
//     name: "",
//     email: "",
//     message: "",
//   }); 
 

//   const clean = () => {
//     setToClear({name: "",
//     email: "",
//     message: "" });
//   };

//   const handleChange = (e) => {
//     setToSend({ ...toSend, [e.target.name]: e.target.value });
//   };

//   state.succeeded && setReset(true)

//   reset && clean()
//   return (
//     <>       
  
//     <form onSubmit={handleSubmit} className="form">
      
//       <p className="form_header">Send us a message.</p>
//       <div>
//         <label htmlFor="name">Name</label>
//         <input
//           // value={toSend.name}
//           onChange={handleChange}
//           placeholder="Name"
//           type="text"
//           name="name"
//           required
//         />
//          <ValidationError 
//         prefix="name" 
//         field="text"
//         errors={state.errors}
//       />
//       </div>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           value={toClear.email}
//           onChange={handleChange}
//           placeholder="Email address"
//           type="email"
//           name="email"
//           required
//         />
//          <ValidationError 
//         prefix="email" 
//         field="email"
//         errors={state.errors}
//       />
//       </div>

//       <div>
//         <label htmlFor="message">Message</label>
//         <textarea
//           // value={toSend.message}
//           onChange={handleChange}
//           placeholder="Message"
//           name="message"
//           required
//         />
//         <ValidationError 
//         prefix="Message" 
//         field="message"
//         errors={state.errors}
//       />
//       </div>
//       <button type="submit" className="btn brown_btn"><p>SEND MESSAGE</p></button>
//     </form>
//     </>
//   );
// }


