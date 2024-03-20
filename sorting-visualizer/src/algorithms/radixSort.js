// radixSort.js
async function radixSort(array, steps = []) {
    const maxDigitCount = mostDigits(array);
    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < array.length; i++) {
        let digit = getDigit(array[i], k);
        digitBuckets[digit].push(array[i]);
      }
      array = [].concat(...digitBuckets);
      steps.push(array.slice());
      await sleep(50); // Delay for visualization
    }
    return steps;
  }
  
  function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
  }
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  export default radixSort;
  