// ArrayBar.js
import React from 'react';

function ArrayBar({ value }) {
  return (
    <div className="array-bar" style={{ height: `${value}px` }}></div>
  );
}

export default ArrayBar;
