// heapSort.js
async function heapSort(array, steps = []) {
    const length = array.length;
  
    // Build max heap
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
      await heapify(array, length, i, steps);
    }
  
    // Heap sort
    for (let i = length - 1; i > 0; i--) {
      [array[0], array[i]] = [array[i], array[0]]; // Swap elements
      steps.push(array.slice()); // Push current state of array to steps
      await heapify(array, i, 0, steps);
    }
  
    return steps;
  }
  
  async function heapify(array, length, i, steps) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    if (left < length && array[left] > array[largest]) {
      largest = left;
    }
  
    if (right < length && array[right] > array[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      [array[i], array[largest]] = [array[largest], array[i]]; // Swap elements
      steps.push(array.slice()); // Push current state of array to steps
      await heapify(array, length, largest, steps);
    }
  }
  
  export default heapSort;
  