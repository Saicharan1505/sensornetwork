// components/LocationComparison.js
import React, { useState } from 'react';
import Header from './header';

const LocationComparison = () => {
  const [location1, setLocation1] = useState('Downtown Park');
  const [location2, setLocation2] = useState('University Campus');
  const [comparisonResult, setComparisonResult] = useState(null);

  const handleLocation1Change = (e) => {
    setLocation1(e.target.value);
  };

  const handleLocation2Change = (e) => {
    setLocation2(e.target.value);
  };

  const handleCompare = () => {
    // Dummy data for comparison results
    const results = {
      location1: {
        name: location1,
        temperature: '72°F',
        humidity: '45%',
        additionalData: 'Air Quality: Good',
      },
      location2: {
        name: location2,
        temperature: '68°F',
        humidity: '50%',
        additionalData: 'Air Quality: Moderate',
      },
    };
    setComparisonResult(results);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      {/* Header */}
      <Header />

      {/* Location Comparison Section */}
      <div style={{
        maxWidth: '800px',
        margin: '2em auto',
        padding: '2em',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}>
        <h2 style={{ marginBottom: '1.5em', fontWeight: 'bold' }}>Select Locations to Compare</h2>

        {/* Location Selection */}
        <div style={{ marginBottom: '1.5em' }}>
          <div style={{ marginBottom: '1em' }}>
            <label style={{ marginRight: '1em', fontWeight: 'bold' }}>Location 1:</label>
            <select value={location1} onChange={handleLocation1Change} style={{
              padding: '0.5em',
              borderRadius: '5px',
              border: '1px solid #cccccc',
            }}>
              <option>Downtown Park</option>
              <option>University Campus</option>
              <option>Residential Area</option>
              <option>Industrial Zone</option>
            </select>
          </div>
          <div style={{ marginBottom: '1em' }}>
            <label style={{ marginRight: '1em', fontWeight: 'bold' }}>Location 2:</label>
            <select value={location2} onChange={handleLocation2Change} style={{
              padding: '0.5em',
              borderRadius: '5px',
              border: '1px solid #cccccc',
            }}>
              <option>Downtown Park</option>
              <option>University Campus</option>
              <option>Residential Area</option>
              <option>Industrial Zone</option>
            </select>
          </div>
        </div>

        {/* Compare Button */}
        <button onClick={handleCompare} style={{
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          padding: '0.7em 1.5em',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background 0.3s',
        }}
          onMouseOver={(e) => e.target.style.background = '#0056b3'}
          onMouseOut={(e) => e.target.style.background = '#007BFF'}
        >
          Compare
        </button>

        {/* Comparison Result */}
        {comparisonResult && (
          <div style={{
            marginTop: '2em',
            padding: '1.5em',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            textAlign: 'left',
          }}>
            <h3 style={{ fontWeight: 'bold' }}>Comparison Results</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* Location 1 Details */}
              <div style={{ flex: 1, marginRight: '1em' }}>
                <h4 style={{ marginBottom: '0.5em' }}>{comparisonResult.location1.name}</h4>
                <p>Temperature: {comparisonResult.location1.temperature}</p>
                <p>Humidity: {comparisonResult.location1.humidity}</p>
                <p>Additional Data: {comparisonResult.location1.additionalData}</p>
              </div>

              {/* Location 2 Details */}
              <div style={{ flex: 1, marginLeft: '1em' }}>
                <h4 style={{ marginBottom: '0.5em' }}>{comparisonResult.location2.name}</h4>
                <p>Temperature: {comparisonResult.location2.temperature}</p>
                <p>Humidity: {comparisonResult.location2.humidity}</p>
                <p>Additional Data: {comparisonResult.location2.additionalData}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationComparison;
