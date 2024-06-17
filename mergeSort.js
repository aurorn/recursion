function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return sortedArray.concat(left.slice()).concat(right.slice());
}

const args = process.argv.slice(2);
const numbers = args.map(Number);

if (numbers.some(isNaN)) {
  console.log("Please provide only numbers as input.");
} else {
  const sortedNumbers = mergeSort(numbers);
  console.log("Sorted numbers:", sortedNumbers);
}
