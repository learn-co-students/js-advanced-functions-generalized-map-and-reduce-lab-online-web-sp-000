// Add your functions here
function map(set, arg) {
    let result = [];
    for (let n of set) {
        result.push(arg(n));
    }
    return result;
}


// function reduce(set, arg, start) {
//     let result = set[0];
//     if (start) {
//         result = start;
//     }
//     for (let n of set) {
//         result = arg(n, result);
//     }
//     return result;
// }

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }