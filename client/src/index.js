import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div className="LOGIN"> {/* Wrap App with a div and assign the class name LOGIN */}
      <App />
    </div>
  </React.StrictMode>
);

