// quickSort.js
async function quickSort(array, low, high, steps = []) {
    if (low < high) {
      const partitionIndex = await partition(array, low, high, steps);
      await quickSort(array, low, partitionIndex - 1, steps);
      await quickSort(array, partitionIndex + 1, high, steps);
    }
    return steps;
  }
  
  async function partition(array, low, high, steps) {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        steps.push(array.slice()); // Push current state of array to steps
      }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]]; // Swap elements
    steps.push(array.slice()); // Push current state of array to steps
    return i + 1;
  }
  
  export default quickSort;
  