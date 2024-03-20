// selectionSort.js
async function selectionSort(array, steps = []) {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]]; // Swap elements
        steps.push(array.slice()); // Push current state of array to steps
      }
    }
    return steps;
  }
  
  export default selectionSort;
  