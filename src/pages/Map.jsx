import React, { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './LocationAccess.css';
import loc from './../assets/compass.png';
import { StyledSubTitle,colors } from '../components/Styles';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});
const getCurrentTimeWithinRange = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  if (hours < 6) {
    return '06:00';
  } else if (hours >= 18) {
    return '18:00';
  } else {
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }
};

const LocationAccess = ({id}) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState(null);
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [numPassengers, setNumPassengers] = useState(1);
  const [error, setError] = useState(null);
  const [timeError, setTimeError] = useState('');
  const [destinationCoordinates, setDestinationCoordinates] = useState(null);
  const [scheduleDate, setScheduleDate] = useState(new Date().toISOString().split('T')[0]);
  const [scheduleTime, setScheduleTime] = useState(getCurrentTimeWithinRange());

  const fetchAddress = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      if (data && data.display_name) {
        setPickupLocation(data.display_name);
      } else {
        setPickupLocation('Address not found');
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      setPickupLocation('Error fetching address');
    }
  };

  const fetchDestinationCoordinates = async (address) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      );
      const data = await response.json();
      if (data && data[0]) {
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
      }
      return null;
    } catch (error) {
      console.error('Error fetching destination coordinates:', error);
      return null;
    }
  };

  const handleLocationAccess = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation([latitude, longitude]);
          fetchAddress(latitude, longitude);
        },
        (err) => setError(err.message)
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    handleLocationAccess();
  }, []);

  const handlePassengerChange = (e) => {
    setNumPassengers(e.target.value);
  };

  const handleDestinationChange = async (e) => {
    const newDestination = e.target.value;
    setDestination(newDestination);

    const coordinates = await fetchDestinationCoordinates(newDestination);
    if (coordinates) {
      setDestinationCoordinates(coordinates);
    }
  };

  const handleDateChange = (e) => {
    setScheduleDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setScheduleTime(selectedTime);
    const [hours] = selectedTime.split(':').map(Number);

    if (hours < 6 || hours >= 18) {
      setTimeError('No service at this time. Please select a time between 6 AM and 6 PM.');
    } else {
      setTimeError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (timeError) {
      console.log('Error:', timeError);
      return;
    }
    const requestData = {
      pickupLocation,
      destination,
      numPassengers,
      scheduleDate,
      scheduleTime,
      destinationCoordinates,
    };
    console.log('Submitting data:', {
      pickupLocation,
      destination,
      numPassengers,
      scheduleDate,
      scheduleTime,
      destinationCoordinates,
    });
    navigate('/thank-you', { state: { requestData, status: 'Waiting for a bus' } });
  };

  return (
    <div>
    <StyledSubTitle color={colors.dark1} style={{fontSize:"20px",fontWeight:"bold"}}>We provide reliable and efficient transportation services to your desired destination. Please provide your pick-up location, destination, and the number of passengers. You can also schedule your ride for a specific date and time. Our service operates between 6 AM and 6 PM. Thank you for choosing us!
      </StyledSubTitle>
    <div className="location-access-container" id={id}>
      
      <div className="pickup-details">
        <h2>Pickup Details</h2>
        <div className="input-field">
          <label>
            Pick-Up Location:
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
        type="text"
        value={pickupLocation}
        onChange={(e) => setPickupLocation(e.target.value)} 
        style={{ marginLeft: '10px', width: '250px' }}
      />
              <button onClick={handleLocationAccess} className="btn1" style={{ marginLeft: '10px' ,width:'50px'}}>
                <img src={loc} alt="image" style={{width:'30px'}}/>
              </button>
            </div>
          </label>
        </div>
        <div className="input-field">
          <label>
            Destination:
            <input
              type="text"
              value={destination}
              onChange={handleDestinationChange}
              style={{ marginLeft: '10px', width: '250px' }}
            />
          </label>
        </div>
        <div className="input-field">
          <label>
            Number of Passengers:
            <input
              type="number"
              min="1"
              max="10"
              value={numPassengers}
              onChange={handlePassengerChange}
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <div className="input-field">
          <label>
            Schedule Date:
            <input
              type="date"
              value={scheduleDate}
              onChange={handleDateChange}
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <div className="input-field">
          <label>
            Schedule Time (6 AM to 6 PM):
            <input
              type="time"
              min="06:00"
              max="18:00"
              value={scheduleTime}
              onChange={handleTimeChange}
              style={{ marginLeft: '10px' }}
            />
          </label>
          {timeError && <p style={{ color: 'red' }}>{timeError}</p>}
        </div>
        <button onClick={handleSubmit} className="btn1">Submit</button>
      </div>

      <div className="map-container">
        {location ? (
          <MapContainer
            center={location}
            zoom={13}
            className="map"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {location && (
              <Marker position={location}>
                <Popup>{pickupLocation || 'Your Pickup Location'}</Popup>
              </Marker>
            )}
            {destinationCoordinates && (
              <Marker position={destinationCoordinates}>
                <Popup>{destination}</Popup>
              </Marker>
            )}
          </MapContainer>
        ) : (
          <p>{error || 'Please enable location services to see the map.'}</p>
        )}
      </div>
    </div>
    </div>
  );
};
export default LocationAccess;



