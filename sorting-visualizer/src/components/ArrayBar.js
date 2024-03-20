// ArrayBar.js
import React from 'react';
import '../styles/ArrayBar.css';

function ArrayBar({ value, idx, max }) {
  const height = `${(value / max) * 90}%`; // Adjust the height based on the maximum value
  const barStyle = {
    height: height,
    backgroundColor: `rgba(8, 49, 68, ${value / max})`, // Adjust color based on value
  };

  return <div className="array-bar" style={barStyle}></div>;
}

export default ArrayBar;
