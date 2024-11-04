// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Create a root element
const container = document.getElementById('root');
const root = createRoot(container);

// Use createRoot to render the app
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
