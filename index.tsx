import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// FIX: Extend the Window interface to include dataLayer for Google Analytics.
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize Google Analytics
if (process.env.GA_MEASUREMENT_ID) {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', process.env.GA_MEASUREMENT_ID);
}


// Register Service Worker for PWA capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/public/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);