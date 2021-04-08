let originalArray = [];

function map(originalArray, callback) {
    let newArray = []
  
    for (let i = 0; i < originalArray.length; i++) {
      let theElement = originalArray[i]
      newArray.push(callback(theElement))
    }
  
    return newArray;
  }
  
  function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }