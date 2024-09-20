import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define the custom marker
const customMarker = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationUpdater = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, 15); // Set the map view to the user's location
    }
  }, [position, map]);

  return null;
};

const BusDriverMap = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  const campusCenter = [33.8880, 35.4933]; // Center of the campus
  const shortestPath = [
    [33.824740,35.521694],
    [33.824767,35.523249], // Start point
    [33.825386,35.524102],
   // Intermediate point
    [33.828515,35.524752], 
    [33.828394,35.524306],
   // End point
  ];

  const pickUpLocations = [
    { id: 1, position: [33.825092,35.521045], name: 'Pick-Up 1' }, 
    { id: 2, position: [33.825926,35.523337], name: 'Pick-Up 2' },
    { id: 3, position: [33.828247,35.524196], name: 'Pick-Up 3' },
  ];

  return (
    <div style={{ height: '90vh', width: '90%', position: 'relative' }}>
      <div style={{ height: '100%' }}>
        <MapContainer 
          center={currentLocation || [33.9000, 35.5000]} // Fallback to default if location is not available yet
          zoom={15} 
          style={{ height: '100%', width: '100%' }} 
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Polyline 
            positions={shortestPath} 
            color="red"        
            weight={5}         
            opacity={0.7}     
          />
          {pickUpLocations.map((location) => (
            <Marker key={location.id} position={location.position} icon={customMarker} />
          ))}
          {currentLocation && (
            <Marker position={currentLocation} icon={customMarker}>
             
            </Marker>
          )}
          <LocationUpdater position={currentLocation} />
        </MapContainer>
      </div>
    </div>
  );
};

export default BusDriverMap;




