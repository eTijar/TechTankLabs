import { useState } from "react";
import "./Form.css";
import Airtable from "airtable";







export const ContactForm = () => {

  let Base_id = 'appukcVCTvv9xgSow'
  let Api_key = 'pat5sQQbL14VS7abb.8cf7742ad1f46b0d3c7ef60e4891e1d51291ad5131c9fab7150b1f5f15bc6caf'

  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: Api_key
  });

  const Base = Airtable.base(Base_id)

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  })
  
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };


  const submit = (e) => {
    e.preventDefault();
    Base('Contact').create(
      contact,
      { typecast: true },
      (err, record) => {
        err && 
          console.error(err)
          return;
          },
      )};

  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          value={contact.name}
          onChange={handleChange}
          placeholder="Name"
          type="text"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          value={contact.email}
          onChange={handleChange}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          value={contact.message}
          onChange={handleChange}
          placeholder="Message"
          name="message"
          required
        />
      </div>
      <button type="submit">
        <p>Send message</p>
      </button>
    </form>
  );
};

