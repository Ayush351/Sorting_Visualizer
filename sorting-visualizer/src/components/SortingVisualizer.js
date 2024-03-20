// SortingVisualizer.js

import React, { useState } from 'react';
import Controls from './Controls';
import ArrayBar from './ArrayBar';
import bubbleSort from '../algorithms/bubbleSort';
import mergeSort from '../algorithms/mergeSort';
import '../styles/SortingVisualizer.css';

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [arrayLength, setArrayLength] = useState(50);
  const [delay, setDelay] = useState(20);
  const [algorithm, setAlgorithm] = useState('Bubble Sort');
  const [sorting, setSorting] = useState(false);

  const startSorting = async () => {
    setSorting(true);

    switch (algorithm) {
      case 'Bubble Sort':
        await animateSorting(bubbleSort(array.slice()));
        break;
      case 'Merge Sort':
        await animateSorting(mergeSort(array.slice()));
        break;
      default:
        break;
    }

    setSorting(false);
  };

  const animateSorting = async (steps) => {
    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      setArray(steps[i]);
    }
  };

  const generateRandomArray = () => {
    const newArray = [];
    for (let i = 0; i < arrayLength; i++) {
      newArray.push(randomIntFromInterval(10, 380));
    }
    setArray(newArray);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="sorting-visualizer">
      <Controls
        arrayLength={arrayLength}
        delay={delay}
        algorithm={algorithm}
        onArrayLengthChange={(e) => setArrayLength(parseInt(e.target.value))}
        onDelayChange={(e) => setDelay(parseInt(e.target.value))}
        onAlgorithmChange={(e) => setAlgorithm(e.target.value)}
        onGenerateArray={generateRandomArray}
        onStartSorting={startSorting}
        sorting={sorting}
      />
      <div className="array-container">
        {array.map((value, idx) => (
          <ArrayBar key={idx} value={value} idx={idx} />
        ))}
      </div>
    </div>
  );
}

export default SortingVisualizer;
