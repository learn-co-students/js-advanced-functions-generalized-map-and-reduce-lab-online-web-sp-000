function map(src, fn) {
  let r = [];
  for (let i = 0; i < src.length; i++) {
    r.push(fn(src[i]));
  }
  return r;
}

function reduce(src, fn, startingPoint = 0) {
  let sum = startingPoint;
  let numbers = true;
  for (let i = 0; i < src.length; i++) {
    if (typeof src[i] !== Number) {
      numbers = false;
    }
  }
  if (numbers === true) {
    for (let i = 0; i < src.length; i++) {
      sum = sum + src[i];
    }
  } else {
    for (let i = 0; i < src.length; i++) {
      sum = fn(src[i]);
    }
  }
  return sum;
}
