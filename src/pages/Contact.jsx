import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
import thankyou from './../assets/thankyoupage.png'
const ContactPage = ({id}) => {
  return (
    <div className="bg-background" id={id}>
      <div className="container py-5">
        <div className="row py-5 g-3">
          <div className="col-md-6 first_col">
            <h1 className="text-center mt-3">Contact Us</h1>
            <form className="p-4 mt-5">
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Enter your Name</label>
                <input type="text" className="form-control" id="nameInput" />
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email ID</label>
                <input type="email" className="form-control" id="emailInput" />
              </div>
              <div className="mb-3">
                <label htmlFor="messageTextarea" className="form-label">Enter your message</label>
                <textarea className="form-control" id="messageTextarea" rows="3"></textarea>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">Send Now</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 sec_col">
            <img src={thankyou} alt="Thank You" className="img-fluid" />
          </div>
        </div>

        <div className="row-last">
          <div className="row row-cols-1 row-cols-md-3 p-3 text-white" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: '2rem', width: '100%', textAlign: 'center' }}>Campus ride</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
