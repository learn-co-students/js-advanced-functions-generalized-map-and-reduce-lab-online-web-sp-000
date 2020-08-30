// Add your functions here
function map(arr, func){
    let newArr = []
    arr.forEach(element => {
        newArr.push(func(element))
    });
    return newArr
}

function reduce(arr, func, start){
    let r = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1
  
    for (; i < arr.length; i++) {
      r = func(arr[i], r)
    }
  
    return r;
  }