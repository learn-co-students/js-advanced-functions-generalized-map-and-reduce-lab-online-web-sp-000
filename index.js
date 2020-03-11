function map(arr, fun) {
    let newArray = [];
     arr.forEach(e => {
         newArray.push(fun(e))
     });
     return newArray
 }

function reduce(arr, f, num = false) {
    let returnVal = (num) ? num : arr[0];
    let i = (num) ? 0 : 1;
 
    for (; i < arr.length; i++) {
         returnVal = f(arr[i], returnVal)
    }
    return returnVal
}