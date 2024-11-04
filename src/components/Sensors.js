// components/SensorsPage.js
import React from 'react';
import Header from './header';

const Sensors = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', height: '100vh' }}>
      <Header />

      {/* Sensor Information */}
      <div style={{
        padding: '2em',
        textAlign: 'center',
      }}>
        <h2 style={{ fontWeight: 'bold' }}>Available Sensors</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          marginTop: '2em',
        }}>
          {[1, 2, 3, 4].map((sensor, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '1.5em',
              borderRadius: '10px',
              width: '20%',
              margin: '1em',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
              <h3 style={{ fontWeight: 'bold' }}>Sensor {sensor}</h3>
              <p>Location: {sensor === 2 ? 'University Campus' : sensor === 4 ? 'Industrial Zone' : 'Downtown Park'}</p>
              <p>Status: <span style={{ color: sensor === 2 ? 'red' : 'green' }}>{sensor === 2 ? 'Offline' : 'Online'}</span></p>
              <p>Last Updated: 2024-10-23 12:45 PM</p>
              <p>Temperature: {sensor === 2 ? 'N/A' : '72°F'}</p>
              <p>Humidity: {sensor === 2 ? 'N/A' : '45%'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sensors;
