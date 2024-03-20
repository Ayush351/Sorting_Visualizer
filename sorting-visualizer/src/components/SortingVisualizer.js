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
  
    let steps = [];
    switch (algorithm) {
      case 'Bubble Sort':
        steps = await bubbleSort(array.slice());
        break;
      case 'Merge Sort':
        steps = await mergeSort(array.slice(), 0, array.length - 1, []);
        break;
      default:
        break;
    }
  
    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      setArray(steps[i]);
    }
  
    setSorting(false);
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
