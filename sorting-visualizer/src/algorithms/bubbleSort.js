// bubbleSort.js
function bubbleSort(array, updateCounts) {
  let comparisons = 0;
  let swaps = 0;
  const steps = [array.slice()];

  const len = array.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      comparisons++;
      if (array[i] > array[i + 1]) {
        swaps++;
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
        steps.push(array.slice());
      }
    }
  } while (swapped);

  updateCounts(comparisons, swaps);
  return steps;
}

export default bubbleSort;
