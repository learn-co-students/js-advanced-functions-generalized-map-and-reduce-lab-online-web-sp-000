// Add your functions here
const array = [1,2,3,4,5];

function map(array, callBack) {
    let r = []
    for (let i = 0; i < array.length; i++){
    let element = array[i]
    r.push(callBack(element))
  }
  debugger;
  return r;
}

map(array);

function reduce(array, cb, starting) {
    let r = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1

    for (; i < array.length; i++) {
        r = cb(array[i], r)
    }
    return r;
}
