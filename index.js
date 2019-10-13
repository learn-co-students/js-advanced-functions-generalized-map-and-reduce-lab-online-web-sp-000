// Add your functions here

  function map(array, callback){
      let newArray = []
    for(let i = 0; i < array.length; i++){
        let element = array[i]
        newArray.push(callback(element))
    }
    return newArray
  };


function reduce(array, callback, starting){
    let newArray = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < array.length; i++) {
      newArray = callback(array[i], newArray)
    }
  
    return newArray;
  }
  