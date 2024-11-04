// components/DownloadData.js
import React, { useState } from 'react';
import Header from './header';

const DownloadData = () => {
  const [location, setLocation] = useState('Downtown Park');
  const [metric, setMetric] = useState('Temperature');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleMetricChange = (e) => {
    setMetric(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleDownload = () => {
    // Add your data download logic here
    alert(`Downloading data for ${location}, Metric: ${metric}, From ${startDate} to ${endDate}`);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      {/* Header */}
      <Header />

      {/* Download Data Form */}
      <div style={{
        maxWidth: '500px',
        margin: '2em auto',
        padding: '2em',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}>
        <h2 style={{ marginBottom: '1.5em', fontWeight: 'bold' }}>Download Data</h2>

        {/* Location Selection */}
        <div style={{ marginBottom: '1.5em' }}>
          <label style={{ marginBottom: '0.5em', display: 'block', fontWeight: 'bold' }}>Select Location:</label>
          <select value={location} onChange={handleLocationChange} style={{
            padding: '0.5em',
            borderRadius: '5px',
            border: '1px solid #cccccc',
            width: '100%',
          }}>
            <option>Downtown Park</option>
            <option>University Campus</option>
            <option>Residential Area</option>
            <option>Industrial Zone</option>
          </select>
        </div>

        {/* Metric Selection */}
        <div style={{ marginBottom: '1.5em' }}>
          <label style={{ marginBottom: '0.5em', display: 'block', fontWeight: 'bold' }}>Select Metric:</label>
          <select value={metric} onChange={handleMetricChange} style={{
            padding: '0.5em',
            borderRadius: '5px',
            border: '1px solid #cccccc',
            width: '100%',
          }}>
            <option>Temperature</option>
            <option>Humidity</option>
            <option>Air Quality</option>
          </select>
        </div>

        {/* Date Range Selection */}
        <div style={{ marginBottom: '1em' }}>
          <label style={{ marginBottom: '0.5em', display: 'block', fontWeight: 'bold' }}>Start Date:</label>
          <input
            type="text"
            placeholder="dd-mm-yyyy"
            value={startDate}
            onChange={handleStartDateChange}
            style={{
              padding: '0.5em',
              borderRadius: '5px',
              border: '1px solid #cccccc',
              width: '100%',
              marginBottom: '1em'
            }}
          />
        </div>
        <div style={{ marginBottom: '1em' }}>
          <label style={{ marginBottom: '0.5em', display: 'block', fontWeight: 'bold' }}>End Date:</label>
          <input
            type="text"
            placeholder="dd-mm-yyyy"
            value={endDate}
            onChange={handleEndDateChange}
            style={{
              padding: '0.5em',
              borderRadius: '5px',
              border: '1px solid #cccccc',
              width: '100%',
              marginBottom: '1em'
            }}
          />
        </div>

        {/* Download Button */}
        <button onClick={handleDownload} style={{
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          padding: '0.7em 1.5em',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background 0.3s',
          width: '100%',
        }}
          onMouseOver={(e) => e.target.style.background = '#0056b3'}
          onMouseOut={(e) => e.target.style.background = '#007BFF'}
        >
          Download Data
        </button>
      </div>
    </div>
  );
};

export default DownloadData;
