import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../index.css'; // Custom CSS for special design
import thankyou from'./../assets/thankyoupage.png';
const ThankYouPage = () => {
  const [status, setStatus] = useState('Waiting for a bus');
  const [statusError, setStatusError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/get-ride-status');
        const data = await response.json();
        if (data.status) {
          setStatus(data.status);
        }
      } catch (error) {
        setStatusError('Error fetching status');
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 30000); // Poll every 30 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="thank-you-page">
      <div className="thank-you-content">
      <div className="illustration">
          <img src={thankyou} alt="Thank You" />
        </div>
        <div className="header">
          <h1>Thank You!</h1>
          <p>Your request has been successfully submitted.</p>
        </div>
        
        <div className="status-container">
          <h2>Status: {status}</h2>
          {statusError && <p className="error">{statusError}</p>}
        </div>
      
        <Link to="/" className="return-home-button">Return to Home</Link>
      </div>
    </div>
  );
};

export default ThankYouPage;

