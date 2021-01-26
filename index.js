// Add your functions here
function map(arr, funk) {
  let array = [];
  arr.forEach(x => array.push(funk(x)));
  return array;
};

function reduce(arr, funk, start) {
  let total = (!!start) ? start : arr[0]

  let index = (!!start) ? 0 : 1

    for (; index < arr.length; index++) {
    total = funk(arr[index], total)
    }

  return total
}
