function map(array, arrayFunction) {
  let a = [];
  for (let i = 0; i < array.length; i++) {
    a.push(arrayFunction(array[i]));
  }
  return a;
}

function reduce(array, arrayFunction, int) {
  let total;
  let i;

  if (int === undefined) {
    i = 1;
    total = array[0];
  } else {
    i = 0;
    total = int;
  }

  for (; i < array.length; i++) {
    total = arrayFunction(array[i], total);
  }
  return total;
}
