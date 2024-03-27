async function selectionSort(array, updateCounts) {
  let comparisons = 0;
  let swaps = 0;
  const steps = [];

  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      comparisons++;
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swaps++;
      [array[i], array[minIndex]] = [array[minIndex], array[i]]; // Swap elements
      steps.push(array.slice()); // Push current state of array to steps
    }
  }

  updateCounts(comparisons, swaps);
  return steps;
}

export default selectionSort;
