import React, { useState } from 'react';

const LandingPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [locationAccess, setLocationAccess] = useState(null);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLocationAccess = (access) => {
    setLocationAccess(access);
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

      {/* Main App Layout (Header, Navbar, Map View) */}
      {locationAccess !== null && (
        <>
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1em',
            backgroundColor: '#000000',
            color: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            position: 'relative',
          }}>
            {/* Navbar Button */}
            <button onClick={toggleNavbar} style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '2em',
              cursor: 'pointer',
              position: 'absolute',
              left: '1em',
            }}>
              &#9776; {/* Hamburger icon */}
            </button>

            {/* Logo and App Title (Centered) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}>
              <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Beat the Heat</div>
            </div>

            {/* Search Bar */}
            <div style={{
              position: 'absolute',
              right: '1em',
            }}>
              <input
                type="text"
                placeholder="Search..."
                style={{
                  padding: '0.7em',
                  borderRadius: '10px',
                  border: '2px solid #007BFF',
                  outline: 'none',
                  fontSize: '1em',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
          </div>

          {/* Navbar Options */}
          {isNavOpen && (
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              top: '4em',
              left: '1em',
              backgroundColor: '#000000',
              padding: '1em',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              zIndex: '100',
            }}>
              {['Sensors', 'Views', 'Location Comparison', 'Historical Data', 'Settings', 'Help/Info', 'Download Data', 'Home'].map((item, index) => (
                <button key={index} style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  textAlign: 'left',
                  fontWeight: 'bold',
                  marginBottom: '0.5em',
                  padding: '0.5em',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                }}
                  onMouseOver={(e) => e.target.style.background = '#333'}
                  onMouseOut={(e) => e.target.style.background = 'none'}
                >
                  {item}
                </button>
              ))}
            </nav>
          )}

          {/* Map View */}
          <div style={{
            marginTop: '3em',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '85%',
            height: '60vh',
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
