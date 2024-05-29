import React from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.scss';


function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "07705d2a-83b3-4418-ac14-cccacbd29ee0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
  <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="titleContainer">
              <h4 className="title">Contact Us</h4>
            </div>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <div className="float-start">
                    <label className="body" htmlFor="name">Name</label>
                  </div>
                  <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                    />
                </div>
                <br></br>
                <div className="form-group">
                  <div className="float-start">
                    <label className="body" htmlFor="email">Email</label>
                  </div>
                  <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                </div>
                <br></br>
                <div className="form-group">
                  <div className="float-start">
                    <label className="body" htmlFor="message">Message</label>
                  </div>
                  <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      required
                  ></textarea>
                </div>
                <div className="buttonContainer">
                  <button type="submit" className="button">Send</button>
                </div>                
              </form>
              <div id="result" className="mt-3">{result}</div>
        </div>
      </div>
  </div>

  );
}

export default Contact;