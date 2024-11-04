// LandingPage.js
import React, { useState, useEffect } from 'react';
import Header from './components/header';

const LandingPage = () => {
  const [locationAccess, setLocationAccess] = useState(null);

  useEffect(() => {
    // Check if the user has already responded to the location access prompt
    const accessGiven = sessionStorage.getItem('locationAccess');
    const fromHome = sessionStorage.getItem('fromHome');

    if (accessGiven && fromHome === 'true') {
      setLocationAccess(accessGiven === 'true');
    } else {
      // Remove the 'fromHome' indicator if not coming from Home button
      sessionStorage.removeItem('fromHome');
    }
  }, []);

  const handleLocationAccess = (access) => {
    setLocationAccess(access);
    // Store user's response in sessionStorage
    sessionStorage.setItem('locationAccess', access);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', height: '100vh' }}>
      {/* Location Access Prompt */}
      {locationAccess === null && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '2em',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '1.2em', marginBottom: '1em' }}>
            Allow access to your location?
          </p>
          <button onClick={() => handleLocationAccess(true)} style={{
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            padding: '0.7em 1.5em',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '1em',
            transition: 'background 0.3s',
          }}
            onMouseOver={(e) => e.target.style.background = '#0056b3'}
            onMouseOut={(e) => e.target.style.background = '#007BFF'}
          >
            Yes
          </button>
          <button onClick={() => handleLocationAccess(false)} style={{
            backgroundColor: '#FF0000',
            color: 'white',
            border: 'none',
            padding: '0.7em 1.5em',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
            onMouseOver={(e) => e.target.style.background = '#b30000'}
            onMouseOut={(e) => e.target.style.background = '#FF0000'}
          >
            No
          </button>
        </div>
      )}

      {/* Main App Layout */}
      {locationAccess !== null && (
        <>
          <Header />
          {/* Map View */}
          <div style={{
            marginTop: '1em',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '95%',
            height: 'calc(100% - 100px)', // Make the map occupy all remaining space except header
            backgroundColor: '#d3d3d3',
            borderRadius: '15px',
            textAlign: 'center',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}>
            <span style={{ fontSize: '1.2em', color: '#333' }}>
              {/* Map content changes based on location access */}
              {locationAccess ? (
                <>
                  Nearest buildings and sensors<br />
                  (showing data based on your current location)
                </>
              ) : (
                <>
                  Zoomed out map view<br />
                  (shows a broader geographic area, e.g., entire city of Bloomington with sensors)
                </>
              )}
            </span>
            {/* Vertical Zoom In/Out Buttons */}
            <div style={{ position: 'absolute', right: '20px', bottom: '20px', display: 'flex', flexDirection: 'column' }}>
              <button style={{
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                fontSize: '1.5em',
                cursor: 'pointer',
                marginBottom: '10px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s',
              }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >+</button>
              <button style={{
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                fontSize: '1.5em',
                cursor: 'pointer',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s',
              }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >-</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
