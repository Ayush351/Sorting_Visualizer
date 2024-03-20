// Controls.js
import React from 'react';

function Controls({ arrayLength, delay, algorithm, onArrayLengthChange, onDelayChange, onAlgorithmChange, onGenerateArray, onStartSorting, sorting }) {
  return (
    <div className="controls">
      <label>Array Length:</label>
      <input type="range" min="5" max="100" value={arrayLength} onChange={onArrayLengthChange} />
      <label>Delay (ms):</label>
      <input type="range" min="1" max="100" value={delay} onChange={onDelayChange} />
      <label>Algorithm:</label>
      <select value={algorithm} onChange={onAlgorithmChange}>
        <option value="Bubble Sort">Bubble Sort</option>
        <option value="Selection Sort">Selection Sort</option>
        <option value="Merge Sort">Merge Sort</option>
        <option value="Quick Sort">Quick Sort</option>
        <option value="Heap Sort">Heap Sort</option>
        <option value="Insertion Sort">Insertion Sort</option>
        <option value="Counting Sort">Counting Sort</option>
        <option value="Radix Sort">Radix Sort</option>


      </select>
      <button onClick={onGenerateArray}>Generate Array</button>
      <button onClick={onStartSorting} disabled={sorting}>Start Sorting</button>
    </div>
  );
}

export default Controls;