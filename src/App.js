import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import LocationComparison from './components/LocationComparison';
import Sensors from './components/Sensors';
import HistoricalData from './components/HistoricalData';
import DownloadData from './components/DownloadData';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sensors" element={<Sensors />} />
      <Route path="/LocationComparison" element={<LocationComparison />} />
      <Route path="/HistoricalData" element={<HistoricalData />} />
      <Route path="/DownloadData" element={<DownloadData />} />
      {/* Add other routes as needed */}
    </Routes>
  );
}

export default App;
