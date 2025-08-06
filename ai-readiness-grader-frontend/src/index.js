import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18's createRoot
import './index.css'; // This imports your Tailwind CSS
import App from './App'; // Import your main App component

// Get the root element from your public/index.html
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render your App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
