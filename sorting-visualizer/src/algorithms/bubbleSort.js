// bubbleSort.js
function bubbleSort(array) {
    const steps = [array.slice()];
  
    const len = array.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (array[i] > array[i + 1]) {
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
          steps.push(array.slice());
        }
      }
    } while (swapped);
  
    return steps;
  }
  
  export default bubbleSort;
  