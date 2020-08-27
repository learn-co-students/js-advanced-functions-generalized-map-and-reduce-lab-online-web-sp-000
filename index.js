function map(src, fn) {
  let r = [];
  for (let i = 0; i < src.length; i++) {
    r.push(fn(src[i]));
  }
  return r;
}

function reduce(src, fn, startingPoint = 0) {
  let sum = startingPoint;
  for (let i = 0; i < src.length; i++) {
    if (startingPoint !== 0) {
       sum = sum + fn(src[i]);
     } else {
        sum = fn(src[i]);
     }
  }
  return sum;
}
