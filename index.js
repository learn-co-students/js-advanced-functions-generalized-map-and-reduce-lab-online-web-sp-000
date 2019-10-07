// Add your functions here
const map = (arr, fx) => {
    const newArray = []; 
    for(let x of arr){
        newArray.push((fx)(x)) 
    }
    return newArray; 
}

const reduce = (arr, fx, startingValue) => {
    let value = (!!startingValue) ? startingValue : arr[0]
    let i = (!!startingValue) ? 0 : 1
  
    for (; i < arr.length; i++) {
      value = fx(arr[i], value)
    }
  
    return value;
  }