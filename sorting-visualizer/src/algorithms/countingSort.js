// countingSort.js
async function countingSort(array, steps = []) {
    const max = Math.max(...array);
    const counts = new Array(max + 1).fill(0);
  
    // Count frequencies of each element
    for (let num of array) {
      counts[num]++;
    }
  
    let sortedIndex = 0;
    // Reconstruct sorted array
    for (let i = 0; i < counts.length; i++) {
      while (counts[i] > 0) {
        array[sortedIndex++] = i;
        counts[i]--;
        steps.push(array.slice()); // Push current state of array to steps
        await sleep(50); // Delay for visualization
      }
    }
  
    return steps;
  }
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  export default countingSort;
  