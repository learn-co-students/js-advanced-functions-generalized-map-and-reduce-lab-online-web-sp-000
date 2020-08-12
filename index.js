
function map(arr, callbackFn) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let e = arr[i];
        newArr.push(callbackFn(e));
    }
    return newArr;
}

let testArr = [1,2,3];
map(testArr, (e)=> { return e * e})


function reduce(arr, callbackFn, initialValue){
    let r = (!!initialValue) ? initialValue : arr[0]
    let i = (!!initialValue) ? 0 : 1
  
    for (; i < arr.length; i++) {
      r = callbackFn(arr[i], r)
    }
  
    return r;
}