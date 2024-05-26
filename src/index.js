// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MatchApp from './MatchApp.jsx'; // Changed from App to MatchApp
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MatchApp />
    </React.StrictMode>
);

reportWebVitals();