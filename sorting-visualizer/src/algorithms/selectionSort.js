// selectionSort.js
function selectionSort(array) {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < len; j++) {
        if (array[j] < array[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        const temp = array[i];
        array[i] = array[minIdx];
        array[minIdx] = temp;
      }
    }
    return array;
  }
  
  export default selectionSort;
  