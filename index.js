// Add your functions here
function map(arr, callBack) {
    let answer = []
  
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i]
      answer.push(callBack(element))
    }
  
    return answer;
  }
  
  function reduce(arr, callBack, startIndex){
    let answer = (!!startIndex) ? startIndex : arr[0]
    let i = (!!startIndex) ? 0 : 1
  
    for (i; i < arr.length; i++) {
      answer = callBack(arr[i], answer)
    }
  
    return answer;
  }