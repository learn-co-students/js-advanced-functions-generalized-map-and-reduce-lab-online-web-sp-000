
function map(src, functionCall) {
  let r = [];
  for (let i = 0; i < src.length; i++) {
    r.push(functionCall(src[i]));
  }
  return r
}

function reduce(sourceArray, functionCall, startingPoint = 0) {
  let answer = (!!startingPoint) ? startingPoint : sourceArray[0];
  let i = (!!startingPoint) ? 0 : 1
  for (; i < sourceArray.length; i++) {
    answer = functionCall(sourceArray[i], answer);

  }
  return answer
}
