
function map(sArray, array2) {
    let newArray = []
    for (let i = 0; i < sArray.length; i++) {
      let element = sArray[i]
      newArray.push(array2(element))
    }
    return newArray
  }


  function reduce(sArray, array2, starter) {
    let x = (!!starter) ? starter : sArray[0]
    let i = (!!starter) ? 0 : 1
  
    for (; i < sArray.length; i++) {
      x = array2(sArray[i], x)
    }
  
    return x;
  }