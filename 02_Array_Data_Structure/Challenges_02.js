//
// Merge the sorted arrays
// Eg: [0, 3, 4, 31] and [4, 6, 30]
// [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArray(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

mergeSortedArray([0, 3, 4, 31], [4, 6, 30]);
