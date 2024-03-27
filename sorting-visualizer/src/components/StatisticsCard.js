// StatisticsCard.js
import React from 'react';
import '../styles/StatisticsCard.css';

function StatisticsCard({ comparisonCount, swapCount }) {
  return (
    <div className="statistics-card">
      <h2>Statistics</h2>
      <p>Comparison Count: {comparisonCount}</p>
      <p>Swap Count: {swapCount}</p>
    </div>
  );
}

export default StatisticsCard;
