// map method
function map(array, callback) {
const newArray = []
for (let i = 0; i < array.length; i++) {
  newArray.push(callback(array[i], i, this));
}
return newArray;
}


//reduce method
function reduce(array, callback, start){
    let r = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1

    for (; i < array.length; i++) {
      r = callback(array[i], r)
    }
  return r;
  }
