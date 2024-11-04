// components/HistoricalData.js
import React, { useState } from 'react';
import Header from './header';

const HistoricalData = () => {
  const [location, setLocation] = useState('Bloomington Park');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [historicalData, setHistoricalData] = useState(null);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleGetData = () => {
    if (!startDate || !endDate) {
      alert('Please enter both start and end dates.');
      return;
    }

    const formatDate = (dateStr) => {
      const [day, month, year] = dateStr.split('-');
      return new Date(`${year}-${month}-${day}`);
    };

    const start = formatDate(startDate);
    const end = formatDate(endDate);

    if (start > end) {
      alert('Start date cannot be after end date.');
      return;
    }

    const allData = [
      { date: '01-10-2024', temperature: '70°F', humidity: '40%' },
      { date: '02-10-2024', temperature: '72°F', humidity: '45%' },
      { date: '03-10-2024', temperature: '68°F', humidity: '50%' },
      { date: '25-10-2024', temperature: '73°F', humidity: '42%' },
      { date: '27-10-2024', temperature: '71°F', humidity: '43%' },
      { date: '30-10-2024', temperature: '69°F', humidity: '39%' },
    ];

    // Generate a list of all dates within the given range
    const dateList = [];
    let currentDate = new Date(start);
    while (currentDate <= end) {
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = currentDate.getFullYear();
      dateList.push(`${day}-${month}-${year}`);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Create historical data for all dates in the range, using real data if available or generating random values otherwise
    const filteredData = dateList.map((date) => {
      const existingData = allData.find((data) => data.date === date);
      if (existingData) {
        return existingData;
      } else {
        // Generate random temperature and humidity if no existing data is available
        const randomTemperature = `${Math.floor(Math.random() * 15) + 65}°F`; // Temperature between 65°F and 80°F
        const randomHumidity = `${Math.floor(Math.random() * 31) + 30}%`; // Humidity between 30% and 60%
        return {
          date,
          temperature: randomTemperature,
          humidity: randomHumidity,
        };
      }
    });

    setHistoricalData(filteredData);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      {/* Header */}
      <Header />

      {/* Location and Date Range Selection */}
      <div style={{
        maxWidth: '800px',
        margin: '2em auto',
        padding: '2em',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}>
        <h2 style={{ marginBottom: '1.5em', fontWeight: 'bold', color: '#007BFF' }}>Select Location and Date Range</h2>

        {/* Location Selection */}
        <div style={{ marginBottom: '1.5em' }}>
          <label style={{ marginRight: '1em', fontWeight: 'bold' }}>Location:</label>
          <select value={location} onChange={handleLocationChange} style={{
            padding: '0.5em',
            borderRadius: '5px',
            border: '1px solid #cccccc',
            width: '100%',
          }}>
            <option>Bloomington Park</option>
            <option>University Campus</option>
            <option>Residential Area</option>
            <option>Industrial Zone</option>
          </select>
        </div>

        {/* Date Range Selection */}
        <div style={{ marginBottom: '1em' }}>
          <label style={{ marginRight: '1em', fontWeight: 'bold' }}>Start Date:</label>
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
        <div style={{ marginBottom: '1.5em' }}>
          <label style={{ marginRight: '1em', fontWeight: 'bold' }}>End Date:</label>
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

        {/* Get Data Button */}
        <button onClick={handleGetData} style={{
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
          Get Data
        </button>
      </div>

      {/* Historical Data Chart */}
      {historicalData && historicalData.length > 0 && (
        <div style={{
          maxWidth: '800px',
          margin: '2em auto',
          padding: '2em',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}>
          <h2 style={{ marginBottom: '1.5em', fontWeight: 'bold', color: '#007BFF' }}>Historical Data Chart</h2>
          <p>Selected Location: {location}</p>
          <div style={{
            width: '100%',
            height: '300px',
            backgroundColor: '#d3d3d3',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
          }}>
            Chart Area (Temperature, Humidity, etc.)
          </div>

          {/* Historical Data Table */}
          <div style={{
            marginTop: '2em',
            textAlign: 'left',
            padding: '1em',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
          }}>
            <h3 style={{ fontWeight: 'bold' }}>Historical Data:</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#007BFF', color: 'white' }}>
                  <th style={{ padding: '0.5em', border: '1px solid #cccccc' }}>Date</th>
                  <th style={{ padding: '0.5em', border: '1px solid #cccccc' }}>Temperature</th>
                  <th style={{ padding: '0.5em', border: '1px solid #cccccc' }}>Humidity</th>
                </tr>
              </thead>
              <tbody>
                {historicalData.map((data, index) => (
                  <tr key={index}>
                    <td style={{ padding: '0.5em', border: '1px solid #cccccc' }}>{data.date}</td>
                    <td style={{ padding: '0.5em', border: '1px solid #cccccc' }}>{data.temperature}</td>
                    <td style={{ padding: '0.5em', border: '1px solid #cccccc' }}>{data.humidity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* No Data Message */}
      {historicalData && historicalData.length === 0 && (
        <div style={{
          maxWidth: '800px',
          margin: '2em auto',
          padding: '2em',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}>
          <p>No data available for the selected date range.</p>
        </div>
      )}
    </div>
  );
};

export default HistoricalData;
