// SortingVisualizer.js
import React, { useState } from 'react';
import Controls from './Controls';
import ArrayBar from './ArrayBar';
import bubbleSort from '../algorithms/bubbleSort';
import selectionSort from '../algorithms/selectionSort';
import mergeSort from '../algorithms/mergeSort';
import './SortingVisualizer.css'; 

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [arrayLength, setArrayLength] = useState(50);
  const [delay, setDelay] = useState(20);
  const [algorithm, setAlgorithm] = useState('Bubble Sort');
  const [sorting, setSorting] = useState(false);

  const startSorting = () => {
    setSorting(true);
    switch (algorithm) {
      case 'Bubble Sort':
        bubbleSortHelper();
        break;
      case 'Selection Sort':
        selectionSortHelper();
        break;
      case 'Merge Sort':
        mergeSortHelper();
        break;
      default:
        break;
    }
  };

  const bubbleSortHelper = () => {
    const sortedArray = bubbleSort(array.slice());
    animateSorting(sortedArray);
  };

  const selectionSortHelper = () => {
    const sortedArray = selectionSort(array.slice());
    animateSorting(sortedArray);
  };

  const mergeSortHelper = () => {
    const sortedArray = mergeSort(array.slice());
    animateSorting(sortedArray);
  };

  const animateSorting = (sortedArray) => {
    for (let i = 0; i < sortedArray.length; i++) {
      setTimeout(() => {
        setArray(sortedArray.slice(0, i + 1));
      }, i * delay);
    }
    setTimeout(() => {
      setSorting(false);
    }, sortedArray.length * delay);
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
      <div className="card">
        {array.map((value, idx) => (
          <ArrayBar key={idx} value={value} idx={idx} />
        ))}
      </div>
    </div>
  );
}

export default SortingVisualizer;
