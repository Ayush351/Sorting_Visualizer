// insertionSort.js
async function insertionSort(array, steps = []) {
    const length = array.length;
    for (let i = 1; i < length; i++) {
      let key = array[i];
      let j = i - 1;
  
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }
  
      array[j + 1] = key;
  
      steps.push(array.slice()); // Push current state of array to steps
    }
    return steps;
  }
  
  export default insertionSort;
  