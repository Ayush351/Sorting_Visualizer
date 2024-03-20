// mergeSort.js
async function mergeSort(array, start, end, steps = []) {
    if (start < end) {
      const middle = Math.floor((start + end) / 2);
      await mergeSort(array, start, middle, steps);
      await mergeSort(array, middle + 1, end, steps);
      await merge(array, start, middle, end, steps);
    }
    return steps;
  }
  
  async function merge(array, start, middle, end, steps) {
    const left = array.slice(start, middle + 1);
    const right = array.slice(middle + 1, end + 1);
    let leftIdx = 0,
      rightIdx = 0,
      arrayIdx = start;
  
    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] <= right[rightIdx]) {
        array[arrayIdx++] = left[leftIdx++];
      } else {
        array[arrayIdx++] = right[rightIdx++];
      }
      steps.push(array.slice()); // Push current state of array to steps
    }
  
    while (leftIdx < left.length) {
      array[arrayIdx++] = left[leftIdx++];
      steps.push(array.slice()); // Push current state of array to steps
    }
  
    while (rightIdx < right.length) {
      array[arrayIdx++] = right[rightIdx++];
      steps.push(array.slice()); // Push current state of array to steps
    }
  }
  
  export default mergeSort;
  