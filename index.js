function map(src, cb) {
  let r = []

  for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    r.push(cb(theElement))
  }

  return r;
}

function reduce(arr, callback, start) {
  let accumulator = start ? start : arr[0];
  // Arr value is already set in accumulator is start not provided, thus loop will start at arr[1] 
  let i = start ? 0 : 1;
  // i can be set outside of for loop.
  for (; i < arr.length; i++) {
    accumulator = callback(arr[i], accumulator);
   }
  
  return accumulator;
}
