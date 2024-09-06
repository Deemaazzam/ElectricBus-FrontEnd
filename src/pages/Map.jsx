import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './LocationAccess.css';

// Fix for marker icon in Leaflet (since default icons won't load)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationAccess = () => {
  const [location, setLocation] = useState(null);
  const [pickupLocation, setPickupLocation] = useState(null);
  const [destination, setDestination] = useState('');
  const [numPassengers, setNumPassengers] = useState(1);
  const [error, setError] = useState(null);
  const [destinationCoordinates, setDestinationCoordinates] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting data:', {
      pickupLocation,
      destination,
      numPassengers,
      destinationCoordinates,
    });
  };

  return (
    <div className="location-access-container">
      <div className="pickup-details">
        <h2>Pickup Details</h2>
        <button onClick={handleLocationAccess} className="btn1">
          {location ? 'Location Enabled' : 'Enable Location'}
        </button>
        <div className="input-field">
          <label>
            Pick-Up Location:
            {pickupLocation ? (
              <input
                type="text"
                value={pickupLocation}
                readOnly
                style={{ marginLeft: '10px', width: '250px' }}
              />
            ) : (
              <span> Waiting for location...</span>
            )}
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
        <button onClick={handleSubmit} className='btn1'>Submit</button>
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
  );
};

export default LocationAccess;



