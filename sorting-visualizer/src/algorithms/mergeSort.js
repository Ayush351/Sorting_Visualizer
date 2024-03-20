// mergeSort.js
function mergeSort(array) {
    if (array.length <= 1) {
      return [array];
    }
  
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    const leftParts = mergeSort(left);
    const rightParts = mergeSort(right);
  
    const merged = merge(leftParts[leftParts.length - 1], rightParts[rightParts.length - 1]);
  
    return [...leftParts.slice(0, -1), ...rightParts.slice(0, -1), merged];
  }
  
  function merge(left, right) {
    let result = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] < right[rightIdx]) {
        result.push(left[leftIdx]);
        leftIdx++;
      } else {
        result.push(right[rightIdx]);
        rightIdx++;
      }
    }
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
  }
  
  export default mergeSort;
  